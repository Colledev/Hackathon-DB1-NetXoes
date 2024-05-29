// CartAlert.jsx
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CartAlert = ({ showAlert, handleCloseAlert }) => {
    return (
        <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
        >
            <Alert
                onClose={handleCloseAlert}
                severity="success"
                sx={{ width: "100%" }}
            >
                Product added to cart!
            </Alert>
        </Snackbar>
    );
};

export default CartAlert;
