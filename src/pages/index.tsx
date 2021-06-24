import * as React from "react";
import Layout from "../theme/components/Layout";
import Header from "../theme/components/Header";
import Landing from "../theme/sections/Landing";
import About from "../theme/sections/About";
import Projects from "../theme/sections/Projects";
import Blog from "../theme/sections/Blog";
import Footer from "../theme/components/Footer";

const HomePage = () => (
    <Layout>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Blog />
        <Footer />
    </Layout>
);

export default HomePage
