import Header from "../components/Layout/About/Header/Header";
import Services from "../components/Layout/About/Services/Services";
import Team from "../components/Layout/About/Team/Team";
import Contact from "../components/Layout/Contact";
import Footer from "../components/Layout/Footer";

const About = () => {
  return (
    <div className="h-screen overflow-auto">
      <Header />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
