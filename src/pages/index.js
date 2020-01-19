import React from "react";
import Layout from "../components/layout";
import Slider from "../components/slider";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
  </Layout>
);

export default IndexPage;
