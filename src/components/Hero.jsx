import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Grid + glow background */}
      <div aria-hidden className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.15),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.div initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            AI-Powered Web3 Learning Platform
          </motion.div>

          <motion.h1 initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Belajar seperti profesional masa depan
          </motion.h1>

          <motion.p initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-slate-300 max-w-xl">
            TryoutLMS AI menggabungkan analitik cerdas, pembelajaran adaptif, dan dashboard futuristik untuk mendorong performa terbaikmu. Desain modern, insight real-time, dan pengalaman belajar seperti startup Web3 premium.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_-10px] shadow-cyan-400/50">
              Mulai Sekarang
            </a>
            <a href="#about" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-cyan-400/40 transition-colors">
              Lihat bagaimana kami bekerja
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/10 to-purple-500/10 blur-2xl pointer-events-none" />
          <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
