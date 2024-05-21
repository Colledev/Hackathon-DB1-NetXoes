import React, { useState, useEffect } from "react";
import axios from "axios";
import CardActionArea from "@mui/material/CardActionArea";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/products`
                );
                const allProducts = response.data;

                const randomProducts = allProducts
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 8);
                setProducts(randomProducts);
            } catch (error) {
                console.error(
                    "An error occurred while fetching products:",
                    error
                );
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="px-4 sm:px-4 md:px-4 lg:px-8 xl:px-32">
            <div>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-4">
                    Products
                </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {products.map((product) => (
                    <CardActionArea>
                        <div key={product.id} className="h-full">
                            <div className="bg-white shadow-md p-4 h-full flex flex-col justify-between">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-auto object-fit"
                                />
                                <div>
                                    <h2 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-500 mb-[-5px] mt-0.5">
                                        {product.brand.name}
                                    </h2>
                                    <h3 className="text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                                        {product.name}
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base font-bold mt-2">
                                        R$ {product.price}
                                    </p>
                                    <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
                                        or {product.installment.number} {"x"} of
                                        R${" "}
                                        {
                                            product.installment
                                                .formattedInstallment
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardActionArea>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
