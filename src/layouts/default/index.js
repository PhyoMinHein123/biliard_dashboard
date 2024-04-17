import { Outlet, useNavigate } from 'react-router-dom';
import { getData, removeAllData } from '../../helpers/localstorage';
import { AppBar, DrawerHeader, keys, Drawer } from '../../constants/config';
import { useEffect, useState } from 'react';
import { Box, Collapse, Divider, IconButton, List, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import { items } from './defaultPaths';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { paths } from '../../constants/paths';

export const DefaultLayout = () => {


    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const profileOpen = Boolean(anchorEl);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState();
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClickOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toogleExpand = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const token = getData(keys.API_TOKEN);
    const navigate = useNavigate();

    const logout = async () => {
        removeAllData();
        navigate(paths.adminLogout);
    }

    const getUserData = () => {
        const data = getData(keys.USER)
        setUser(data)
    }

    useEffect(() => {
        getUserData()
    }, [])

    useEffect(() => {
        if (!token) {
            navigate('/auth/login');
        }
    }, [token, navigate]);

    return (
        <>
            {token && (
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={ open ? handleDrawerClose : handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2 }}
                            >
                                {open ? (<CloseIcon />) : (<MenuIcon />)}
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                Biliard
                            </Typography>

                            <Tooltip title="Account settings">
                                <Typography variant="h6" sx={{ display: "inline" }}>
                                    {user?.name}
                                </Typography>
                                <IconButton
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={profileOpen ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={profileOpen ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                </IconButton>
                                <IconButton
                                    id="basic-button"
                                    size='small'
                                    onClick={handleClickOpen}
                                >
                                    <MoreVertIcon style={{ color: 'white' }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id="account-menu"
                                open={profileOpen}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>

                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        open={open}
                    >
                        <DrawerHeader>
                            {/* <Typography variant='h5'>Biliard</Typography> */}
                        </DrawerHeader>
                        <Divider />
                            <List>
                                {items.map((nav, index) => (
                                    <div key={index}>
                                        <ListItemButton onClick={() => {
                                            toogleExpand(index);
                                            if (nav.url) {
                                                navigate(nav.url)
                                            }
                                        }
                                        }>
                                            <ListItemIcon>
                                                {nav.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={nav.label} />
                                            {nav?.children?.length > 0 && (
                                                expandedIndex === index ? <ExpandLess /> : <ExpandMore />
                                            )}
                                        </ListItemButton>

                                        {
                                            nav?.children?.length > 0 && (
                                                <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        {
                                                            nav.children.map((child, index) => (
                                                                <ListItemButton
                                                                    onClick={() => {
                                                                        navigate(child.url)
                                                                    }}
                                                                    key={child.key}
                                                                    sx={{ pl: 4 }}
                                                                >
                                                                    <ListItemIcon>
                                                                        {child.icon}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={child.label} />
                                                                </ListItemButton>
                                                            ))
                                                        }
                                                    </List>
                                                </Collapse>
                                            )
                                        }
                                    </div>
                                ))}
                            </List>
                        <Divider />
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    {user?.name}
                                </ListItemText>
                            </ListItemButton>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Logout
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <DrawerHeader />
                        <Outlet />
                    </Box>
                </Box>
            )}
        </>
    )
}