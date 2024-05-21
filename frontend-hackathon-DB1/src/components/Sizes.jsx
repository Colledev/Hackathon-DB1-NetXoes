import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SizeSelector = ({ isCap }) => {
    const [selectedSize, setSelectedSize] = React.useState(null);

    const handleSizeChange = (event, newSize) => {
        if (newSize !== null) {
            setSelectedSize(newSize);
        }
    };

    const SneakerSizes = Array.from({ length: 15 }, (_, index) => index + 30);
    const CapSizes = ["S", "M", "L"];

    const sizes = isCap ? CapSizes : SneakerSizes;

    return (
        <ToggleButtonGroup
            value={selectedSize}
            exclusive
            onChange={handleSizeChange}
            aria-label={isCap ? "Cap Size" : "Sneaker Size"}
            className="flex flex-wrap gap-2 py-4 px-2"
        >
            {sizes.map((size) => (
                <ToggleButton
                    key={size}
                    value={size}
                    aria-label={`Size ${size}`}
                    className="px-2 py-2 font-semibold text-black hover:font-bold transition-colors duration-200"
                >
                    {size}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default SizeSelector;
