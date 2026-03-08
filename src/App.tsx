import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import BlogPage from "./pages/blog/BlogPage";
import AboutPage from "./pages/about/AboutPage";
import PortfolioFooter from "./pages/portfolio/sections/PortfolioFooter";

function App() : React.JSX.Element
{
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PortfolioPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
            <PortfolioFooter />
        </>
    );
}

export default App;