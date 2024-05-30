import { Navigate } from "react-router-dom";
import LocalStorageHelper from "../helpers/localstorage-helper";

const PrivateRoute = ({ children }) => {
    return LocalStorageHelper.isAuthenticated() ? (
        children
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoute;
