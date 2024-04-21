import { paths } from "../../constants/paths";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from "@mui/icons-material/Add";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddchartIcon from '@mui/icons-material/Addchart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import GroupsIcon from '@mui/icons-material/Groups';

export const items = [
    {
        key: "0",
        label: "Dashboard",
        data: "Documents Folder",
        icon: <InsertChartIcon />,
        url: "/dashboard",
    },
    {
        key: "2",
        label: "Table",
        data: "Table",
        icon: <CategoryIcon />,
        children: [
            {
                key: "2-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.table,
            },
            {
                key: "2-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.tableCreate,
            },
        ],
    },
    {
        key: "2",
        label: "Category",
        data: "Category",
        icon: <CategoryIcon />,
        children: [
            {
                key: "2-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.category,
            },
            {
                key: "2-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.categoryCreate,
            },
        ],
    },
    {
        key: "2",
        label: "Item",
        data: "Item",
        icon: <FastfoodIcon />,
        children: [
            {
                key: "2-1",
                label: "Data",
                icon: <BarChartIcon />,
                url: paths.itemData,
            },
            {
                key: "2-1",
                label: "Add Data",
                icon: <AddchartIcon />,
                url: paths.itemDataCreate,
            },
            {
                key: "2-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.item,
            },
            {
                key: "2-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.itemCreate,
            },
        ],
    },
    {
        key: "2",
        label: "Material",
        data: "Material",
        icon: <AutoAwesomeMosaicIcon />,
        children: [
            {
                key: "2-1",
                label: "Data",
                icon: <BarChartIcon />,
                url: paths.materialData,
            },
            {
                key: "2-1",
                label: "Add Data",
                icon: <AddchartIcon />,
                url: paths.materialDataCreate,
            },
            {
                key: "2-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.material,
            },
            {
                key: "2-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.materialCreate,
            },
        ],
    },
    {
        key: "2",
        label: "Transfer Item",
        data: "Transfer Item",
        icon: <LocalShippingIcon />,
        children: [
            {
                key: "2-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.transferItem,
            },
            {
                key: "2-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.transferItemCreate,
            },
        ],
    },
    {
        key: "2",
        label: "Transfer Material",
        data: "Transfer Material",
        icon: <AirportShuttleIcon />,
        children: [
            {
                key: "2-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.transferMaterial,
            },
            {
                key: "2-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.transferMaterialCreate,
            },
        ],
    },
    {
        key: "1",
        label: "Shop",
        data: "Shop",
        icon: <StoreIcon />,
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
        key: "1",
        label: "Customer",
        data: "Customer",
        icon: <GroupsIcon />,
        children: [
            {
                key: "1-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.customer,
            },
            {
                key: "1-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.customerCreate,
            },
        ],
    },
    {
        key: "1",
        label: "Cashier",
        data: "Cashier",
        icon: <Diversity2Icon />,
        children: [
            {
                key: "1-1",
                label: "List",
                icon: <FormatListBulletedIcon />,
                url: paths.cashier,
            },
            {
                key: "1-2",
                label: "Create",
                icon: <AddIcon />,
                url: paths.cashierCreate,
            },
        ],
    },
    {
        key: "2",
        label: "User",
        data: "User",
        icon: <Diversity1Icon />,
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
