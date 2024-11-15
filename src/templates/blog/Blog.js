import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppAppBar from "./components/AppAppBar";
import Footer from "./components/Footer";
import AppTheme from "../shared-theme/AppTheme";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/Products";
import Distribution from "./pages/Distribution";

export default function Blog(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <BrowserRouter>
        <AppAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:name" element={<Products />}/>
            <Route path="/distribution" element={<Distribution />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </AppTheme>
  );
}
