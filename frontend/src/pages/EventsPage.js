import { Suspense, useEffect, useState } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  // const response = await fetch("http://localhost:8080/events");

  // if (!response.ok) {
  //   setError("Fetching events failed.");
  // } else {
  //   const resData = await response.json();
  //   setFetchedEvents(resData.events);
  // }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  return (
    <>
      {/* <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      {/* {!isLoading && fetchedEvents && } */}
      {/* <EventsList events={events} /> */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading..</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
          {/*once promise is resolved or once the data is there */}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

async function loadEvents() {
  //loader code -> in browser not in some browser but we can't use react Hooks
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    // throw { message : 'Could not Fetch events.' }
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
