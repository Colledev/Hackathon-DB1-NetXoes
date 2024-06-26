import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SizeSelector from "../components/Sizes";
import axios from "axios";
import Colors from "../components/Colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import LocalStorageHelper from "../helpers/localstorage-helper";
import CartAlert from "../utils/CartAlert";
import UnauthorizedAlert from "../utils/UnauthorizedAlert";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [showUnauthorizedAlert, setShowUnauthorizedAlert] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/products/${id}`
                );
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = async (productId) => {
        try {
            if (!LocalStorageHelper.isAuthenticated()) {
                setShowUnauthorizedAlert(true);
                return;
            }

            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/cart/item`,
                {
                    productId,
                    quantity: 1,
                },
                {
                    headers: {
                        Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                    },
                }
            );
            setShowAlert(true);
        } catch (error) {
            console.error("An error occurred while adding to cart:", error);
        }
    };

    const handleCloseUnauthorizedAlert = () => {
        setShowUnauthorizedAlert(false);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const capCategoryId = "clwbm6967000392cmrenuwr1l";
    const isCapCategory = product.categoryId === capCategoryId;

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
            <div className="mx-8 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-40 mb-16">
                <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row">
                    {/* Detail Product and image sm and md */}
                    <div className="md:flex-1 lg:ml-8 xl:ml-16 xl:overflow-y-auto lg:overflow-y-auto mt-4">
                        <p className=" text-gray-500 text-base sm:text-base md:text-lg lg:text-lg xl:text-2xl mb-[-5px]">
                            {product.brand.name}
                        </p>
                        <h1 className="font-bold text-4xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl sm:mb-4 md:mb-4">
                            {product.name}
                        </h1>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full md:block lg:hidden xl:hidden mt-4"
                        />
                        <p className="text-2xl font-bold sm:mt-4 md:mt-8 mt-4">
                            R$ {product.price}
                        </p>
                        <p className="text-xs sm:text-base md:text-base lg:text-lg xl:text-lg text-gray-500">
                            or {product.installment.number} {"x"} of R${" "}
                            {product.installment.formattedInstallment}
                        </p>
                        <div className="mt-4">
                            <SizeSelector isCap={isCapCategory} />
                        </div>
                        <div>
                            <Colors />
                        </div>
                        <div>
                            <h2 className="lg:text-lg xl:text-lg mb-[-5px] mt-12">
                                Description:
                            </h2>
                            <p className="text-lg sm:text-base md:text-lg lg:text-base xl:text-base mt-2">
                                {product.description}
                            </p>
                        </div>
                        <button
                            className="w-full hover:bg-gray-500 bg-black text-white font-bold py-2 px-4 rounded mt-16 mb-4"
                            onClick={() => handleAddToCart(product.id)}
                        >
                            Add to cart
                        </button>
                    </div>
                    {/* Image lg and xl  */}
                    <div className="md:flex-1 md:order-3 lg:order-first xl:order-first mt-8">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full lg:block hidden"
                        />
                    </div>
                </div>
            </div>
            <CartAlert
                showAlert={showAlert}
                handleCloseAlert={handleCloseAlert}
            />
            <UnauthorizedAlert
                showAlert={showUnauthorizedAlert}
                setShowAlert={setShowUnauthorizedAlert}
                handleCloseAlert={handleCloseUnauthorizedAlert}
            />
        </>
    );
};

export default ProductPage;
