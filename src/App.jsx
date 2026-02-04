import { useState } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Homepage /Home";
import Events from "./components/Eventspage/Events";
import Feed from "./components/Feedpage/Feed";
import Navbar from "./components/common/Navbar";
import Username from "./components/Username/Username";

function App() {
  < Navbar />
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      )
    },
    {
      path: "/Username",
      element: (
        <>
          <Events />

        </>
      )
    },
    {
      path: "/Feed",
      element: (
        <>
          <Feed />
        </>
      )
    },
    {
      path: "/Events",
      element: (
        <>
          <Username/>
        </>
      )
    },
  ])
  return (
    <RouterProvider router={router} />
    
  );
}



export default App;