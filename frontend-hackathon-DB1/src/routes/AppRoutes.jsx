import Layout from "../layout/layout";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";

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
            <Route
                path="/products/:id"
                element={
                    <Layout showHero={false}>
                        <ProductPage />
                    </Layout>
                }
            ></Route>
        </Routes>
    );
};

export default AppRoutes;
