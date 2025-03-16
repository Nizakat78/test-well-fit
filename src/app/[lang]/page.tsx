/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
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


export default async function Page({ params }: { params: Promise<{ lang: "en-US" | "de-ES" | "de"; }> }) {
  const { lang } = await params; // Await the params here
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dict, setDict] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchDictionary = async (lang: string) => {
    try {
      const normalizedLang: "en-US" | "de-ES" | "de" =
        lang === "de" ? "de-ES" : (["en-US", "de-ES"].includes(lang) ? lang as "en-US" | "de-ES" : "en-US");
      const dictionary = await getDictionary(normalizedLang);
      setDict(dictionary);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch dictionary:", error);
      setLoading(false);
    }
  };

  // Fetch dictionary based on the selected language
  useEffect(() => {
    fetchDictionary(lang);

    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, [lang]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div>
      <Navbar lang={lang === "de" ? "de-ES" : lang} dict={dict} />
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
