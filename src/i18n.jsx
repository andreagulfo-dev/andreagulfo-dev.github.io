import { createContext, useContext, useEffect, useState } from "react";
import { STRINGS } from "./content.js";

const LangContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "it" || saved === "en") return saved;
  } catch (e) {}
  return navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = STRINGS[lang]["meta.title"];
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", STRINGS[lang]["meta.description"]);
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }, [lang]);

  function t(key) {
    return STRINGS[lang][key] || key;
  }

  function pick(value) {
    return typeof value === "string" ? value : value[lang];
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n() {
  return useContext(LangContext);
}
