import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import axios from "axios";
import LocalStorageHelper from "../helpers/localstorage-helper";

const fetchCartItems = async (setCartItems, calculateTotal) => {
    try {
        if (!LocalStorageHelper.isAuthenticated()) {
            return;
        }

        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/cart/item`,
            {
                headers: {
                    Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                },
            }
        );
        const cartItemsData = response.data;
        setCartItems(cartItemsData);
        calculateTotal(cartItemsData);
    } catch (error) {
        console.error("An error occurred while fetching cart items:", error);
    }
};

const Cart = ({ open, onClose }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const updateCart = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/cart/items`,
                {
                    headers: {
                        Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                    },
                }
            );
            setCartItems(response.data);
        } catch (error) {
            console.error("An error occurred while updating cart:", error);
        }
    };

    useEffect(() => {
        fetchCartItems(setCartItems, calculateTotal);
    }, [updateCart]);

    const calculateTotal = (items) => {
        let total = 0;
        for (const item of items) {
            total += item.product.price * item.quantity;
        }
        setCartTotal(total);
    };

    const handleEditItemQuantity = async (itemCartId, quantity) => {
        try {
            if (!LocalStorageHelper.isAuthenticated()) {
                return;
            }

            await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/cart/item/${itemCartId}`,
                {
                    quantity,
                },
                {
                    headers: {
                        Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                    },
                }
            );
            fetchCartItems(setCartItems, calculateTotal);
        } catch (error) {
            console.error(
                "An error occurred while editing item quantity:",
                error
            );
        }
    };

    const handleRemoveFromCart = async (itemCartId) => {
        try {
            if (!LocalStorageHelper.isAuthenticated()) {
                return;
            }

            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/cart/item/${itemCartId}`,
                {
                    headers: {
                        Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                    },
                }
            );
            fetchCartItems(setCartItems, calculateTotal);
        } catch (error) {
            console.error("An error occurred while removing from cart:", error);
        }
    };

    const DrawerContent = (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={(event) => {
                event.stopPropagation();
            }}
            onKeyDown={onClose}
        >
            <Box textAlign="center" p={2}>
                <div>
                    <h1 className="text-3xl">Items in cart</h1>
                </div>
            </Box>
            <Divider />
            <List>
                {cartItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <div className="px-2 py-1 w-full">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "15px",
                                    boxShadow:
                                        "1.5px 1.2px 2px 0.8px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <img
                                    src={item.product.imageUrl}
                                    alt="Product"
                                    width="90"
                                />
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        marginLeft: "10px",
                                        marginTop: "2px",
                                    }}
                                >
                                    <div>
                                        <h1 className="text-gray-500 text-xs mb-[-5px]">
                                            {item.product.brand.name}
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className="mb-0 text-sm">
                                            {item.product.name}
                                        </h1>
                                    </div>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                        }}
                                    >
                                        <IconButton
                                            size="small"
                                            aria-label="remove"
                                            onClick={() =>
                                                handleEditItemQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <div>
                                            <h1 className="text-sm ml-[10px]">
                                                {" "}
                                                {item.quantity}
                                            </h1>
                                        </div>
                                        <IconButton
                                            sx={{ marginLeft: "10px" }}
                                            size="small"
                                            aria-label="add"
                                            onClick={() =>
                                                handleEditItemQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            <AddIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{ marginLeft: "20px" }}
                                            size="small"
                                            aria-label="delete"
                                            onClick={() =>
                                                handleRemoveFromCart(item.id)
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                    <div className="text-sm ml-4 font-bold mb-2">
                                        <p>
                                            R$ {item.product.price.toFixed(2)}
                                        </p>
                                    </div>
                                </Box>
                            </Box>
                        </div>
                    </ListItem>
                ))}
            </List>

            <Divider />
            <Box p={2}>
                <div className="flex justify-center font-bold text-xl">
                    <h2>Total: R$ {cartTotal.toFixed(2)}</h2>
                </div>
                <Box textAlign="center" mt={2}>
                    <button className="w-3/3 hover:bg-gray-500 bg-black text-white font-bold rounded p-4">
                        Complete Purchase
                    </button>
                </Box>
            </Box>
        </Box>
    );

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            {DrawerContent}
        </Drawer>
    );
};

export default Cart;
