// "use client";
// import { useEffect , useState , useRef } from "react";

// const data = [
//   { title: "Requirement Analysis", color: "orange", progress: 0.05 },
//   { title: "Planning & Sprint", color: "green", progress: 0.18 },
//   { title: "UI/UX Design", color: "orange", progress: 0.30 },
//   { title: "Iterative Development", color: "green", progress: 0.42 },
//   { title: "Quality Assurance", color: "orange", progress: 0.55 },
//   { title: "Client Review", color: "green", progress: 0.68 },
//   { title: "Deployment", color: "orange", progress: 0.82 },
//   { title: "Maintenance", color: "green", progress: 0.95 },
// ];


// export default function Roadmap() {
//   const pathRef = useRef(null);
//   const [points, setPoints] = useState([]);

//   useEffect(() => {
//     if (!pathRef.current) return;

//     const path = pathRef.current;
//     const length = path.getTotalLength();

//     const calculated = data.map((item) => {
//       const point = path.getPointAtLength(length * item.progress);
//       return {
//         ...item,
//         x: point.x,
//         y: point.y,
//       };
//     });

//     setPoints(calculated);
//   }, []);

//   return (
//     <section className="roadmap-section">
//       <svg
//         className="road-svg"
//         viewBox="0 0 1200 2050"
//         preserveAspectRatio="none"
//       >
//         <path
//           ref={pathRef}
//           d="
//             M 120 80
//             C 120 300, 1080 300, 1080 600
//             C 1080 900, 120 900, 120 1200
//             C 120 1500, 1080 1500, 1080 1750
//             C 1080 1900, 300 1900, 160 2000
//             C 120 2030, 120 2030, 120 2050
//           "
//           stroke="#e6e6e6"
//           strokeWidth="18"
//           fill="none"
//           strokeLinecap="round"
//         />
//       </svg>

//       {points.map((item, i) => (
//         <div
//           key={i}
//           className="milestone"
//           style={{
//             left: item.x,
//             top: item.y,
//             transform: "translate(1%, -50%)",
//           }}
//         >
//           <div className={`dot ${item.color}`} />
//           <div className="pill">{item.title}</div>
//         </div>
//       ))}
//     </section>
//   );
// }

"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";


/* ---------------- COLOR MAP (TAILWIND SAFE) ---------------- */
const colorMap = {
  blue: {
    gradient: "bg-blue-500",
    bar: "bg-blue-500",
  },
  green: {
    gradient: "bg-green-500",
    bar: "bg-green-500",
  },
  yellow: {
    gradient: "bg-yellow-500",
    bar: "bg-yellow-500",
  },
  purple: {
    gradient: "bg-purple-500",
    bar: "bg-purple-500",
  },
  red: {
    gradient: "bg-red-500",
    bar: "bg-red-500",
  },
};

const data = [
  {
    title: "Requirement Analysis & Consultation",
    color: "blue",
    description:
      "Understand business goals, gather requirements, identify risks and success metrics.",
    progress: 0.05,
  },
  {
    title: "Planning & Sprint Roadmap",
    color: "green",
    description:
      "Define milestones, sprint planning, resource allocation and delivery timelines.",
    progress: 0.18,
  },
  {
    title: "UI/UX Design & Prototyping",
    color: "yellow",
    description:
      "Wireframes, user flows, design system and high-fidelity UI screens.",
    progress: 0.30,
  },
  {
    title: "Iterative Development",
    color: "purple",
    description:
      "Frontend & backend development with continuous integration.",
    progress: 0.42,
  },
  {
    title: "Quality Assurance",
    color: "red",
    description:
      "Manual & automated testing, bug fixing and performance checks.",
    progress: 0.55,
  },
  {
    title: "Client Review",
    color: "green",
    description:
      "Client demos, feedback cycles and final approvals.",
    progress: 0.68,
  },
  {
    title: "Deployment",
    color: "blue",
    description:
      "Production deployment, monitoring and go-live support.",
    progress: 0.82,
  },
  {
    title: "Post-Launch Support",
    color: "purple",
    description:
      "Ongoing support, updates and optimizations.",
    progress: 0.95,
  },
];

export default function Roadmap() {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  const [points, setPoints] = useState([]);
const nodeRefs = useRef([]);


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

  useEffect(() => {
  if (!pathRef.current || !svgRef.current) return;

  const path = pathRef.current;
  const totalLength = path.getTotalLength();

  // Initial hide
  path.style.strokeDasharray = totalLength;
  path.style.strokeDashoffset = totalLength;

 const onScroll = () => {
  const rect = svgRef.current.getBoundingClientRect();

  const windowHeight = window.innerHeight;

  // 🔧 control when road should finish (tweakable)
  const startOffset = windowHeight * 0.4;   // start earlier
  const endOffset = windowHeight * 0.4;     // end earlier ✅

  const totalScrollable = rect.height + startOffset - endOffset;
  const scrolled = windowHeight - rect.top - startOffset;

  const progress = Math.min(
    Math.max(scrolled / totalScrollable, 0),
    1
  );

  path.style.strokeDashoffset =
    totalLength * (1 - progress);
};

  window.addEventListener("scroll", onScroll);
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);




  return (
    <>
    <section className="roadmap-section relative ">
      {/* ROAD */}
      <svg className="road-svg" viewBox="0 0 1200 2050" preserveAspectRatio="none" ref={svgRef}>
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
          stroke="#E8E8E8"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* NODES */}
      {points.map((node, index) => {
        const color = colorMap[node.color];

        return (
     <motion.div
  key={index}
  className="absolute group"
  style={{
    left: node.x,
    top: node.y,
  }}
  initial={{ opacity: 0, y: 40, scale: 0.9, x: "-50%", y: "-169%" }}
  whileInView={{ opacity: 1, y: "-169%", scale: 1, x: "-50%" }}
  viewport={{ once: true, amount: 0.4 }}
>

            {/* PILL */}
            <div className="
              relative flex items-center gap-4
              rounded-full px-5 py-3
              bg-white/70 backdrop-blur
              shadow-lg
              transition-all duration-300
              group-hover:-translate-y-1
            ">
              {/* ICON */}
              <div
                className={`relative h-16 w-16 rounded-full
                flex items-center justify-center text-white
                ${color.gradient}`}
              >
                <span
                  className={`absolute inset-0 rounded-full
                  ${color.gradient} animate-ping opacity-30`}
                />
                <span className="relative font-bold text-lg font-lustria">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-bold text-gray-800 whitespace-nowrap fonto-notosans">
                {node.title}
              </h3>

              {/* CONNECTOR */}
              <div className="absolute left-1/2 -bottom-12 h-12 border-l-2 border-dashed border-gray-300" />
              <div
                className={`absolute  left-[47%] -bottom-[70px]
                h-4 w-4 rounded-full shadow-lg
                ${color.gradient}`}
              />
            </div>

            {/* TOOLTIP */}
            {/* <div className="
              absolute top-[90px] left-1/2 -translate-x-1/2
              w-[280px]
              opacity-0 translate-y-4
              pointer-events-none
              transition-all duration-300
              group-hover:opacity-100
              group-hover:translate-y-0
            ">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className={`h-1.5 ${color.bar}`} />

                <div className="p-4">
                  <p className="text-sm text-gray-600">
                    {node.description}
                  </p>

                  <div className="flex gap-2 mt-4 pt-3 border-t">
                    <span className={`h-2 w-2 rounded-full ${color.bar}`} />
                    <span className={`h-2 w-2 rounded-full ${color.bar} opacity-70`} />
                    <span className={`h-2 w-2 rounded-full ${color.bar} opacity-40`} />
                  </div>
                </div>
              </div>
            </div> */}

            
<div
  className="
    absolute top-1/2 left-full ml-8
    -translate-y-1/2
    w-[340px]
    opacity-0 translate-x-4
    pointer-events-none
    transition-all duration-300
    group-hover:opacity-100
    group-hover:translate-x-0
  "
>
  {/* CONNECTOR LINE */}
  <div className="absolute left-[-32px] top-1/2 -translate-y-1/2 h-px w-8 bg-gray-300" />

  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
    {/* TOP COLOR BAR */}
    <div className={`h-2 ${color.bar}`} />

    <div className="p-5 relative">
      {/* TOP ICON (REFERENCE STYLE) */}
      <div
        className={` top-1 right-5 
        h-10 w-10 rounded-full
        ${color.gradient}
        flex items-center justify-center justify-self-end
        text-white shadow-lg`}
      >
        i
      </div>

      {/* CONTENT */}
      <p className="text-sm leading-relaxed text-gray-600 mt-3  font-notosans">
        {node.description}
      </p>

      {/* DOTS */}
      <div className="flex gap-2 mt-5 pt-4 border-t">
        <span className={`h-2.5 w-2.5 rounded-full ${color.bar}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${color.bar} opacity-70`} />
        <span className={`h-2.5 w-2.5 rounded-full ${color.bar} opacity-40`} />
      </div>
    </div>
  </div>
</div>


          </motion.div>
        );
      })}
    </section>

   <section className="roadmap-section-mobile grid grid-cols-1 sm:grid-cols-2 gap-4">

  {points.map((node, index) => {
    const color = colorMap[node.color];

    return (
      <div key={index} className="group">
        
        {/* PILL */}
        <div className="mobile-pill relative flex items-center gap-4
          rounded-full px-5 py-3
          transition-all duration-300
          group-hover:-translate-y-1 mb-3
        ">
          {/* ICON */}
          <div
            className={`relative sm:h-16 h-10 sm:w-16 w-10 rounded-full
            flex items-center justify-center text-white
            ${color.gradient}`}
          >
            <span className="relative font-bold text-lg font-lustria">
              {index + 1}
            </span>
          </div>

          <h3 className="font-bold text-gray-800 fonto-notosans">
            {node.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <div className="transition-all duration-300 mb-3" >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{minHeight:"106px"}}>
            <div className="p-5 relative">
              <p className=" leading-relaxed text-gray-600 mt-3 font-notosans" style={{fontSize:"18px" , lineHeight:"27px"}}>
                {node.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  })}

</section>

    </>
  );
}
