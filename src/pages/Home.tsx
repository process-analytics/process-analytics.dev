import * as React from 'react';
import Layout from '../theme/components/Layout';
import Header from '../theme/components/Header';
import Landing from '../theme/sections/Landing';
import About from '../theme/sections/About';
import Projects from '../theme/sections/Projects';
import Writing from '../theme/sections/Writing';
import Footer from '../theme/components/Footer';

const Home = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
);

export default Home;
