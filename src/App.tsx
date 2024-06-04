import {lazy,Suspense} from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  PageLoader from './components/loaders/PageLoader';
import ErrorPage from './pages/error/ErrorPage';
import DashboardLayout from './layout/DashboardLayout';
import ErrorBoundary from './components/errors/ErrorBoundary';
import PageNotFound from './pages/error/PageNotFound';
import './App.scss'


function App() {

  const LoginPage = lazy(() => import("./pages/LoginPage"));
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
      path: "/dashboard/users",
      element: <DashboardLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <UsersPage />,
        },
        {
          path: ":userId",
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
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
