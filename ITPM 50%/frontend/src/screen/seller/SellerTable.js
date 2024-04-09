import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SettingsIcon from "@material-ui/icons/Settings";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import AdminNav from "../../components/admin-Nav";
import { Link } from 'react-router-dom';
import SellerForm from "./sellerForm";
import { TextField } from '@material-ui/core';
import axios from "axios";
import { API_URL } from '../../constants/constants';
import IconButton from '@mui/material/IconButton';
import useStyles from "./style";
import geanaratePDF from "../../components/PDFGenarator";

const SellerTable = () => {
    const classes = useStyles();
    const [dataList, setSataList] = useState([]);
    const [id, setId] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        shopId: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        shopId: ""
    });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(API_URL + "/shopOwner/get");
            const data = await response.data;
            setSataList(data.shopOwners);
            console.log(data);
        }
        getData();
    }, [dataList]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        let errorMessage = "";
        switch (fieldName) {
            case "name":
                errorMessage = value.trim() === "" ? "Name is required" : "";
                break;
            case "email":
                errorMessage = !value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? "Invalid email address" : "";
                break;
            case "phoneNumber":
                errorMessage = !value.match(/^\d{10}$/) ? "Invalid phone number" : "";
                break;
            case "password":
                errorMessage = value.length < 8 ? "Password must be at least 8 characters long" : "";
                break;
            case "shopId":
                errorMessage = value.trim() === "" ? "Shop ID is required" : "";
                break;
            default:
                break;
        }
        setErrors((prevState) => ({
            ...prevState,
            [fieldName]: errorMessage
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(errors).every((x) => x === "")) {
            axios.post(API_URL + "/shopOwner/add", formData)
                .then((res) => {
                    console.log(res);
                    setFormData({
                        name: "",
                        email: "",
                        phoneNumber: "",
                        password: "",
                        shopId: ""
                    });
                    setOpen(false);
                    setErrors({
                        name: "",
                        email: "",
                        phoneNumber: "",
                        password: "",
                        shopId: ""
                    });
                    setSataList([...dataList, res.data.shopOwner]);
                    console.log(dataList);
                }).catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleDelete = (id) => {
        axios.delete(API_URL + "/shopOwner/delete/" + id)
            .then((res) => {
                console.log(res);
                setSataList(dataList.filter((item) => item._id !== id));
            }).catch((err) => {
                console.log(err);
            });
    };

    const handleUpdateData = (e) => {
        e.preventDefault();
        axios.put(API_URL + "/shopOwner/update/" + id, formData).then((res) => {
            console.log(res);
            setOpen(false);
            setErrors({
                name: "",
                email: "",
                phoneNumber: "",
                password: "",
                shopId: ""
            });
            setFormData({
                name: "",
                email: "",
                phoneNumber: "",
                password: "",
                shopId: ""
            });
            setId("");
        }).catch((err) => {
            console.log(err);
        });
    };

    const setDataToEdit = (id) => {
        axios.get(API_URL + "/shopOwner/get/" + id)
            .then((res) => {
                console.log(res);
                setFormData(res.data.shopOwner);
                setId(id);
                setOpen(true);
            }).catch((err) => {
                console.log(err);
            });
    };

    const handleClose = () => {
        setOpen(false);
        setId("");
    };


    const getReport = () => {
        let dataListCopy = dataList.map(item => {
            return {
               sellerId: item._id,
                name: item.name,
                email: item.email,
                phoneNumber: item.phoneNumber,
                shopId: item.shopId
            }
        });
        let columns = ['Seller Id', 'Name', 'E-Mail', 'Phone number', 'Shop Id'];
        geanaratePDF(dataListCopy, columns, 'Seller Report');
    };

    return (
        <Card className={classes.root} >
            <AdminNav />
            <Typography variant="h3">Seller Dashboard</Typography>

            <div className={classes.row}>
                <Button variant="contained" color="primary" onClick={() => { setOpen(!open); setId("") }}> {open ? 'X' :'Add new'} </Button>
                <Button variant="contained" color="secondary" onClick={() => getReport()}> Genarate Report </Button>
            </div>


            {
                open && (
                    <div className={classes.form}>
                        <Typography variant="h5">{id != "" ? "Update seller data " : 'Add new seller'}</Typography>
                        <form className={classes.form} noValidate autoComplete="off" >
                            <TextField
                                name="name"
                                label="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                            <TextField
                                name="email"
                                label="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                            <TextField
                                name="phoneNumber"
                                label="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}
                            <TextField
                                name="password"
                                label="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                            <TextField
                                name="shopId"
                                label="Shop ID"
                                value={formData.shopId}
                                onChange={handleChange}
                            />
                            {errors.shopId && <p style={{ color: "red" }}>{errors.shopId}</p>}
                            <Button type="submit" variant="contained" color="primary" onClick={id ? handleUpdateData : handleSubmit}>
                                Submit
                            </Button>
                            <Button type="button" onClick={() => handleClose()} variant="contained" color="secondary">
                                Cancel
                            </Button>
                        </form>
                    </div>
                )
            }


            {
                !open && (
                    <TableContainer >
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.TableHeader}>
                                <TableRow>
                                    <TableCell>Seller ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">E-Mail</TableCell>
                                    <TableCell align="right">Phone number</TableCell>
                                    <TableCell align="right">Shop ID</TableCell>
                                    <TableCell align="right">Options</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    dataList.length > 0 ?
                                        dataList.map((item) => (
                                            <TableRow key={item._id}>
                                                <TableCell component="th" scope="row">
                                                    {item._id}
                                                </TableCell>
                                                <TableCell align="right">{item.name}</TableCell>
                                                <TableCell align="right">{item.email}</TableCell>
                                                <TableCell align="right">{item.phoneNumber}</TableCell>
                                                <TableCell align="right">{item.shopId}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton aria-label="edit" onClick={() => setDataToEdit(item._id)}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="warning" onClick={() => handleDelete(item._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                        : (
                                            <TableRow>
                                                <TableCell colSpan="5">No data found</TableCell>
                                            </TableRow>
                                        )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }
        </Card>
    );
};

export default SellerTable;
