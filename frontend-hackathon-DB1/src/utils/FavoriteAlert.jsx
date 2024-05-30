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
                severity={isAdded ? "success" : "info"}
                sx={{ width: "100%" }}
            >
                {isAdded
                    ? "Product added to favorites!"
                    : "Product removed from favorites."}
            </Alert>
        </Snackbar>
    );
};

export default FavoriteAlert;
