import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Customers } from "./pages/customer/customer";
import { Contacts } from "./pages/contact/contact";
import { Dashboard } from "./pages/dashboard/dashboard";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/customer",
        element: <Customers />
      },
      {
        path: "/contact",
        element: <Contacts />
      },
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />
      },
    ]
  },
])