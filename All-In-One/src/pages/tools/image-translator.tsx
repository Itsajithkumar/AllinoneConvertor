import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const ImageTranslator = () => {
  const [image, setImage] = useState<File | null>(null);
  const [translatedText, setTranslatedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
  };

  const handleTranslate = async () => {
    if (!image) return;

    setLoading(true);
    setTranslatedText('');

    // Placeholder for translation logic
    // Integrate your translation API here

    setLoading(false);
    setTranslatedText('Translated text will appear here.'); // Replace with actual translated text
  };

  return (
    <div>
      <Head>
        <title>Image Translator - All-in-One</title>
        <meta name="description" content="Translate text within images using our Image Translator tool." />
      </Head>

      <h1>Image Translator</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? 'Translating...' : 'Translate'}
      </button>

      {translatedText && (
        <div>
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default ImageTranslator;