/* eslint-disable @typescript-eslint/no-explicit-any */
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


export default function Page({ params }: { params: { lang: "en-US" | "de-ES" | "de"; } }) {
  const [dict, setDict] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch dictionary based on language
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

  // UseEffect to load the dictionary when language changes
  useEffect(() => {
    fetchDictionary(params.lang);

    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, [params.lang]);

  // Show loading while dictionary is being fetched
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // Return the layout once the dictionary is loaded
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
