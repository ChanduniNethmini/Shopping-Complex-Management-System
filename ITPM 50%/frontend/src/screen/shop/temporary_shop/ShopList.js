import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CustomerNav from '../../../components/customer-Nav';
import { API_URL } from '../../../constants/constants';
import shopImage from '../../../images/shop.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '99.5vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
    },
    gridContainer: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(3),
    },
    card: {
        maxWidth: 345,
       
    },
    media: {
        height: 140,
    },
    appTitle: {
        textAlign: 'center',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    container: {
        padding: theme.spacing(3),
        height: '99.5vh',
        width: '98.5vw',
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(5px)',
        position: 'absolute',
        top: '70px',
        zIndex: 1,
    },
    subContainer: {
    },
    illustration: {
        position: "absolute",
        zIndex: 0,
        left: 0,
        width: '100%',
        height: '92vh',

    }
}));

const TemporaryShopHomePage = () => {
    const classes = useStyles();
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(API_URL + "/temporaryShop/get");
            const data = await response.data;
            setShops(data.temporaryShops);
        };
        getData();
    }, [shops]);

    return (
        <div className={classes.root}>
            <CustomerNav />
            <Grid container justify="center">
                <Grid item>
                    <img src={shopImage} alt="login illustration" className={classes.illustration} />
                </Grid>
            </Grid>
            <div className={classes.container}>
                <div className={classes.subContainer}>
                    <Typography variant="h4" className={classes.appTitle}>Temporary Shops</Typography>
                    <hr/>
                    <Grid container spacing={3} className={classes.gridContainer}>
                        {shops.map((shop) => (
                            <Grid item xs={12} sm={6} md={4} key={shop.stallID}>
                                <Card className={classes.card}>
                                    <CardActionArea component={Link} to={`/shop/${shop.stallID}`}>
                                        <CardMedia
                                            className={classes.media}
                                            image={shop.stallImage || shopImage} // Assuming shop.stallImage contains the URL of the image
                                            title={shop.stallName}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {shop.stallName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {shop.stallDescription}
                                            </Typography>
                                            <Button variant="contained" color="primary" component={Link} to={`/shop`} onClick={() => { localStorage.setItem('shop', shop.stallID); localStorage.setItem('shopName', shop.stallName) }}>
                                                Shop Now
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default TemporaryShopHomePage;
