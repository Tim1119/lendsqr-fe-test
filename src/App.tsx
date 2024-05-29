import {lazy,Suspense} from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from './components/Loader';
import ErrorPage from './pages/error/ErrorPage';
import DashboardLayout from './layout/DashboardLayout';
import ErrorBoundary from './components/errors/ErrorBoundary';
import PageNotFound from './pages/error/PageNotFound';
import './App.scss'


function App() {

  const LoginPage = lazy(() => import("./pages/LoginPage"));
  const DashboardPage = lazy(() => import("./pages/DashboardPage"));
  const UsersPage = lazy(() => import("./pages/users/UsersPage"));
  const UserDetailPage = lazy(() => import("./pages/users/UserDetailPage"));


  const router = createBrowserRouter([
    {
      path: "",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <DashboardLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        {
          path: "users",
          element: <UsersPage />,
        },
        {
          path: "users/:userId",
          element: <UserDetailPage />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
