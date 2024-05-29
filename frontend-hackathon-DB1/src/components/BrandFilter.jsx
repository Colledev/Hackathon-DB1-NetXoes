import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";

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

const BrandFilter = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/products/filter`
                );
                const { brands } = response.data;
                setSelectedBrands(brands);
            } catch (error) {
                console.error("Error fetching brands:", error);
            }
        };

        fetchBrands();
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setSelectedBrands(value);
    };

    const getSelectedBrandsLabel = (selected) => {
        if (selected.length === 0) {
            return "Brands: [Any]";
        } else {
            return `Brands: ${selected.join(", ")}`;
        }
    };

    return (
        <div className="flex px-4 sm:px-4 md:px-8 lg:px-16 xl:px-40">
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={selectedBrands}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        renderValue={(selected) =>
                            getSelectedBrandsLabel(selected)
                        }
                    >
                        <MenuItem value="Nike">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes("Nike")}
                                onChange={() =>
                                    handleChange({
                                        target: { value: "Nike" },
                                    })
                                }
                            />
                            Nike
                        </MenuItem>
                        <MenuItem value="Adidas">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes("Adidas")}
                                onChange={() =>
                                    handleChange({
                                        target: { value: "Adidas" },
                                    })
                                }
                            />
                            Adidas
                        </MenuItem>
                        <MenuItem value="Mizuno">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes("Mizuno")}
                                onChange={() =>
                                    handleChange({
                                        target: { value: "Mizuno" },
                                    })
                                }
                            />
                            Mizuno
                        </MenuItem>
                        <MenuItem value="Puma">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes("Puma")}
                                onChange={() =>
                                    handleChange({
                                        target: { value: "Puma" },
                                    })
                                }
                            />
                            Puma
                        </MenuItem>
                        <MenuItem value="Kappa">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes("Kappa")}
                                onChange={() =>
                                    handleChange({
                                        target: { value: "Kappa" },
                                    })
                                }
                            />
                            Kappa
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="ml-2"></div>
            <div className="ml-auto"></div>
        </div>
    );
};

export default BrandFilter;
