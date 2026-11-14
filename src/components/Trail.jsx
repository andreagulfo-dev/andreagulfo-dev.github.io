import { useEffect, useRef, useState } from "react";
import Step from "./Step.jsx";
import { STEPS } from "../content.js";

export default function Trail() {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const progressPathRef = useRef(null);
  const markerRef = useRef(null);
  const clipRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    let nodes = [];
    let length = 0;
    let lastCount = 0;

    function update() {
      if (!length) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let targetY = window.innerHeight * 0.55 - wrap.getBoundingClientRect().top;
      if (reduceMotion) targetY = wrap.offsetHeight;

      let low = 0;
      let high = length;
      for (let i = 0; i < 22; i++) {
        const mid = (low + high) / 2;
        if (path.getPointAtLength(mid).y < targetY) {
          low = mid;
        } else {
          high = mid;
        }
      }

      const point = path.getPointAtLength(low);
      markerRef.current.setAttribute("transform", `translate(${point.x} ${point.y})`);
      clipRef.current.setAttribute("height", Math.max(0, point.y));

      const count = nodes.filter((node) => node.y <= targetY + 1).length;
      if (count !== lastCount) {
        lastCount = count;
        setReached(count);
      }
    }

    function measure() {
      const box = wrap.getBoundingClientRect();

      nodes = [...wrap.querySelectorAll(".node")].map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left - box.left + rect.width / 2,
          y: rect.top - box.top + rect.height / 2,
        };
      });

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const points = [
        { x: first.x, y: Math.max(0, first.y - 70) },
        ...nodes,
        { x: last.x, y: Math.min(box.height, last.y + 120) },
      ];

      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1];
        const b = points[i];
        const middleY = (a.y + b.y) / 2;
        d += ` C ${a.x} ${middleY}, ${b.x} ${middleY}, ${b.x} ${b.y}`;
      }

      path.setAttribute("d", d);
      progressPathRef.current.setAttribute("d", d);
      length = path.getTotalLength();
      setSize({ width: box.width, height: box.height });
      update();
    }

    measure();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", measure);
    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    document.fonts.ready.then(measure);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="trail" ref={wrapRef}>
      <svg
        className="trail-svg"
        width={size.width}
        height={size.height}
        viewBox={`0 0 ${size.width} ${size.height}`}
        aria-hidden="true"
      >
        <defs>
          <clipPath id="trail-clip">
            <rect ref={clipRef} x="-20" y="0" width={size.width + 40} height="0" />
          </clipPath>
        </defs>
        <path ref={pathRef} className="path-base" />
        <path ref={progressPathRef} className="path-progress" clipPath="url(#trail-clip)" />
        <g ref={markerRef}>
          <circle className="marker-ping" r="12" />
          <circle className="marker-core" r="8" />
        </g>
      </svg>

      <ol className="steps">
        {STEPS.map((step, i) => (
          <Step key={step.id} step={step} index={i} reached={i < reached} />
        ))}
      </ol>
    </div>
  );
}
