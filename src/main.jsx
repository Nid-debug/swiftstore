import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import swiftstore from "./store/index.js";
import Wishlist from "./routes/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={swiftstore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
