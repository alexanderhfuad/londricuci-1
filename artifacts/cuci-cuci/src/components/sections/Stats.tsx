import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.floor(latest).toLocaleString("id-ID")}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 25000, suffix: "+", label: "Cucian selesai" },
  { value: 1200, suffix: "+", label: "Pelanggan setia" },
  { value: 8, suffix: " thn", label: "Pengalaman" },
  { value: 99, suffix: "%", label: "Tingkat kepuasan" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-cyan-600 text-primary-foreground relative overflow-hidden">
      {/* Bubbles decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { size: 80, top: "10%", left: "8%", delay: 0 },
          { size: 40, top: "70%", left: "15%", delay: 1 },
          { size: 60, top: "30%", left: "85%", delay: 0.5 },
          { size: 100, top: "60%", left: "75%", delay: 1.5 },
          { size: 50, top: "20%", left: "55%", delay: 0.8 },
        ].map((b, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.15 }}
            animate={{ y: [-15, 15, -15], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
            className="absolute rounded-full bg-white/20"
            style={{ width: b.size, height: b.size, top: b.top, left: b.left }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
