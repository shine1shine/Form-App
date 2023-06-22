import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
// import Cart from "./components/cart";
import Counter from "./components/counter";

const router = createBrowserRouter([
  { path: "/", element: <Form /> },
  { path: "/counter", element: <Counter /> },
]);

function App() {
  return (
    <>
      {/* <h2>Form App</h2> */}

      <RouterProvider router={router} />
      {/* <Counter /> */}
    </>
  );
}

export default App;
