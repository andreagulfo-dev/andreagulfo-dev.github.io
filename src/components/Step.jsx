import { useI18n } from "../i18n.jsx";

function highlight(text) {
  return text.split("*").map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));
}

export default function Step({ step, index, reached }) {
  const { pick } = useI18n();

  return (
    <li id={step.id} className={reached ? "step is-reached" : "step"}>
      <div className="node" aria-hidden="true" />
      <div className="step-card">
        <p className="label">
          <b>{String(index + 1).padStart(2, "0")}</b>
          <span>{pick(step.tag)}</span>
        </p>
        <h2>{pick(step.title)}</h2>

        {step.body && pick(step.body).map((text, i) => <p key={i}>{highlight(text)}</p>)}

        {step.rows && (
          <dl className="credits">
            {step.rows.map((row, i) => (
              <div className="credit" key={i}>
                <dt>{pick(row.label)}</dt>
                <dd>{pick(row.value)}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </li>
  );
}
