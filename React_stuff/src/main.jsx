import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
//import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact, {loader as contactLoader} from "./routes/contact";
import Root, { 
  loader as rootLoader, 
  action as rootAction
} from "./routes/root";
import EditContact from "./routes/edit";



const router = createBrowserRouter([ 
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action:rootAction,
        children: [
          {
            path: "contacts/:contactID",
            element: <Contact />, 
            loader: contactLoader,
          },
        ],
      },
      {
        path: "contacts/:contactID/edit",
        element: <EditContact/>,
        loader: contactLoader,
      },
    {
      path: "contacts/:contactID",
      element: <Contact/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);