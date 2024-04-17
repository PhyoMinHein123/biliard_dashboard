import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/default";
import { NotFound } from "./layouts/default/pages/NotFound";
import { BlankTemplate } from "./layouts/default/pages/BlankTemplate";
import { Login } from "./modules/auth/entry/Login";
import { dashboardRoutes } from "./modules/dashboard/dashboardRoute";
import { shopRoutes } from "./modules/shop/shopRoutes";
import { userRoutes } from "./modules/user/userRoutes";


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <NotFound />,
        children: [
            ...dashboardRoutes,
            ...shopRoutes,
            ...userRoutes,
        ],
    },
    {
        path: "auth",
        element: <BlankTemplate />,
        errorElement: <NotFound />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
]);
