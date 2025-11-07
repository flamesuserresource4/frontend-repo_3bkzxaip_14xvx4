import { motion } from 'framer-motion';
import { Rocket, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0F1F]/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/60 via-fuchsia-500/60 to-purple-600/60 blur-xl" />
            <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-[#0F172A] border border-cyan-300/30 shadow-[0_0_30px_-10px] shadow-cyan-400/40">
              <Rocket className="w-5 h-5 text-cyan-300" />
            </div>
          </div>
          <span className="font-semibold tracking-tight text-white">
            TryoutLMS AI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#who" className="hover:text-white transition-colors">Siapa Kami</a>
          <a href="#about" className="hover:text-white transition-colors">Tentang</a>
          <a href="#features" className="hover:text-white transition-colors">Fitur</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a>
        </nav>

        <motion.a
          whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(34,211,238,0.35)' }}
          whileTap={{ scale: 0.98 }}
          href="#cta"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_-5px] shadow-cyan-400/50"
        >
          Get Started
          <LogIn className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </motion.a>
      </div>
    </header>
  );
}
