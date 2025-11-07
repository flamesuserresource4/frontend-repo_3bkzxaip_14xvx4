import { motion } from 'framer-motion';
import { Shield, Sparkles, Gauge } from 'lucide-react';

export function WhoWeAre() {
  return (
    <section id="who" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-invert">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Siapa Kami</h2>
          <p className="text-slate-300">
            Kami adalah tim builder Web3 & AI yang merancang platform belajar generasi baru. Fokus kami: pengalaman elegan, data yang akurat, dan performa yang dapat diskalakan.
          </p>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[0_0_60px_-20px] shadow-fuchsia-500/30">
          <div className="text-sm font-mono text-cyan-200">$ who-we-are</div>
          <pre className="mt-3 text-slate-200 text-sm whitespace-pre-wrap">
{`> Core Values
- Precision by Design
- Privacy by Default
- Performance at Scale
`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutTryout() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Tentang TryoutLMS</h3>
          <p className="mt-3 text-slate-300">
            TryoutLMS AI adalah platform SaaS cerdas yang memadukan analitik prediktif dengan pembelajaran adaptif. Dashboard futuristik kami menampilkan metrik real‑time agar kamu bisa belajar seperti profesional masa depan.
          </p>
        </motion.div>
        <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-[#0B1224] to-[#111827] p-6 shadow-[0_0_80px_-20px] shadow-cyan-400/30">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-semibold text-white">99.9%</div>
              <div className="text-xs text-slate-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white"><span className="text-cyan-300">AI</span></div>
              <div className="text-xs text-slate-400">Adaptive</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">ISO</div>
              <div className="text-xs text-slate-400">Secure</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Features() {
  const items = [
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-300" />,
      title: 'Smart Analytics',
      desc: 'Insight prediktif yang menyarankan fokus belajar berbasis data.',
    },
    {
      icon: <Gauge className="w-5 h-5 text-fuchsia-300" />,
      title: 'Adaptive Learning',
      desc: 'Kurikulum menyesuaikan level kemampuan dan progresmu secara real-time.',
    },
    {
      icon: <Shield className="w-5 h-5 text-purple-300" />,
      title: 'Secure & Scalable',
      desc: 'Arsitektur modern dengan keamanan enterprise dan performa tinggi.',
    },
  ];

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((f, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:border-cyan-300/30 transition-colors"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/10 to-purple-500/10" />
            <div className="relative flex items-start gap-3">
              <div className="grid place-items-center w-10 h-10 rounded-xl border border-white/10 bg-[#0F172A] shadow-[0_0_40px_-15px] shadow-cyan-400/50">
                {f.icon}
              </div>
              <div>
                <h4 className="text-white font-semibold">{f.title}</h4>
                <p className="text-slate-300 text-sm mt-1">{f.desc}</p>
                <div className="mt-4 text-xs font-mono text-slate-300/90 bg-black/30 rounded-lg p-3 border border-white/10">$ npm run learn --mode adaptive</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const data = [
    {
      name: 'Raka — Calon PTN',
      text: 'Dashboard-nya futuristik banget. Rekomendasi soal terasa personal dan akurat.',
    },
    {
      name: 'Dina — Fresh Grad',
      text: 'UI rapi dengan animasi halus. Insight AI bikin fokus ke materi yang penting.',
    },
    {
      name: 'Andre — Mentor',
      text: 'Platform ini scalable dan privasi terjaga. Cocok untuk kelas intensif.',
    },
  ];
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((t, i) => (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5">
            <p className="text-slate-300">“{t.text}”</p>
            <div className="mt-4 text-sm font-semibold text-white">{t.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 py-20 text-center">
      <motion.h3 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl font-semibold text-white">
        Siap raih hasil terbaikmu?
      </motion.h3>
      <motion.p initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-slate-300 max-w-2xl mx-auto">
        Mulai perjalanan belajar adaptif dengan insight AI, progress tracker, dan simulasi terukur.
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(168,85,247,0.35)' }}
        whileTap={{ scale: 0.98 }}
        href="#"
        className="inline-flex items-center justify-center mt-7 rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_35px_-10px] shadow-fuchsia-500/50"
      >
        Register Sekarang
      </motion.a>
    </section>
  );
}
