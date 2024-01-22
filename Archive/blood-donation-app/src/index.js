import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DonorForm from "./components/DonorForm";
import Homepage from "./components/Homepage";
import { router } from "./Router";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Homepage />}>
//       <Route path="/home" exact element={<Homepage />} />
//       <Route path="/donor-form" exact element={<DonorForm />} />
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
