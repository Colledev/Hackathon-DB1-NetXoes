import React, { useState } from "react";
import { Popover, Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Login from "./Login";
import axios from "axios";
import {
    validateEmail,
    validatePassword,
    validateName,
} from "../validators/user";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "#A0AAB4",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#A0AAB4",
        },
        "&:hover fieldset": {
            borderColor: "#A0AAB4",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#6F7E8C",
        },
    },
});

const Register = ({ registerPopover, handlePopoverClose }) => {
    const [isRegisterForm, setIsRegisterForm] = useState(true);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubscription = async () => {
        try {
            const { name, email, password } = formValues;

            if (!name || !email || !password) {
                return;
            }

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/users`,
                {
                    name,
                    email,
                    password,
                }
            );

            toggleForm();
        } catch (error) {
            console.error(error);
        }
    };

    const open = Boolean(registerPopover);
    const id = open ? "register-popover" : undefined;

    const toggleForm = () => {
        setIsRegisterForm(!isRegisterForm);
    };

    const handleEmailBlur = () => {
        setEmailError(validateEmail(formValues.email));
    };

    const handlePasswordBlur = () => {
        setPasswordError(validatePassword(formValues.password));
    };

    const handleNameBlur = () => {
        setNameError(validateName(formValues.name));
    };

    return (
        <>
            {isRegisterForm ? (
                <Popover
                    id={id}
                    open={open}
                    anchorEl={registerPopover}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <Box p={2} sx={{ maxWidth: 300 }}>
                        <h1 className="text-2xl">Register</h1>
                        <div className="p-1 -mt-2">
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleFormChange}
                                onBlur={handleNameBlur}
                                id="name"
                                label="Name"
                                name="name"
                                autoFocus
                                value={formValues.name}
                                error={Boolean(nameError)}
                                helperText={nameError}
                            />
                        </div>
                        <div className="bg-gray-100 p-1 -mt-4">
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleFormChange}
                                onBlur={handleEmailBlur}
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                value={formValues.email}
                                error={Boolean(emailError)}
                                helperText={emailError}
                            />
                        </div>
                        <div className="p-1 mb-2 -mt-4">
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleFormChange}
                                onBlur={handlePasswordBlur}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={formValues.password}
                                error={Boolean(passwordError)}
                                helperText={passwordError}
                            />
                        </div>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={handleSubscription}
                            sx={{
                                mb: 2,
                                backgroundColor: "black",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "darkgray",
                                },
                            }}
                        >
                            Register
                        </Button>
                        <Typography variant="body2">
                            Already have an account?{" "}
                            <button
                                className="text-gray-500 underline hover:text-black text-base lg:text-base xl:text-base mr-2"
                                onClick={toggleForm}
                            >
                                Login
                            </button>
                        </Typography>
                    </Box>
                </Popover>
            ) : (
                <Login
                    loginPopover={registerPopover}
                    handlePopoverClose={handlePopoverClose}
                />
            )}
        </>
    );
};

export default Register;
