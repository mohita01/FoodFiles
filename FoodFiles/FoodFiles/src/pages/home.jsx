import React from 'react';
import Header from '../components/header';
import Search from '../components/search';
import About from '../components/about';
import Footer from '../components/Footer';
import Blogs from '../components/blogs';

function Home() {
  return (
    <div>
      <Header/>
      <Search/>
      <About/>
      <Footer/>
      <Blogs/>
    </div>
  );
}

export default Home;
