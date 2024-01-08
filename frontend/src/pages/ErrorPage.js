import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  let title = "An error Occurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Cold not find resource or page";
  }

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
      {/* <h1>An error occured</h1> */}
    </>
  );
}

export default ErrorPage;
