'use client';

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Insight from "@/components/Insight";
import Revolution from "@/components/Revolution";
import Adddoing from "@/components/Adddoing";
import Contribution from "@/components/Contribution";
import Shaping from "@/components/Shaping";
import Joinpresale from "@/components/Joinpresale";
import Footer from "@/components/Footer";
import { getDictionary } from "./dictionaries";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS

interface Params {
  lang: "en-US" | "de-ES" | "de";
}

export default function Page({ params }: { params: Params }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dict, setDict] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Handle params.lang properly (await params before use)
  const fetchDictionary = async (lang: string) => {
    try {
      const normalizedLang: "en-US" | "de-ES" | "de" = 
        lang === "de" ? "de-ES" : (["en-US", "de-ES"].includes(lang) ? lang as "en-US" | "de-ES" : "en-US"); // Normalize lang
      const dictionary = await getDictionary(normalizedLang);
      setDict(dictionary);
      setLoading(false); // Set loading to false after the dictionary is fetched
    } catch (error) {
      console.error("Failed to fetch dictionary:", error);
      setLoading(false); // Ensure loading is false even if there's an error
    }
  };

  useEffect(() => {
    // Handle async nature of `params.lang`
    const fetchLang = async () => {
      const { lang } = await params; // Await params.lang here (in case of server-side rendering)
      fetchDictionary(lang);
      
      // Initialize AOS
      AOS.init({
        duration: 1000,
        easing: "ease-out",
        once: true,
      });
    };
    
    fetchLang();
  }, [params]);  // Watch for changes in params.lang

  // Show a loading spinner or message while dict is being fetched
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // Once dict is loaded, render the page
  return (
    <div>
      <Navbar lang={params.lang === "de" ? "de-ES" : params.lang} dict={dict} />
      <Hero dict={dict} />
      <Insight dict={dict} />
      <Revolution dict={dict} />
      <Adddoing dict={dict} />
      <Contribution dict={dict} />
      <Shaping dict={dict} />
      <Joinpresale dict={dict} />
      <Footer dict={dict} />
    </div>
  );
}
