import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import LocalStorageHelper from "../helpers/localstorage-helper";

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (!LocalStorageHelper.isAuthenticated()) {
                    return;
                }

                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/cart/orders/`,
                    {
                        headers: {
                            Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                        },
                    }
                );
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching Orders:", error);
            }
        };

        fetchOrders();
    }, []);

    const calculateTotal = (items) => {
        if (!items || !Array.isArray(items)) return 0;

        return items.reduce((total, item) => {
            return total + item.quantity * item.product.price;
        }, 0);
    };

    const ordersByCartId = orders.reduce((acc, order) => {
        if (!acc[order.cartId]) {
            acc[order.cartId] = [];
        }
        acc[order.cartId].push(order);
        return acc;
    }, {});

    return (
        <>
            <div className="flex mt-24">
                <IconButton
                    style={{ marginLeft: "14px" }}
                    size="large"
                    aria-label="search"
                    color="inherit"
                    onClick={() => window.history.back()}
                >
                    <ArrowBackIcon style={{ fontSize: "40px" }} />
                </IconButton>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-center mt-8 mb-8">
                    My Orders
                </h1>
                {orders.length === 0 ? (
                    <div className="flex justify-center mt-16">
                        <div className="text-2xl text-gray-500 mt-2">
                            You have no orders yet
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center flex-col md-2 ml-2 sm:md-16 sm:ml-16 md:mr-28 md:ml-28 lg:mr-38 lg:ml-38 xl:mr-80 xl:ml-80 mb-16">
                        {Object.keys(ordersByCartId).map((cartId) => (
                            <div
                                key={cartId}
                                className="border-2 border-gray-200 p-4 m-4 mb-8"
                            >
                                <div className="flex justify-between">
                                    <h2 className="text-2xl font-bold">
                                        {
                                            ordersByCartId[cartId][0].cart
                                                .concludedAt
                                        }
                                    </h2>
                                    <h2 className="text-lg text-gray-500 ">
                                        {" "}
                                        COMPLETED
                                    </h2>
                                </div>
                                <h2 className="mb-4 text-base text-gray-500 ">
                                    Order: {cartId}
                                </h2>
                                <div className="grid gap-4">
                                    {ordersByCartId[cartId].map((order) => (
                                        <div
                                            className="bg-white shadow-md p-4 sm:p-4 md:p-4 lg:p-4 xl:p-4 flex items-center"
                                            key={order.id}
                                        >
                                            <div>
                                                <img
                                                    src={order.product.imageUrl}
                                                    alt={order.product.name}
                                                    className="border border-gray-200"
                                                    width={80}
                                                />
                                            </div>
                                            <div className="flex flex-col flex-grow px-4">
                                                <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-gray-500 mb-[-5px] mt-0.5">
                                                    {order.product.brand.name}
                                                </p>
                                                <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base">
                                                    {order.product.name}
                                                </p>
                                                <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base">
                                                    x{order.quantity}
                                                </p>
                                            </div>
                                            <div className="ml-auto mb-[-50px] text-base">
                                                <p className="">
                                                    R$
                                                    {order.product.price.toFixed(
                                                        2
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mx-4 mt-6 mb-2">
                                    <h2 className="text-right font-bold text-lg">
                                        Total: R${" "}
                                        {calculateTotal(
                                            ordersByCartId[cartId]
                                        ).toFixed(2)}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Order;
