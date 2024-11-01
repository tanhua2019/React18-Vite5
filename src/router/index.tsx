import { createBrowserRouter, Navigate } from "react-router-dom";
import Welcome from "@/views/Welcome";
import About from "@/views/About";
import Error404 from "@/views/Error404";
import Error403 from "@/views/Error403";
import Login from "@/views/login/Login";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Welcome />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  },
])

export default router