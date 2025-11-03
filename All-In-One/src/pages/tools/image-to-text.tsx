import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ocrClient } from '../../lib/ocr-client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ImageToText = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setLoading(true);
      ocrClient(file)
        .then((result) => {
          setText(result.text);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error processing image:', error);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <Head>
        <title>Image to Text Tool - All-in-One</title>
        <meta name="description" content="Convert images to text easily with our Image to Text tool." />
      </Head>
      <Header />
      <main>
        <h1>Image to Text Converter</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {loading && <p>Processing image...</p>}
        {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '20px' }} />}
        {text && (
          <div>
            <h2>Extracted Text:</h2>
            <p>{text}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ImageToText;