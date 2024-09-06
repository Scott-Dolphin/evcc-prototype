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
import May from "./routes/staff/may_fang"
import Hsun from "./routes/staff/hsun_hsun"
import Rebecca from './routes/staff/rebecca_yang'
import Heidi from './routes/staff/heidi_kuo'
import Tsai from './routes/staff/tsai-hsun_ko'
import Esther from './routes/staff/esther_fong'
import Linda from './routes/staff/linda_houry'
import Saylor from './routes/staff/saylor_valin'

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
  {
    path:"/staff/may_fang",
    element: < May/>,
  },
  {
    path:"/staff/hsun_hsun",
    element: < Hsun/>,
  },
  {
    path:"/staff/rebecca_yang",
    element: < Rebecca/>,
  },
  {
    path:"/staff/heidi_Kuo",
    element: < Heidi/>,
  },
  {
    path:"/staff/tsai-hsun_ko",
    element: < Tsai/>,
  },
  {
    path:"/staff/esther_fong",
    element: < Esther/>,
  },
  {
    path:"/staff/linda_houry",
    element: <Linda />,
  },
  {
    path:"/staff/saylor_valin",
    element: < Saylor/>,
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
