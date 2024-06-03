import Layout from "../layout/layout";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import AllProductPage from "../pages/AllProductPage";
import FavoritePage from "../pages/FavoritePage";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import Order from "../pages/Order";

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
                path="/products"
                element={
                    <Layout showHero={false}>
                        <AllProductPage />
                    </Layout>
                }
            ></Route>

            <Route
                path="/products/:id"
                element={
                    <Layout showHero={false}>
                        <ProductPage />
                    </Layout>
                }
            ></Route>

            <Route
                path="/favorites"
                element={
                    <PrivateRoute>
                        <Layout showHero={false}>
                            <FavoritePage />
                        </Layout>
                    </PrivateRoute>
                }
            ></Route>

            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <Layout showHero={false}>
                            <Profile />
                        </Layout>
                    </PrivateRoute>
                }
            ></Route>

            <Route
                path="/orders"
                element={
                    <PrivateRoute>
                        <Layout showHero={false}>
                            <Order />
                        </Layout>
                    </PrivateRoute>
                }
            ></Route>
        </Routes>
    );
};

export default AppRoutes;
