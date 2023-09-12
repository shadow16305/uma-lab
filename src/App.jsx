import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <Fragment>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
