import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import Root from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

import HomePage from "./pages/HomePage";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventsRootLayout from "./pages/EventsRootLayout";
import NewEventPage from "./pages/NewEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
// import EventDetail, {
//   loader as eventDetail,
//   action as deleteEventAction,
// } from "./pages/EventDetail";
// import NewEventPage from "./pages/NewEventPage";
// import EditEventPage from "./pages/EditEventPage";
// import Root from "./pages/Root";
// import EventsRootLayout from "./pages/EventsRootLayout";
// import ErrorPage from "./pages/ErrorPage";
// import { action as manipulateEventAction } from "./components/EventForm";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <HomePage /> },
//       {
//         path: "events",
//         element: <EventsRootLayout />,
//         children: [
//           {
//             index: true,
//             element: <EventsPage />,
//             loader: eventsLoader,
//           },
//           {
//             path: ":eventId",
//             id: "event-detail",
//             loader: eventDetail,
//             children: [
//               {
//                 index: true,
//                 element: <EventDetail />,
//                 action: deleteEventAction,
//               },
//               {
//                 path: "edit",
//                 element: <EditEventPage />,
//                 action: manipulateEventAction,
//               },
//             ],
//           },
//           {
//             path: "new",
//             element: <NewEventPage />,
//             action: manipulateEventAction,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router}></RouterProvider>;
// }

// export default App;
