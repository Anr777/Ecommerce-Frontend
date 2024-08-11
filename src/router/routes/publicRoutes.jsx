import { lazy } from "react";
// import { AdminLogin } from "../../views/auth";
// import { Login, Register } from "../../views/auth";
const Login = lazy( () => import('../../views/auth/Login'));
const Register = lazy( () => import('../../views/auth/Register'));
const AdminLogin = lazy( () => import('../../views/auth/AdminLogin'));


const publicRoutes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/admin/login',
    element: <AdminLogin />
  }
]

export default publicRoutes;