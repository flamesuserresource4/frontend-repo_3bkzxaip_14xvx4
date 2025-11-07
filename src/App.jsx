import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { WhoWeAre, AboutTryout, Features, Testimonials, CallToAction } from './components/Sections';

function App() {
  useEffect(() => {
    // smooth scroll
    const handleClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white font-inter">
      {/* Animated neon gradient blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 -right-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 40 40\'%3E%3Cg fill=\'none\' stroke=\'white\' stroke-opacity=\'0.25\' stroke-width=\'0.4\'%3E%3Cpath d=\'M0 20h40M20 0v40\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />
      </div>

      <Navbar />
      <Hero />
      <WhoWeAre />
      <AboutTryout />
      <Features />
      <Testimonials />
      <CallToAction />

      <footer className="border-t border-white/5 py-10 text-center text-sm text-slate-400 bg-gradient-to-t from-[#0A0F1F] via-transparent to-transparent">
        © {new Date().getFullYear()} TryoutLMS AI — Belajar seperti profesional masa depan
      </footer>
    </div>
  );
}

export default App;
