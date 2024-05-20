import Layout from "../layout/layout";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout showHero={true}>
                        <Home />
                    </Layout>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
