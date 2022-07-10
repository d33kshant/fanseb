import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate, Outlet } from 'react-router-dom';
import TableChartIcon from '@mui/icons-material/TableChart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BuildIcon from '@mui/icons-material/Build';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { DashboardStyles } from './DashboardStyle'

const drawerWidth = 240;

function Dashboard(props) {
    const navigate = useNavigate()
    const menuItems = [
        {
            text: "Brand Profile",
            path: '/dashboard',
            icon: <TableChartIcon />
        },
        {
            text: "Edit Profile",
            path: '/dashboard/editBrandProfile',
            icon: <BorderColorIcon />
        },
        {
            text: "Add Product",
            path: '/dashboard/addProduct',
            icon: <AddCircleIcon />
        },
        {
            text: "Product List",
            path: '/dashboard/productList',
            icon: <FormatListBulletedIcon />
        },
        {
            text: "Manage Product",
            path: '/dashboard/manageProduct',
            icon: <BuildIcon />
        },
    ]


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = DashboardStyles();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* <Toolbar />
            <Divider /> */}

            <List>
                {menuItems.map(item => (
                    <ListItem
                        key={item.text}
                        disablePadding
                        onClick={() => navigate(item.path)}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.panel}>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >

                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <nav className={classes.sideBar}>

                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </nav>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>

                <div
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Outlet />

                </div>
            </Box>
        </div>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
