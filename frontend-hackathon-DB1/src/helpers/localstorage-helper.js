import { jwtDecode } from "jwt-decode";

const LocalStorageHelper = {
    setToken(token) {
        window.localStorage.setItem("AUTHENTICATION_TOKEN", token);
    },
    getToken() {
        return window.localStorage.getItem("AUTHENTICATION_TOKEN");
    },
    removeToken() {
        window.localStorage.removeItem("AUTHENTICATION_TOKEN");
    },
    isAuthenticated() {
        try {
            const token = LocalStorageHelper.getToken();

            if (!token) return false;

            const payload = jwtDecode(token);

            const expirationDate = new Date(payload.exp * 1000);
            const currentDate = new Date();

            expirationDate.setSeconds(expirationDate.getSeconds() + 60);

            return expirationDate > currentDate;
        } catch (error) {
            console.error("Error verify authentication:", error.message);
            return false;
        }
    },
    getUserId() {
        try {
            const token = LocalStorageHelper.getToken();

            if (!token) return null;

            const payload = jwtDecode(token);

            return payload.userId;
        } catch (error) {
            console.error("Error to get user ID:", error.message);
            return null;
        }
    },
};

export default LocalStorageHelper;
