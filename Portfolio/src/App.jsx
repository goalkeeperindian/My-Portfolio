/**
 * Lavish Portfolio — Vite + React + Tailwind + Three.js
 * -----------------------------------------------------
 * This file is written as a .jsx component (not .tsx),
 * ready to drop into your Vite + React + Tailwind project.
 */

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

// ---------- Three.js Scene ----------
function FloatingTorus({ speed = 0.6 }) {
  const ref = useRef();
  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.2 * speed;
    ref.current.rotation.y += dt * 0.4 * speed;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.2, 0.35, 32, 64]} />
      <meshStandardMaterial metalness={0.7} roughness={0.1} emissive={'#0ea5e9'} emissiveIntensity={0.2} />
    </mesh>
  );
}

function ThreeHero() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} className="h-[520px] w-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <FloatingTorus />
        <Stars radius={100} depth={40} count={4000} factor={4} fade />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}

// ---------- Projects Data ----------
const PROJECTS = [
  {
    title: "FinGenie — AI Finance Assistant",
    desc: "Generative-AI assistant for financial guidance and automated reports.",
    tech: ["React", "Python", "LLMs", "Blockchain"],
    link: "#"
  },
  {
    title: "Rover Rescue — LiDAR Mapping Rover",
    desc: "Autonomous rover with LiDAR mapping and thermal inspection for search & rescue.",
    tech: ["ROS", "C++", "Python", "LIDAR"],
    link: "#"
  },
  {
    title: "Gunshot Detector (FPGA)",
    desc: "Low-latency direction-finding gunshot detection using omnidirectional microphones.",
    tech: ["FPGA", "Digital Signal Processing"],
    link: "#"
  }
];

// ---------- Portfolio Component ----------
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white font-sans">
      {/* HERO */}
      <header className="relative overflow-hidden min-h-[600px] flex items-center justify-center">
        <ThreeHero />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto text-center p-6">
            <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
              Lavish Kumar
            </motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Computer Science Engineer • Security & Data Engineering • Building creative applications with WebGL, Embedded systems and Generative AI.
            </motion.p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="#projects" className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold shadow-lg">See my work</a>
              <a href="#contact" className="px-5 py-3 rounded-2xl border border-slate-700 text-slate-200">Contact me</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* ABOUT */}
        <section id="about" className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold">About me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">I am a third-year integrated BE+ME student at Chandigarh University (passing out 2027). I love building real-world systems — from FPGA-based embedded detectors to full-stack AI products. I focus on secure, efficient, and maintainable engineering with a creative flare using 3D/visual interfaces.</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-400">
              <li>📍 Chandigarh, India</li>
              <li>🎓 Integrated BE+ME (2027)</li>
              <li>⚽ Former Rajasthan national football goalkeeper</li>
              <li>🛠️ Interests: Cybersecurity, Data Engineering, Robotics</li>
            </ul>
          </motion.div>
          <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-6 shadow-2xl">
              <h3 className="font-semibold">Quick skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'Three.js', 'Python', 'FPGA', 'Docker', 'SQL', 'LLMs'].map(s => (
                  <span key={s} className="text-xs px-3 py-1 bg-slate-700/40 rounded-full">{s}</span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-slate-400">Experience</div>
                  <div className="font-medium">3+ Years</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Awards</div>
                  <div className="font-medium">Hackathon wins</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-20">
          <motion.h3 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold mb-6">Selected projects</motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.article key={p.title} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-lg border border-slate-800">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-300 leading-snug">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-700/30 rounded">{t}</span>)}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.link} className="text-sm px-3 py-2 rounded-lg bg-slate-700/40">View</a>
                  <a href="#contact" className="text-sm px-3 py-2 rounded-lg border border-slate-700">Discuss</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-20">
          <motion.h3 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-2xl font-bold mb-4">Experience & Open Source</motion.h3>
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div className="rounded-xl p-6 bg-slate-800/40">
              <h4 className="font-semibold">Positions & internships</h4>
              <ul className="mt-3 list-disc list-inside text-sm">
                <li>Intern — Embedded Systems (Summer 2024)</li>
                <li>Research Assistant — Robotics Lab (2023)</li>
              </ul>
            </div>
            <div className="rounded-xl p-6 bg-slate-800/40">
              <h4 className="font-semibold">Open source & tools</h4>
              <p className="mt-2 text-sm">Contributed to small utilities and prototypes. Code available on GitHub — link in contact section.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-16">
          <motion.h3 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-2xl font-bold mb-4">Contact</motion.h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-xl p-6 bg-slate-800/40">
              <h4 className="font-semibold">Get in touch</h4>
              <p className="mt-2 text-sm text-slate-300">Email: <a href="mailto:you@example.com" className="underline">you@example.com</a></p>
              <p className="mt-2 text-sm text-slate-300">LinkedIn: <a href="#" className="underline">linkedin.com/in/yourname</a></p>
              <p className="mt-4 text-sm text-slate-400">Prefer WhatsApp or Telegram? Add your number here and link it.</p>
            </div>

            <form className="rounded-xl p-6 bg-slate-800/40 space-y-3">
              <label className="block text-sm text-slate-300">Name
                <input className="mt-2 w-full rounded-md bg-transparent border border-slate-700 p-2 text-white" placeholder="Your name" />
              </label>
              <label className="block text-sm text-slate-300">Message
                <textarea className="mt-2 w-full rounded-md bg-transparent border border-slate-700 p-2 text-white" rows={4} placeholder="Tell me about your project"></textarea>
              </label>
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-black">Send</button>
              </div>
            </form>
          </div>
        </section>

        <footer className="text-center text-sm text-slate-500 py-8">© {new Date().getFullYear()} Lavish Kumar — Built with Passion</footer>
      </main>
    </div>
  );
}
