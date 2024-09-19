import React from "react";
import HomePage from "./HomePage";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import WatchPage from "./WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <Browse />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const Body = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
