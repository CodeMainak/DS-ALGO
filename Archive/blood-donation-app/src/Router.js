import { createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import DonorForm from "./components/DonorForm";
import Homepage from "./components/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "donor",
        element: <DonorForm />,
      },
    ],
  },
]);
