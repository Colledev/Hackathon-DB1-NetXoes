import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const UnauthorizedAlert = ({ showAlert, handleCloseAlert }) => {
    return (
        <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
        >
            <Alert
                onClose={handleCloseAlert}
                severity={"error"}
                sx={{ width: "100%" }}
            >
                Unauthorized. Please log in to access this feature.
            </Alert>
        </Snackbar>
    );
};

export default UnauthorizedAlert;
