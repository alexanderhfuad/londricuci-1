import { motion } from "framer-motion";
import { Award, Leaf, ShieldCheck, Heart } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Garansi 100%",
    description: "Tidak puas? Cuci ulang gratis. Pakaian rusak? Kami ganti.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Deterjen ramah lingkungan dan biodegradable untuk kulit sensitif.",
  },
  {
    icon: Award,
    title: "Mesin Premium",
    description: "Mesin Electrolux komersial dengan suhu terkontrol untuk tiap jenis kain.",
  },
  {
    icon: Heart,
    title: "Tim Terlatih",
    description: "Operator bersertifikat yang paham cara merawat semua jenis pakaian.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] max-w-md shadow-2xl">
              <img
                src="/images/hero.png"
                alt="Tim Londri Cuci Cuci sedang bekerja"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -right-6 lg:-right-12 bg-white p-5 rounded-2xl shadow-xl border border-border/50 max-w-[200px]"
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-primary">8+</span>
                <span className="text-sm text-muted-foreground">tahun</span>
              </div>
              <p className="text-xs text-foreground/70 leading-snug">
                Melayani pelanggan dengan dedikasi sejak 2017
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Best Local Service</p>
                <p className="text-xs text-muted-foreground">Jakarta 2024</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Heart className="w-4 h-4 fill-primary" />
              <span>Tentang Kami</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Lebih dari sekadar mencuci pakaian.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Kami percaya pakaian bersih bukan kemewahan — itu kebutuhan dasar yang seharusnya mudah, terjangkau, dan menyenangkan.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Sejak 2017, Londri Cuci Cuci sudah membantu ribuan keluarga, mahasiswa, dan profesional di Jabodetabek menghemat waktu — supaya mereka bisa fokus pada hal yang lebih penting dari sekadar lipat baju.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, index) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
