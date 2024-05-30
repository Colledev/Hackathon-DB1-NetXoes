import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

const AllProductPage = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [orderBy, setOrderBy] = useState("");
    const search = new URLSearchParams(location.search).get("search");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/products`,
                    {
                        params: {
                            page,
                            limit: 16,
                            brand: selectedBrands,
                            category: selectedCategories,
                            order: orderBy.order,
                            sort: orderBy.sort,
                            name: search,
                        },
                    }
                );
                const { products, totalPages } = response.data;
                setProducts(products);
                setFilteredProducts(products);
                setTotalPages(totalPages);
            } catch (error) {
                console.error(
                    "An error occurred while fetching products:",
                    error
                );
            }
        };

        fetchProducts();
    }, [page, selectedBrands, selectedCategories, orderBy, search]);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleFilterChange = (categories, brands, order) => {
        setSelectedCategories(categories);
        setSelectedBrands(brands);
        setOrderBy(order);
        setPage(1);
    };

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
                <div className="flex justify-center">
                    <h1 className="text-4xl">ALL ITEMS</h1>
                </div>
                <Filter onFilterChange={handleFilterChange} />
                <ProductList products={filteredProducts} />
                <div className="mb-16 ">
                    <Stack
                        spacing={2}
                        alignItems="center"
                        className="pagination"
                    >
                        <Pagination
                            showFirstButton
                            showLastButton
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                        />
                    </Stack>
                </div>
            </div>
        </>
    );
};

export default AllProductPage;
