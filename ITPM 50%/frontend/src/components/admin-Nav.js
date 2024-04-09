import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import StorefrontIcon from "@material-ui/icons/StorefrontRounded";
import StoreIcon from "@material-ui/icons/StoreRounded";
import CakeIcon from "@material-ui/icons/Cake";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { MeetingRoom } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex", 
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    row: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: theme.spacing(2)
    },
    card: {
        minWidth: 200
    },
    logo: {
        height: "100px",
        width: "12.5vw",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.contrastText,
    }
}));

const AdminNav = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <div className={classes.logo} >
                    <Typography variant="h6" style={{ color: 'white' }}>
                        Emporium Admin
                    </Typography>
                </div>
                <Divider />
                <List>
                    <ListItem button component={Link} to='/admin_dashboard' >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to='/seller_table'>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sellers" />
                    </ListItem>
                    <ListItem button component={Link} to='/stallseeker_table'>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Stall seekers" />
                    </ListItem>
                    <ListItem button component={Link} to='/permenentshop_table'>
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Permanent shops" />
                    </ListItem>
                    <ListItem button component={Link} to='/temporyshop_table'>
                        <ListItemIcon>
                            <StorefrontIcon />
                        </ListItemIcon>
                        <ListItemText primary="Temporary shops" />
                    </ListItem>
                    <ListItem button component={Link} to='/event_table'>
                        <ListItemIcon>
                            <CakeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Events" />
                    </ListItem>

                    <ListItem button component={Link} to='/login'>
                        <ListItemIcon>
                            <MeetingRoom />
                        </ListItemIcon>
                        <ListItemText primary="Log out"  color="secondary" />
                    </ListItem>
                </List>
            </Drawer>
        </div >
    );
};

export default AdminNav;
