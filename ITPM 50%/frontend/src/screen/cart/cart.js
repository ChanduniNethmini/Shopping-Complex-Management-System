import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Button, IconButton } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import shopImage from '../../images/shop.png';
import CustomerNav from '../../components/customer-Nav';
import geanaratePDF from '../../components/PDFGenarator';

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
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    media: {
        height: 40,
    },
    appTitle: {
        textAlign: 'center',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    deleteButton: {
        marginLeft: 'auto',
    },
    cardContent: {
        width: '50%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appHeader: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottom: '1px solid #000000',
        alignItems: 'center',
    },
    backBtn: {
        display: 'flex',
        alignItems: 'center',
        '&>*': {
            marginRight: theme.spacing(2),
            color: 'inherit',
        }
    },
    btnRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
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
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid #000000',
        padding: theme.spacing(3),
        borderRadius: '5px',
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(5px)',
        boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.5)',
        marginTop: theme.spacing(4),
    },
    illustration: {
        position: "absolute",
        zIndex: 0,
        left: 0,
        width: '100%',
        height: '92vh',

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing(2),
        '& > *': {
            marginBottom: theme.spacing(1),
        }
    }
}));

const CartPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [dataList, setDataList] = useState([]);


    useEffect(() => {
        getItemData();
    }, [dataList]);

    const getItemData = async () => {
        try {
            const response = await axios.get(API_URL + "/item/get");
            setDataList(response.data.items);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        getCartData();
    }, [cartItems]);

    const getCartData = async () => {
        try {
            const response = await axios.get(API_URL + "/cart/get");
            setCartItems(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const handleDelete = (id) => {
        axios.delete(API_URL + "/cart/delete/" + id)
            .then((res) => {
                setDataList(dataList.filter((item) => item._id !== id));
            }).catch((err) => {
                console.log(err);
            });
    };

    const getReport = () => {
        let dataListCopy = cartItems.map(item => {
            return {
                itemID: item._id,
                itemName: dataList.find(data => data._id === item.itemID)?.itemName,
                itemPrice: dataList.find(data => data._id === item.itemID)?.itemPrice,
            }
        });
        let columns = ['Item Id' , 'Item Name', 'Item Price' ];;
        geanaratePDF(dataListCopy, columns, 'Bill');
    };
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
                    <div className={classes.appHeader}>
                        <Typography className={classes.backBtn} onClick={() => navigate(-1)} >Back to Shop</Typography>
                        <Typography variant="h4" className={classes.appTitle}>Shopping Cart</Typography>
                    </div>
                    {
                        cartItems.length > 0 ?
                            (
                                <Grid container spacing={3} className={classes.gridContainer}>
                                    {cartItems.map((item) => (
                                        <Grid item xs={12} key={item.id}>
                                            <Card className={classes.card}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={item.image}
                                                        title={dataList.find(data => data._id === item.itemID).itemName}
                                                    />
                                                    <CardContent className={classes.cardContent}>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {dataList.find(data => data._id === item.itemID).itemName}
                                                        </Typography>
                                                        <Typography variant="body2" color="textPrimary" component="p">
                                                            Price: ${item.price}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <IconButton aria-label="delete" className={classes.deleteButton} onClick={() => handleDelete(item._id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                <div className={classes.content}>
                                    <Typography variant="h4" gutterBottom>Cart is empty</Typography>
                                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Back to Shop</Button>
                                </div>
                            )
                    }
                    {
                        cartItems.length > 0 && (
                            <div className={classes.btnRow}>
                                <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={() => getReport()}>Checkout</Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CartPage;
