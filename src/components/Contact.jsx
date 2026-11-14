import { useI18n } from "../i18n.jsx";
import { PROFILE } from "../content.js";

function shorten(url) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function Contact() {
  const { t, lang } = useI18n();
  const cv = PROFILE.cv[lang];

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <p className="section-label">{t("contact.label")}</p>
        <h2 className="section-title">{t("contact.title")}</h2>
        <p className="section-intro">{t("contact.text")}</p>

        <a className="mail" href={"mailto:" + PROFILE.email}>
          {PROFILE.email}
        </a>

        <ul className="contact-links">
          {PROFILE.github && (
            <li>
              <a className="link" href={PROFILE.github} target="_blank" rel="noopener">
                GitHub · {shorten(PROFILE.github)} ↗
              </a>
            </li>
          )}
          {PROFILE.linkedin && (
            <li>
              <a className="link" href={PROFILE.linkedin} target="_blank" rel="noopener">
                LinkedIn · {shorten(PROFILE.linkedin)} ↗
              </a>
            </li>
          )}
          {cv && (
            <li>
              <a className="link" href={cv}>
                {t("contact.cv")}
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
