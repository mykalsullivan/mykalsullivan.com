import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./features/SiteHeader";
import SiteFooter from "./features/SiteFooter";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import BlogPage from "./pages/blog/BlogPage";
import AboutPage from "./pages/about/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() : React.JSX.Element
{
    return (
        <>
            <BrowserRouter>
                <SiteHeader />
                <Routes>
                    <Route path="/" element={<PortfolioPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <SiteFooter />
            </BrowserRouter>
        </>
    );
}

export default App;