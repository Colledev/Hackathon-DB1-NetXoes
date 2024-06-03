import React from "react";
import { Popover, Box } from "@mui/material";
import LocalStorageHelper from "../helpers/localstorage-helper";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const MyAccount = ({ anchorEl, handlePopoverClose }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        LocalStorageHelper.removeToken();
        navigate("/");
        window.location.reload();
    };

    const handleProfile = () => {
        navigate("/profile");
    };

    const handleOrder = () => {
        navigate("/orders");
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
                        <button
                            className="text-gray-500 hover:text-black text-base lg:text-base xl:text-xl"
                            onClick={handleProfile}
                        >
                            <ManageAccountsIcon className="mb-1" />
                            Profile
                        </button>
                    </div>
                    <div className="flex justify-center mt-2">
                        <button
                            className="text-gray-500 hover:text-black text-base lg:text-base xl:text-xl"
                            onClick={handleOrder}
                        >
                            <LocalMallIcon className="mb-1" />
                            Orders
                        </button>
                    </div>
                    <div className="flex justify-center mt-2">
                        <button
                            className="text-gray-500 hover:text-black text-base lg:text-base xl:text-xl"
                            onClick={handleLogout}
                        >
                            <LogoutIcon className="mb-1" />
                            Logout
                        </button>
                    </div>
                </div>
            </Box>
        </Popover>
    );
};

export default MyAccount;
