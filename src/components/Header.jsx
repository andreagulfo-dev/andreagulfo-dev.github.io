import { useEffect } from "react";
import { useI18n } from "../i18n.jsx";

function getTheme() {
  const saved = document.documentElement.getAttribute("data-theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function Header() {
  const { t, lang, setLang } = useI18n();

  function toggleTheme() {
    const next = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  useEffect(() => {
    const root = document.documentElement;

    function updateProgress() {
      const max = root.scrollHeight - root.clientHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--progress", progress);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top">
          Andrea Gulfo
        </a>

        <nav className="menu" aria-label={t("nav.label")}>
          <a href="#start">{t("nav.about")}</a>
          <a href="#skills">{t("nav.skills")}</a>
          <a href="#projects">{t("nav.projects")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </nav>

        <div className="tools">
          <div className="lang" role="group" aria-label={t("lang.label")}>
            <button type="button" aria-pressed={lang === "it"} onClick={() => setLang("it")}>
              IT
            </button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
          </div>

          <button type="button" className="theme" onClick={toggleTheme} aria-label={t("theme.label")}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 3.5v17" />
              <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
