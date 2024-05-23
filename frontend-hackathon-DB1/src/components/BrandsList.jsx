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
        <div className="flex justify-center">
            <div className="px-4 sm:px-4 md:px-8 lg:px-16 xl:px-40 mx-auto">
                <div className="py-12 overflow-x-auto">
                    <div className="flex space-x-4">
                        {brands.map((brand) => (
                            <img
                                key={brand.id}
                                src={brand.imageUrl}
                                alt={brand.name}
                                className="object-cover h-20 sm:h-20 md:h-24 lg:h-28 xl:h-28"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandsList;
