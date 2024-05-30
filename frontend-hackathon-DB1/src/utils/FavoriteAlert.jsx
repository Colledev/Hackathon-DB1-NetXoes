import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const FavoriteAlert = ({ showAlert, handleCloseAlert, isAdded }) => {
    return (
        <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
        >
            <Alert
                onClose={handleCloseAlert}
                severity={isAdded ? "info" : "success"}
                sx={{ width: "100%" }}
            >
                {isAdded
                    ? "Product removed from favorites."
                    : "Product added to favorites!"}
            </Alert>
        </Snackbar>
    );
};

export default FavoriteAlert;
