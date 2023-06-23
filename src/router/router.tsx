import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../pages/errors/Error";
import NotFound from "../pages/errors/NotFound";
import Loader from "../components/Loader";
import Login from "../pages/Login";
import { lazy, Suspense } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import Users from "../pages/dashboard/Users";


export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader/>}>
          <Login />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: (
        <Suspense fallback={<Loader/>}>
          <DashboardLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader/>}>
              <Users />
            </Suspense>
          ),
        },
       
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  
