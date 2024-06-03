import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
        borderRadius: 4,
        position: "relative",
        border: "1px solid #A0AAB4",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
    },
}));

const orderOptions = [
    { value: "asc_name", label: "Name (A-Z)", sort: "name", order: "asc" },
    { value: "desc_name", label: "Name (Z-A)", sort: "name", order: "desc" },
    {
        value: "asc_price",
        label: "Price (Low to High)",
        sort: "price",
        order: "asc",
    },
    {
        value: "desc_price",
        label: "Price (High to Low)",
        sort: "price",
        order: "desc",
    },
];

const Filter = ({ onFilterChange }) => {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [order, setOrder] = useState("");
    const [selectedOrder, setSelectedOrder] = useState("");
    const [sort, setSort] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/brands`
                );
                const brandsData = response.data;
                setBrands(brandsData);
            } catch (error) {
                console.error(
                    "An error occurred while fetching brands:",
                    error
                );
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/categories`
                );
                const categoriesData = response.data;
                setCategories(categoriesData);
            } catch (error) {
                console.error(
                    "An error occurred while fetching categories:",
                    error
                );
            }
        };

        fetchBrands();
        fetchCategories();
    }, []);

    const handleOrderSortChange = (event) => {
        const { value } = event.target;
        setSelectedOrder(value);
        const selectedOption = orderOptions.find(
            (option) => option.value === value
        );
        const orderBy = {
            sort: selectedOption.sort,
            order: selectedOption.order,
        };
        onFilterChange(selectedCategories, selectedBrands, orderBy);
    };

    const handleBrandsChange = (event) => {
        const { value } = event.target;
        setSelectedBrands(value);
        const orderBy = { sort, order };
        onFilterChange(selectedCategories, value, orderBy);
    };

    const handleCategoriesChange = (event) => {
        const { value } = event.target;
        setSelectedCategories(value);
        const orderBy = { sort, order };
        onFilterChange(value, selectedBrands, orderBy);
    };

    const getSelectedBrandsLabel = (selected) => {
        return selected.length === 0
            ? "Brands: Any"
            : `Brands: ${selected.join(", ")}`;
    };

    const getSelectedCategoriesLabel = (selected) => {
        return selected.length === 0
            ? "Categories: Any"
            : `Categories: ${selected.join(", ")}`;
    };

    const getOrderLabel = (selected) => {
        return selected.length === 0 ? "Sort By:" : `Sort By: ${selected}`;
    };

    const clearFilters = () => {
        navigate("/products");
        window.location.reload();
    };

    return (
        <div className="flex flex-col lg:flex-row px-4 sm:px-4 md:px-8 lg:px-16 xl:px-40 mt-2">
            <div className="mb-2 md:mb-0 md:mr-2">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        labelId="brands-select-label"
                        id="brands-select"
                        multiple
                        displayEmpty
                        value={selectedBrands}
                        onChange={handleBrandsChange}
                        input={<BootstrapInput />}
                        renderValue={(selected) =>
                            getSelectedBrandsLabel(selected)
                        }
                    >
                        {brands.map((brand) => (
                            <MenuItem key={brand.id} value={brand.name}>
                                {brand.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="mb-2 md:mb-0">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        labelId="categories-select-label"
                        id="categories-select"
                        multiple
                        displayEmpty
                        value={selectedCategories}
                        onChange={handleCategoriesChange}
                        input={<BootstrapInput />}
                        renderValue={(selected) =>
                            getSelectedCategoriesLabel(selected)
                        }
                    >
                        {categories.map((category) => (
                            <MenuItem key={category.id} value={category.name}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="ml-0 lg:ml-auto flex items-center">
                <div className="">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            labelId="order-select-label"
                            id="order-select"
                            displayEmpty
                            value={selectedOrder}
                            onChange={handleOrderSortChange}
                            input={<BootstrapInput />}
                            renderValue={(selected) => getOrderLabel(selected)}
                        >
                            {orderOptions.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="mr-4 ml-auto">
                    <IconButton
                        aria-label="clear-filters"
                        color="inherit"
                        onClick={clearFilters}
                    >
                        <ClearIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Filter;
