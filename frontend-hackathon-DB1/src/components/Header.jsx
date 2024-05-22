import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import MyAccount from "./MyAccount";
import LocalStorageHelper from "../helpers/localstorage-helper";

const Header = () => {
    const navigate = useNavigate();
    const [loginPopover, setLoginPopover] = useState(null);
    const [myAccountPopover, setMyAccountPopover] = useState(null);
    const isAuthenticated = LocalStorageHelper.isAuthenticated();

    const handleLogo = () => {
        navigate("/");
    };

    const handlePopoverOpen = (event) => {
        setLoginPopover(event.currentTarget);
    };

    const handleMyAccountPopoverOpen = (event) => {
        setMyAccountPopover(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setLoginPopover(null);
    };

    const handleMyAccountPopoverClose = () => {
        setMyAccountPopover(null);
    };

    return (
        <div className="py-5 border-b border-black px-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <button
                        className="text-3xl font-bold text-black"
                        onClick={handleLogo}
                    >
                        NetXoes
                    </button>
                </div>
                <div className="flex gap-4">
                    <SearchIcon />
                    <FavoriteBorderIcon />
                    {isAuthenticated ? (
                        <PersonIcon
                            onClick={handleMyAccountPopoverOpen}
                            style={{ cursor: "pointer" }}
                        />
                    ) : (
                        <PersonIcon
                            aria-describedby="login-popover"
                            onClick={handlePopoverOpen}
                            style={{ cursor: "pointer" }}
                        />
                    )}
                    <ShoppingCartIcon />
                </div>
            </div>
            {isAuthenticated ? (
                <MyAccount
                    anchorEl={myAccountPopover}
                    handlePopoverClose={handleMyAccountPopoverClose}
                />
            ) : (
                <Login
                    loginPopover={loginPopover}
                    handlePopoverClose={handlePopoverClose}
                />
            )}
        </div>
    );
};

export default Header;
