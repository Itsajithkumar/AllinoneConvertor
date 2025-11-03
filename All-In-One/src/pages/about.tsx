import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - All-in-One</title>
        <meta name="description" content="Learn more about All-in-One, the comprehensive suite of image utilities designed to simplify your workflow." />
        <meta name="keywords" content="About, All-in-One, image utilities, OCR, image processing" />
      </Head>
      <h1>About All-in-One</h1>
      <p>
        All-in-One is your go-to solution for a variety of image utilities. Our platform offers tools for converting images to text, translating text within images, and much more. 
      </p>
      <h2>Our Mission</h2>
      <p>
        We aim to provide a seamless experience for users looking to enhance their productivity with powerful image processing tools. 
      </p>
      <h2>Features</h2>
      <ul>
        <li>Image to Text Conversion</li>
        <li>Image Translation</li>
        <li>PDF Tools</li>
        <li>QR Code and Barcode Utilities</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
    </div>
  );
};

export default About;