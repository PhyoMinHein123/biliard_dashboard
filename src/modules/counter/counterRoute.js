import { paths } from "../../constants/paths"
import { CounterList } from "./list/CounterList"


export const counterRoutes = [
    {
        id: "counter",
        path: paths.counter,
        element : <CounterList />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Counter", url: paths.counter },
                ],
                role: ['ADMINISTRATOR']
            }
        }
    },
]