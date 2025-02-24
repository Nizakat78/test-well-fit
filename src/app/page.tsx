import React from 'react'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'
import Insight from '@/components/Insight';
import Revolution from '@/components/Revolution';
import Adddoing from '@/components/Adddoing';
import Contribution from '@/components/Contribution';
import Shaping from '@/components/Shaping'
import Joinpresale from '@/components/Joinpresale';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Insight />
      <Revolution />
      <Adddoing />
      <Contribution />
      <Shaping />
      <Joinpresale />
      <Footer />
    </div>
  );
}
