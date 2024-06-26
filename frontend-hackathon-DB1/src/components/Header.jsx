import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import MyAccount from "./MyAccount";
import LocalStorageHelper from "../helpers/localstorage-helper";
import IconButton from "@mui/material/IconButton";
import Cart from "./Cart";
import UnauthorizedAlert from "../utils/UnauthorizedAlert";
import { useMediaQuery } from "@mui/material";

const Header = () => {
    const navigate = useNavigate();
    const [loginPopover, setLoginPopover] = useState(null);
    const [myAccountPopover, setMyAccountPopover] = useState(null);
    const [cartOpen, setCartOpen] = useState(false);
    const [showUnauthorizedAlert, setShowUnauthorizedAlert] = useState(false);
    const isAuthenticated = LocalStorageHelper.isAuthenticated();
    const [search, setSearch] = useState("");

    const ButtonQuery = useMediaQuery("(min-width:600px)");

    const handleSearch = () => {
        navigate(`/products?search=${search}`);
        window.location.reload();
    };

    const handleLogo = () => {
        navigate("/");
    };

    const handleFavorite = () => {
        if (!isAuthenticated) {
            setShowUnauthorizedAlert(true);
        } else {
            navigate("/favorites");
        }
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleCloseUnauthorizedAlert = () => {
        setShowUnauthorizedAlert(false);
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

    const handleCartOpen = () => {
        setCartOpen(true);
    };

    const handleCartClose = () => {
        setCartOpen(false);
    };

    return (
        <div className="py-5 border-b border-black px-4 fixed top-0 w-full bg-white shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <button
                        className="text-lg sm:text-3xl font-bold text-black"
                        onClick={handleLogo}
                    >
                        NetXoes
                    </button>
                </div>
                <div className="flex gap-2 sm:gap-4">
                    <div className="flex items-center border border-gray-300 rounded p-0.5 max-w-md ml-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            aria-label="search"
                            className="w-full px-2 py-1 focus:outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={handleEnterKeyPress}
                        />
                        <IconButton
                            size={ButtonQuery ? "medium" : "small"}
                            aria-label="search"
                            color="inherit"
                            onClick={handleSearch}
                        >
                            <SearchIcon
                                fontSize={ButtonQuery ? "medium" : "small"}
                            />
                        </IconButton>
                    </div>
                    <IconButton
                        size={ButtonQuery ? "medium" : "small"}
                        aria-label="search"
                        color="inherit"
                        onClick={handleFavorite}
                    >
                        <FavoriteBorderIcon
                            style={{ cursor: "pointer" }}
                            fontSize={ButtonQuery ? "medium" : "small"}
                        />
                    </IconButton>
                    {isAuthenticated ? (
                        <IconButton
                            size={ButtonQuery ? "medium" : "small"}
                            aria-label="search"
                            color="inherit"
                            onClick={handleMyAccountPopoverOpen}
                        >
                            <PersonIcon
                                style={{ cursor: "pointer" }}
                                fontSize={ButtonQuery ? "medium" : "small"}
                            />
                        </IconButton>
                    ) : (
                        <IconButton
                            size={ButtonQuery ? "medium" : "small"}
                            aria-label="search"
                            color="inherit"
                            onClick={handlePopoverOpen}
                        >
                            <PersonIcon
                                aria-describedby="login-popover"
                                style={{ cursor: "pointer" }}
                                fontSize={ButtonQuery ? "medium" : "small"}
                            />
                        </IconButton>
                    )}
                    <IconButton
                        size={ButtonQuery ? "medium" : "small"}
                        aria-label="search"
                        color="inherit"
                        onClick={handleCartOpen}
                    >
                        <ShoppingCartIcon
                            fontSize={ButtonQuery ? "medium" : "small"}
                        />
                    </IconButton>
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

            <Cart open={cartOpen} onClose={handleCartClose} />

            <UnauthorizedAlert
                showAlert={showUnauthorizedAlert}
                setShowAlert={setShowUnauthorizedAlert}
                handleCloseAlert={handleCloseUnauthorizedAlert}
            />
        </div>
    );
};

export default Header;
