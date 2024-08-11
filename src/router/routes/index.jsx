
import { MainLayout } from "../../layout";
import { privateRoutes } from "./privateRoutes";

export const getRoutes = () => {
  return {
    path: '/',
    element: <MainLayout />,
    children: privateRoutes,
  }
}