import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>All-in-One Tools - Your Ultimate Image Utility</title>
        <meta name="description" content="Discover our all-in-one image utilities including image to text, image translator, and more. No subscription required!" />
        <link rel="canonical" href="https://www.yoursaasdomain.com/" />
      </Head>
      <Header />
      <main>
        <section className="hero">
          <h1>Welcome to All-in-One Tools</h1>
          <p>Your ultimate solution for image utilities without any subscription model.</p>
        </section>
        <section className="tools-grid">
          <ToolCard title="Image to Text" description="Convert images to text effortlessly." link="/tools/image-to-text" />
          <ToolCard title="Image Translator" description="Translate text within images seamlessly." link="/tools/image-translator" />
          {/* Add more ToolCard components as needed */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;