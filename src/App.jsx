import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Fragment>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
