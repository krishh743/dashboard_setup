import Dashboard from "../pages/dashboard/Dashboard";
import TestPage from "../pages/test/Test";

const coreRoutes = [
  {
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/test",
    title: "test",
    component: TestPage,
  },
];

const routes = [...coreRoutes];
export default routes;
