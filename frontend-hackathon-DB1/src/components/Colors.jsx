import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";

const Colors = () => {
    return (
        <div className="px-1">
            <IconButton aria-label="Example">
                <CircleIcon sx={{ color: "#808080" }} />
            </IconButton>
            <IconButton aria-label="Example">
                <CircleIcon sx={{ color: "#000" }} />
            </IconButton>
            <IconButton aria-label="Example">
                <CircleIcon sx={{ color: "#800000" }} />
            </IconButton>
        </div>
    );
};

export default Colors;
