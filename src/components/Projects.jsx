import { useI18n } from "../i18n.jsx";
import { PROJECTS } from "../content.js";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Projects() {
  const { t, pick } = useI18n();

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <p className="section-label">{t("projects.label")}</p>
        <h2 className="section-title">{t("projects.title")}</h2>
        <p className="section-intro">{t("projects.intro")}</p>

        <div className="projects">
          {PROJECTS.map((project, i) => (
            <article className="project" key={project.id}>
              <div className="p-meta">
                <span className="p-no">{pad(i + 1)}</span>
                <span>{project.year}</span>
                <span className={"chip " + project.status}>{t("status." + project.status)}</span>
              </div>

              <div className="p-body">
                <h3>{pick(project.title)}</h3>
                <p className="p-sub">{pick(project.subtitle)}</p>

                <dl className="p-list">
                  <div className="p-row">
                    <dt>{t("p.context")}</dt>
                    <dd>{pick(project.context)}</dd>
                  </div>
                  <div className="p-row">
                    <dt>{t("p.did")}</dt>
                    <dd>{pick(project.did)}</dd>
                  </div>
                  <div className="p-row">
                    <dt>{t("p.tools")}</dt>
                    <dd>{project.tools.join(" · ")}</dd>
                  </div>
                </dl>

                <p className="p-links">
                  {project.link && (
                    <a className="link" href={project.link} target="_blank" rel="noopener">
                      {t("link.site")} ↗
                    </a>
                  )}
                  {project.code && (
                    <a className="link" href={project.code} target="_blank" rel="noopener">
                      {t("link.code")} ↗
                    </a>
                  )}
                </p>
              </div>
            </article>
          ))}

          <article className="project is-empty">
            <div className="p-meta">
              <span className="p-no">{pad(PROJECTS.length + 1)}</span>
            </div>
            <div className="p-body">
              <h3>{t("projects.empty.title")}</h3>
              <p className="p-sub">{t("projects.empty.text")}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
