import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AdminNav from "../../components/admin-Nav";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100%",
        width: "80vw",
        flexDirection: 'column',
        alignItems: 'flex-start',  
        border: '1px solid #e0e0e0',
    }, 
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20ch',
        },
    }
}));

const SellerForm = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        shopId: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        name="name"
                        label="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        name="phoneNumber"
                        label="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        name="password"
                        label="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <TextField
                        name="shopId"
                        label="Shop ID"
                        value={formData.shopId}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                    <Button type="cancel" variant="contained" color="secondary">
                        Cancel
                    </Button>
                </form>
            </main>
        </div>
    );
};

export default SellerForm;
