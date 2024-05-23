import React from "react";
import { Popover, Box } from "@mui/material";
import LocalStorageHelper from "../helpers/localstorage-helper";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";

const MyAccount = ({ anchorEl, handlePopoverClose }) => {
    const handleLogout = () => {
        LocalStorageHelper.removeToken();
        window.location.reload();
    };

    const open = Boolean(anchorEl);
    const id = open ? "my-account-popover" : undefined;

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            <Box p={2} sx={{ maxWidth: 300 }}>
                <h1 className="text-xl">My Account</h1>
                <div className="p-1 mt-2">
                    <div className="flex justify-center">
                        <button className="text-gray-500 hover:text-black text-base lg:text-base xl:text-xl">
                            <ManageAccountsIcon />
                            Profile
                        </button>
                    </div>
                </div>
                <div className="flex justify-center p-1 mt-2">
                    <button
                        className="text-gray-500 hover:text-black text-base lg:text-base xl:text-xl"
                        onClick={handleLogout}
                    >
                        <LogoutIcon />
                        Logout
                    </button>
                </div>
            </Box>
        </Popover>
    );
};

export default MyAccount;