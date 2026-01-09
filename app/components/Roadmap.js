"use client";
import { useEffect , useState , useRef } from "react";

const data = [
  { title: "Requirement Analysis", color: "orange", progress: 0.05 },
  { title: "Planning & Sprint", color: "green", progress: 0.18 },
  { title: "UI/UX Design", color: "orange", progress: 0.30 },
  { title: "Iterative Development", color: "green", progress: 0.42 },
  { title: "Quality Assurance", color: "orange", progress: 0.55 },
  { title: "Client Review", color: "green", progress: 0.68 },
  { title: "Deployment", color: "orange", progress: 0.82 },
  { title: "Maintenance", color: "green", progress: 0.95 },
];


export default function Roadmap() {
  const pathRef = useRef(null);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    const calculated = data.map((item) => {
      const point = path.getPointAtLength(length * item.progress);
      return {
        ...item,
        x: point.x,
        y: point.y,
      };
    });

    setPoints(calculated);
  }, []);

  return (
    <section className="roadmap-section">
      <svg
        className="road-svg"
        viewBox="0 0 1200 2050"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="
            M 120 80
            C 120 300, 1080 300, 1080 600
            C 1080 900, 120 900, 120 1200
            C 120 1500, 1080 1500, 1080 1750
            C 1080 1900, 300 1900, 160 2000
            C 120 2030, 120 2030, 120 2050
          "
          stroke="#e6e6e6"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {points.map((item, i) => (
        <div
          key={i}
          className="milestone"
          style={{
            left: item.x,
            top: item.y,
            transform: "translate(1%, -50%)",
          }}
        >
          <div className={`dot ${item.color}`} />
          <div className="pill">{item.title}</div>
        </div>
      ))}
    </section>
  );
}
