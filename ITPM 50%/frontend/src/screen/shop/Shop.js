import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CustomerNav from '../../components/customer-Nav';
import { API_URL } from '../../constants/constants';
import shopImage from '../../images/shop.png';

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
        width: '100%',
        height: '100%',
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
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
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

const ShopHomePage = () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    const [shops, setShops] = useState(localStorage.getItem("shop"));

    useEffect(() => {
        getData();
    }, [items]);

    const getData = async () => {
        setShops(localStorage.getItem("shop"));
        console.log(items);
        try {
            const response = await axios.get(API_URL + "/item/get");
            setItems(response.data.items.filter((item) => item.shopID !== shops));
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const addToCart = async (id, price) => {
        try {
            let customerID = JSON.parse(localStorage.getItem("user"))._id;
            const response = await axios.post(API_URL + "/cart/add", {
                itemID: id,
                stallID: shops,
                customerID: customerID,
                price: price

            });
            if (response.data.success) {
                alert("Item added to cart successfully!");
            } else {
                alert("Error adding item to cart: " + response.data.message);
            }
        } catch (error) {
            console.error("Error adding item to cart: ", error);
        }
    }
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
                    <Typography variant="h4" className={classes.appTitle}>{localStorage.getItem('shopName')}</Typography>
                    <hr/>
                    <Grid container spacing={3} className={classes.gridContainer}>
                        {items.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.shopID}>
                                <Card className={classes.card}>
                                    <CardActionArea >
                                        <CardMedia
                                            className={classes.media}
                                            image={item.itemImage} // Assuming shop.image contains the URL of the image
                                            title={item.itemName}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.itemName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.itemDescription}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary" component="p">
                                                Price: ${item.itemPrice}
                                            </Typography>
                                            <div className={classes.buttonRow}>
                                                <Button variant="contained" color="primary" component={Link} to={`/item/${item._id}`}>
                                                    View item
                                                </Button>
                                                <Button variant="contained" color="secondary" component={Link} to={`/cart`} onClick={() => addToCart(item._id, item.itemPrice)}>
                                                    Add to cart
                                                </Button>
                                            </div>
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

export default ShopHomePage;
