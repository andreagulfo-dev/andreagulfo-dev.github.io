import { useI18n } from "../i18n.jsx";
import { SKILLS } from "../content.js";

export default function Skills() {
  const { t, pick } = useI18n();

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <p className="section-label">{t("skills.label")}</p>
        <h2 className="section-title">{t("skills.title")}</h2>
        <p className="section-intro">{t("skills.legend")}</p>

        <dl className="skills">
          {SKILLS.map((group, i) => (
            <div className="skill-row" key={i}>
              <dt>{pick(group.label)}</dt>
              <dd>
                {group.items.map((item, j) => (
                  <span className={"skill " + item.level} key={j}>
                    {pick(item.name)}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
