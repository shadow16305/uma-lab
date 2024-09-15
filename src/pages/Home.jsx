import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers";
import Reasons from "../components/Home/Reasons";
import Contact from "../components/Layout/Contact";
import ChatBubble from "../components/UI/ChatBubble";
// import BlogSection from "../components/Home/BlogSection/BlogSection";
import Footer from "../components/Layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Offers />
      <Reasons />
      {/* <BlogSection /> */}
      <ChatBubble className="md:hidden" />
      <Contact />
      <ChatBubble className="hidden md:block" />
      <Footer />
    </>
  );
};

export default Home;
