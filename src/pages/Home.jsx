import Hero from "../components/Layout/Home/Hero/Hero";
import Offers from "../components/Layout/Home/Offers/Offers";
import Reasons from "../components/Layout/Home/Reasons/Reasons";
import Contact from "../components/Layout/Contact";
import ChatBubble from "../components/UI/ChatBubble";
import BlogSection from "../components/Layout/Home/BlogSection/BlogSection";
import Footer from "../components/Layout/Footer";

const Home = () => {
  return (
    <div className="bg-[#1a1a1a] h-screen overflow-auto">
      <Hero />
      <Offers />
      <Reasons />
      <BlogSection />
      <ChatBubble className="lg:hidden" />
      <Contact />
      <ChatBubble className="hidden lg:block" />
      <Footer />
    </div>
  );
};

export default Home;
