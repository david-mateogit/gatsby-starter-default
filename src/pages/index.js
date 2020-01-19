import React from "react";
import Layout from "../components/layout";
import Slider from "../components/slider";
import SEO from "../components/seo";
import Intro from "../components/intro";
import Services from "../components/services";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Intro />
    <Services />
  </Layout>
);

export default IndexPage;
