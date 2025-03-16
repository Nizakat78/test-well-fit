/* eslint-disable @typescript-eslint/no-explicit-any */
"use client" // Ensures this is a Client Component
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
import { getDictionary } from "./dictionaries"; // Assuming you have a method to fetch the dictionary
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS


export default function Page({
  params,
}: {
  params: Promise<{ lang: "en-US" | "de-ES" | "de" }>;
}) {
  const [dict, setDict] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<"en-US" | "de-ES" | "de">("en-US");

  // Fetch params after they resolve (unwrap the Promise)
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Unwrap the Promise to get lang
      setLang(resolvedParams.lang);
    };
    fetchParams();
  }, [params]);

  // Fetch the dictionary based on the language
  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        const normalizedLang: "en-US" | "de-ES" | "de" =
          lang === "de" ? "de-ES" : (["en-US", "de-ES"].includes(lang) ? lang : "en-US");
        const dictionary = await getDictionary(normalizedLang);
        setDict(dictionary);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch dictionary:", error);
        setLoading(false);
      }
    };

    if (lang) {
      fetchDictionary();
    }
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, [lang]); // Run this effect whenever the lang changes

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div>
      <Navbar lang={lang} dict={dict} />
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
