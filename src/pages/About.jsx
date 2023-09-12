import { Fragment } from "react";

import Header from "../components/Layout/About/Header/Header";
import Services from "../components/Layout/About/Services/Services";
import Team from "../components/Layout/About/Team/Team";

const About = () => {
  return (
    <Fragment>
      <Header />
      <Services />
      <Team />
    </Fragment>
  );
};

export default About;
