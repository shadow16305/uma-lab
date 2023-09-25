import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/UI/ScrollToTop";
import BlogPage from "./pages/BlogPage";
import Modal from "./components/UI/Modal";
import Clients from "./pages/Clients";

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
        <Route path="/clients" element={<Clients />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Fragment>
  );
}

export default App;
