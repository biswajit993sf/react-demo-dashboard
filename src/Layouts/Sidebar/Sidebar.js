import * as React from 'react';
import './Sidebar.scss';
import Header from '../Header/Header';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

import Dashboard from '../../Pages/Dashboard/Dashboard';
import Flipkart from '../../Pages/Flipkart/Flipkart';
import Google from '../../Pages/Google/Google';
import Login from '../../Pages/Login/Login';
import Website from '../../Pages/Website/Website';

const DashboardPage = () => <div><Dashboard /></div>;
const FlipkartPage = () => <div><Flipkart /></div>;
const GooglePage = () => <div><Google /></div>;
const LoginPage = () => <div><Login /></div>;
const WebsitePage = () => <div><Website /></div>;

const drawerWidth = 240;

function Sidebar() {
    const routes = [
        { path: '/', name: 'Dashboard', element: <DashboardPage />, exact: true, icon: <DashboardOutlinedIcon /> },
        {
            path: '/flipkart', name: 'Flipkart', element: <FlipkartPage />, icon: <ShoppingCartIcon />, hasSubmenu: true, submenu: [
                { path: '/flipkart/products', name: 'Products', element: <div>Products Page</div> },
                { path: '/flipkart/orders', name: 'Orders', element: <div>Orders Page</div> },
            ]
        },
        { path: '/google', name: 'Google', element: <GooglePage />, icon: <AutoGraphOutlinedIcon /> },
        { path: '/login', name: 'Login', element: <LoginPage />, icon: <LoginOutlinedIcon /> },
        { path: '/website', name: 'Website', element: <WebsitePage />, icon: <LanguageOutlinedIcon /> },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Header />
            </AppBar>

            <Router>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {routes.map((route, index) => (
                                <React.Fragment key={route.name}>
                                    <ListItem disablePadding>
                                        <ListItemButton
                                            component={NavLink}
                                            to={route.path}
                                            sx={{
                                                '&.active': {
                                                    backgroundColor: 'rgb(66 93 120 / 54%)',
                                                    color: '#fff',
                                                    '& .MuiListItemIcon-root': {
                                                        color: '#fff',
                                                    },
                                                },
                                                color: '#b0b0b0',
                                            }}
                                        >
                                            <ListItemIcon>
                                                {route.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={route.name} />
                                        </ListItemButton>
                                    </ListItem>
                                    {route.hasSubmenu && route.submenu.map((subRoute) => (
                                        <ListItem key={subRoute.name} disablePadding sx={{ pl: 4 }}>
                                            <ListItemButton
                                                component={NavLink}
                                                to={subRoute.path}
                                                sx={{
                                                    '&.active': {
                                                        backgroundColor: 'rgb(66 93 120 / 54%)',
                                                        color: '#fff',
                                                        '& .MuiListItemIcon-root': {
                                                            color: '#fff',
                                                        },
                                                    },
                                                    color: '#b0b0b0',
                                                }}
                                            >
                                                <ListItemIcon>
                                                    <SubdirectoryArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={subRoute.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </React.Fragment>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Breadcrumb />
                    <Routes>
                        {routes.map((route) => (
                            <Route key={route.name} path={route.path} element={route.element} exact={route.exact} />
                        ))}
                        {routes.filter(route => route.hasSubmenu).flatMap(route =>
                            route.submenu.map(subRoute => (
                                <Route key={subRoute.name} path={subRoute.path} element={subRoute.element} />
                            ))
                        )}
                    </Routes>
                </Box>
            </Router>
        </Box>
    );
}

export default Sidebar;
