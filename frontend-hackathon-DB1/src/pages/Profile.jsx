import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import axios from "axios";
import LocalStorageHelper from "../helpers/localstorage-helper";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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

const Profile = () => {
    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (!LocalStorageHelper.isAuthenticated()) {
                    return;
                }

                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/users/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                        },
                    }
                );

                const { name, email } = response.data;
                setUser({ name, email });
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    const handleUpdateProfile = async () => {
        try {
            if (!LocalStorageHelper.isAuthenticated()) {
                return;
            }

            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/users/me`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                    },
                }
            );

            window.location.reload();

            console.log(response.data);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdateProfile();
    };

    const handleEmailBlur = () => {
        setEmailError(validateEmail(formData.email));
    };

    const handlePasswordBlur = () => {
        setPasswordError(validatePassword(formData.password));
    };

    const handleNameBlur = () => {
        setNameError(validateName(formData.name));
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
            <div className="mt-8 px-16 sm:px-32 md:px-52 lg:px-72 xl:px-96">
                <div className="flex justify-center">
                    <h1 className="text-4xl">Edit Profile</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-6">
                        <h2>
                            Change Name: <strong> {user.name}</strong>
                        </h2>
                    </div>
                    <div className="">
                        <CssTextField
                            fullWidth
                            margin="normal"
                            label="New Name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            onBlur={handleNameBlur}
                            error={Boolean(nameError)}
                            helperText={nameError}
                        />
                    </div>
                    <div className="mt-6">
                        <h2>
                            Change Email:<strong> {user.email}</strong>
                        </h2>
                    </div>
                    <div className="">
                        <CssTextField
                            fullWidth
                            margin="normal"
                            label="New Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            onBlur={handleEmailBlur}
                            error={Boolean(emailError)}
                            helperText={emailError}
                        />
                    </div>
                    <div className="mt-6">
                        <h2>
                            Change Password:<strong> {user.password}</strong>
                        </h2>
                    </div>
                    <div className="">
                        <CssTextField
                            fullWidth
                            margin="normal"
                            label="New Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleFormChange}
                            onBlur={handlePasswordBlur}
                            onFocus={() => setShowPassword(true)}
                            error={Boolean(passwordError)}
                            helperText={passwordError}
                        />
                    </div>
                    <div className="flex justify-center mt-8 mb-16">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "black",
                                width: "200px",
                                height: "50px",
                                fontSize: "18px",
                                padding: "20px",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "darkgray",
                                },
                            }}
                        >
                            Update Profile
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;
