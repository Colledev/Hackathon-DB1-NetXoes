import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardActions from "@mui/material/CardActions";

const AllProductPage = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/products`,
                    { params: { page, limit: 16 } }
                );
                const { products, totalPages } = response.data;
                setProducts(products);
                setTotalPages(totalPages);
            } catch (error) {
                console.error(
                    "An error occurred while fetching products:",
                    error
                );
            }
        };

        fetchProducts();
    }, [page]);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div className="mt-24">
            <CardActions
                disableSpacing
                className="flex justify-start items-center ml-12"
                onClick={() => window.history.back()}
            >
                <ArrowBackIcon style={{ fontSize: "40px" }} />
            </CardActions>

            <ProductList products={products} />
            <div className="mb-16">
                <Stack spacing={2} alignItems="center" className="pagination">
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
    );
};

export default AllProductPage;
