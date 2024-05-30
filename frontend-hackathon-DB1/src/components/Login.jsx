import React, { useState } from "react";
import { Popover, Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Register from "./Register";
import axios from "axios";
import LocalStorageHelper from "../helpers/localstorage-helper";
import { validateEmail, validatePassword } from "../validators/user";

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

const Login = ({ loginPopover, handlePopoverClose }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        try {
            const { email, password } = formValues;

            if (!email || !password) {
                return;
            }

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/users/login`,
                {
                    email,
                    password,
                }
            );

            const { token } = response.data;

            LocalStorageHelper.setToken(token);

            handlePopoverClose();
            window.location.reload();
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const open = Boolean(loginPopover);
    const id = open ? "login-popover" : undefined;

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    const handleEmailBlur = () => {
        setEmailError(validateEmail(formValues.email));
    };

    const handlePasswordBlur = () => {
        setPasswordError(validatePassword(formValues.password));
    };

    return (
        <>
            {isLoginForm ? (
                <Popover
                    id={id}
                    open={open}
                    anchorEl={loginPopover}
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
                        <h1 className="text-2xl">Login</h1>
                        <div className="p-1 ">
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleFormChange}
                                onBlur={handleEmailBlur}
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                                autoComplete="current-password"
                                value={formValues.password}
                                error={Boolean(passwordError)}
                                helperText={passwordError}
                            />
                        </div>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={handleLogin}
                            sx={{
                                mb: 2,
                                backgroundColor: "black",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "darkgray",
                                },
                            }}
                        >
                            Submit
                        </Button>
                        <Typography variant="body2">
                            Don't have an account?{" "}
                            <button
                                className="text-gray-500 underline hover:text-black text-base lg:text-base xl:text-base mr-2"
                                onClick={toggleForm}
                            >
                                Register
                            </button>
                        </Typography>
                    </Box>
                </Popover>
            ) : (
                <Register
                    registerPopover={loginPopover}
                    handlePopoverClose={handlePopoverClose}
                />
            )}
        </>
    );
};

export default Login;
