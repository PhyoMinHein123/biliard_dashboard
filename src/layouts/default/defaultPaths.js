import { paths } from "../../constants/paths";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import { LibraryMusic, } from "@mui/icons-material";

export const items = [
    {
        key: "0",
        label: "Dashboard",
        data: "Documents Folder",
        icon: <InsertChartIcon />,
        url: "/dashboard",
    },
    {
        key: "1",
        label: "Shop",
        data: "Shop",
        icon: <LibraryMusic />,
        children: [
            {
                key: "1-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.shop,
            },
            {
                key: "1-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.shopCreate,
            },
        ],
    },
    {
        key: "2",
        label: "User",
        data: "User",
        icon: <LibraryMusic />,
        children: [
            {
                key: "2-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.user,
            },
            {
                key: "2-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.userCreate,
            },
        ],
    },
];
