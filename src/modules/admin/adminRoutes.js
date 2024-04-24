import { paths } from "../../constants/paths";
import { AdminUpdate } from "./entry/AdminUpdate";

export const adminRoutes = [
    {
        id: "admin",
        path: `/${paths.user}/:id`,
        element: <AdminUpdate />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: null, url: null, current : "Admin" },
                ]
            }
        }
    }
];
