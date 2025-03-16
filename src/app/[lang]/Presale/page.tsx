/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from 'react';
import Presale from './Presale';  // Adjust path if necessary
import { getDictionary } from './../dictionaries';  // Adjust path as necessary

const Page = ({ params }: { params: { lang: 'en-US' | 'de-ES' | 'de' } }) => {
  const [dict, setDict] = useState<any>(null);

  // Use React.use() to unwrap params
  const lang = params.lang;

  useEffect(() => {
    // Fetch the dictionary based on the language in the params
    const fetchDict = async () => {
      const language = lang === 'de' ? 'de-ES' : lang;
      const dictionary = await getDictionary(language);
      setDict(dictionary);
    };

    fetchDict();
  }, [lang]);

  // Render only the Presale component after dictionary is fetched
  return (
    <div className='pt-5 pb-10 bg-gray-100'>
      {/* Show the Presale component after dictionary is fetched */}
      {dict && <Presale dict={dict} />}
    </div>
  );
};

export default Page;
