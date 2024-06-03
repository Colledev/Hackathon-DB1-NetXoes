import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const PurchaseAlert = ({ showAlert, handleCloseAlert }) => {
    return (
        <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
            sx={{ zIndex: 10 }}
        >
            <Alert
                onClose={handleCloseAlert}
                severity="success"
                sx={{ width: "100%" }}
            >
                Purchase concluded!
            </Alert>
        </Snackbar>
    );
};

export default PurchaseAlert;
