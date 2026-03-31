import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import swiftstore from "./store/index.js";
import Wishlist from "./routes/Wishlist.jsx";
import Profile from "./routes/Profile.jsx";
import Error404 from "./routes/Error404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
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
      {
        path: "/profile",
        element: <Profile />,
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
