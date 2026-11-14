import { useI18n } from "./i18n.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Trail from "./components/Trail.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const { t } = useI18n();

  return (
    <>
      <a className="skip" href="#main">
        {t("skip")}
      </a>

      <Header />

      <main id="main">
        <Hero />

        <section className="path">
          <div className="wrap">
            <p className="section-label">{t("path.label")}</p>
            <Trail />
          </div>
        </section>

        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} Andrea Gulfo</span>
          <span>{t("footer.built")}</span>
        </div>
      </footer>
    </>
  );
}
