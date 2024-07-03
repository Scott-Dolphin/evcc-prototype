import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom"
import './index.css'
import Root from "./routes/root"
import Mission from "./routes/mission"
import Classes from "./routes/classes"
import Registration from "./routes/registration"
import Connect from "./routes/connect"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/mission",
    element: < Mission/>,
  },
  {
    path: "/classes",
    element: < Classes/>,
  },
  {
    path: "/registration",
    element: < Registration/>,
  },
  {
    path: "/connect",
    element: < Connect/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
