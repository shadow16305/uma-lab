import { Fragment } from "react";

import Header from "../components/Layout/About/Header/Header";
import Services from "../components/Layout/About/Services/Services";
import Team from "../components/Layout/About/Team/Team";
import Contact from "../components/Layout/Contact";

const About = () => {
  return (
    <Fragment>
      <Header />
      <Services />
      <Team />
      <Contact />
    </Fragment>
  );
};

export default About;
