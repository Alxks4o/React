import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Site from './routes/site';
import Register from './routes/register';
import Login from './routes/login';
import HomeNav from './components/home_navbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>
  }, 
  {
    path: "/site/:siteid",
    element: <Site/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path: '/',
    element: <HomeNav/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
