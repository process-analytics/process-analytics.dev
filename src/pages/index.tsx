import * as React from 'react';
import Layout from '../theme/components/Layout';
import Header from '../theme/components/Header';
import Landing from '../theme/sections/Landing';
import About from '../theme/sections/About';
import Libraries from '../theme/sections/Libraries';
import Blog from '../theme/sections/Blog';
import Footer from '../theme/components/Footer';

const HomePage = (): JSX.Element => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Libraries />
    <Blog />
    <Footer />
  </Layout>
);

export default HomePage;
