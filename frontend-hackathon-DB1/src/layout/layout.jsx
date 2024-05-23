import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout = ({ children, showHero = false }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {showHero && <Hero />}
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
