import { useI18n } from "../i18n.jsx";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="eyebrow">{t("hero.meta")}</p>
        <h1>Andrea Gulfo</h1>
        <p className="hero-lead">{t("hero.lead")}</p>
        <a className="hero-cta" href="#start">
          {t("hero.cta")}
          <svg viewBox="0 0 16 22" width="12" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 1v19M2 14l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
