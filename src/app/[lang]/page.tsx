"use client"; // Ensure this is a Client Component

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dict, setDict] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<"en-US" | "de-ES" | "de">("en-US");

  // Fetch params after they resolve (unwrap the Promise)
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Unwrap the Promise to get lang
      setLang(resolvedParams.lang === "de" ? "de-ES" : resolvedParams.lang);
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
  }, [lang]);

  // If still loading, show a professional loading screen
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full h-16 w-16 animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-600">Welcome to WellFit</p>
          <p className="text-sm text-gray-500">Loading, please wait...</p>
        </div>
      </div>
    );
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
