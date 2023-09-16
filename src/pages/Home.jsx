import { Fragment } from "react";

import Hero from "../components/Layout/Home/Hero/Hero";
import Offers from "../components/Layout/Home/Offers/Offers";
import Reasons from "../components/Layout/Home/Reasons/Reasons";
import Contact from "../components/Layout/Home/Contact/Contact";
import ChatBubble from "../components/UI/ChatBubble";
import BlogSection from "../components/Layout/Home/BlogSection/BlogSection";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Offers />
      <Reasons />
      <BlogSection />
      <Contact />
      <ChatBubble />
    </Fragment>
  );
};

export default Home;
