import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import AdminNav from "../../components/admin-Nav";
import DashboardCard from "../../components/DashboardCard";
import dashboardImg from "../../images/admin.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100vh",
        width: "84vw",
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: '5vh',
        alignText: 'start',
        paddingLeft: '15vw',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        position: 'relative',
    },

    row: {
        display: "flex",
        height: "25vh",
        width: '70vw',
        textAlign: 'start',
        justifyContent: "space-around",
        marginBottom: theme.spacing(2)
    },
    card: {
        width: '260px'

    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: '15vw',
        padding: theme.spacing(2),
        paddingTop: '5vh',
        textAlign: "center",
        height: "100%",
        width: "100%",
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(10px)',
    },
    illustration: {
        position: "absolute",
        zIndex: 0,
        width: '100%',
        height: '92vh',

    }
}));

const AdminDashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AdminNav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center">
                    <Grid item>
                        <img src={dashboardImg} alt="login illustration" className={classes.illustration} />
                    </Grid>
                </Grid>
                <div className={classes.container}>
                    <Typography variant="h4" gutterBottom> Admin Dashboard</Typography>
                    <div className={classes.row}>
                        <DashboardCard icon="people" title="Customers" value="100+" />
                        <DashboardCard icon="store" title="Permanent Stalls" value="100+" />
                        <DashboardCard icon="storefront" title="Temporary Stalls" value="100+" />
                        <DashboardCard icon="business" title="Sellers" value="100+" />
                        <DashboardCard icon="event" title="Events" value="100+" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
