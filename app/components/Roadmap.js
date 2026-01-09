"use client";
import { useEffect } from "react";

const data = [
  { title: "Requirement Analysis", color: "orange", side: "right", top: 120 },
  { title: "Planning & Sprint", color: "green", side: "left", top: 300 },
  { title: "UI/UX Design", color: "orange", side: "right", top: 480 },
  { title: "Iterative Development", color: "green", side: "left", top: 660 },
  { title: "Quality Assurance", color: "orange", side: "right", top: 840 },
  { title: "Client Review", color: "green", side: "left", top: 1020 },
  { title: "Deployment", color: "orange", side: "right", top: 1200 },
  { title: "Maintenance", color: "green", side: "left", top: 1380 },
];

export default function Roadmap() {
  useEffect(() => {
    const path = document.getElementById("road-path");
    const nodes = document.querySelectorAll(".milestone");

    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const animate = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / height, 1);

      path.style.strokeDashoffset = length - length * progress;

      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          node.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", animate);
    animate();

    return () => window.removeEventListener("scroll", animate);
  }, []);

  return (
    <section className="roadmap-section">
      {/* SVG ROAD */}
   <svg
  className="road-svg"
  viewBox="0 0 1200 1800"
  preserveAspectRatio="none"
>
  <path
    id="road-path"
    d="
      M 120 80
      C 120 300, 1080 300, 1080 600
      C 1080 900, 120 900, 120 1200
      C 120 1500, 1080 1500, 120 1800
    "
    stroke="#e6e6e6"
    strokeWidth="18"
    fill="none"
    strokeLinecap="round"
  />
</svg>



      {/* MILESTONES */}
      {data.map((item, i) => (
        <div
          key={i}
          className={`milestone ${item.side}`}
          style={{ top: item.top }}
        >
          <span className={`dot ${item.color}`} />
          <div className="connector" />
          <div className="pill">{item.title}</div>
        </div>
      ))}
    </section>
  );
}
