import React, { useState, useEffect } from "react";
import axios from "axios";

const BrandsList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/brands`
                );
                setBrands(response.data);
            } catch (error) {
                console.error(
                    "An error occurred while fetching brands:",
                    error
                );
            }
        };

        fetchBrands();
    }, []);

    return (
        <div className="flex justify-center overflow-x-auto p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="flex">
                {brands.map((brand, index) => (
                    <div
                        key={brand.id}
                        className={`flex-none ${
                            index !== 0 ? "ml-4" : ""
                        } mr-4`}
                    >
                        <img
                            src={brand.imageUrl}
                            alt={brand.name}
                            className="object-cover h-20 md:h-24 lg:h-28 xl:h-32"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsList;
