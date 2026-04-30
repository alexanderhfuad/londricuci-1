import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shirt, Zap, Sparkles, Wind } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Londri Kiloan Reguler",
    description:
      "Cuci, kering, lipat rapi. Pilihan ekonomis untuk kebutuhan harian keluarga. Selesai 2x24 jam.",
    price: "Rp 7.000",
    unit: "/kg",
    image: "/images/service-regular.png",
    features: ["Min. 3 kg", "Selesai 2 hari", "Wangi tahan lama"],
    accent: "from-sky-100 to-cyan-100",
  },
  {
    icon: Zap,
    title: "Londri Kiloan Express",
    description:
      "Buru-buru? Selesai dalam 24 jam, kualitas tetap maksimal. Cocok untuk pekerja sibuk.",
    price: "Rp 12.000",
    unit: "/kg",
    image: "/images/service-express.png",
    features: ["Selesai 24 jam", "Prioritas antrian", "Free pickup"],
    accent: "from-amber-100 to-orange-100",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Satuan Express",
    description:
      "Kemeja kantor, jas, gaun, atau seragam. Disetrika satu per satu dengan presisi.",
    price: "Rp 10.000",
    unit: "/pcs",
    image: "/images/service-satuan.png",
    features: ["Penanganan khusus", "Setrika presisi", "Hanger gratis"],
    accent: "from-emerald-100 to-teal-100",
  },
  {
    icon: Wind,
    title: "Dry Cleaning",
    description:
      "Untuk bahan halus seperti sutra, wol, atau bahan jas. Cuci kering tanpa air, aman untuk serat.",
    price: "Rp 25.000",
    unit: "/pcs",
    image: "/images/service-dryclean.png",
    features: ["Bahan premium", "Pelarut khusus", "Garansi tidak susut"],
    accent: "from-violet-100 to-purple-100",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Layanan Lengkap</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Pilih layanan sesuai kebutuhan Anda
          </h2>
          <p className="text-lg text-muted-foreground">
            Dari cucian harian sampai bahan paling halus — kami punya layanan yang pas untuk semua jenis pakaian Anda.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`group h-full overflow-hidden border-border/40 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 ${
                    service.featured ? "ring-2 ring-primary/30" : ""
                  }`}
                >
                  <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${service.accent}`}>
                    <img
                      src={service.image}
                      alt={`Ilustrasi layanan ${service.title}`}
                      className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    {service.featured && (
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Paling Populer
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>

                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-border/60 flex items-end justify-between">
                      <div>
                        <span className="text-2xl font-bold text-foreground">{service.price}</span>
                        <span className="text-sm text-muted-foreground">{service.unit}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                        className="text-primary hover:text-primary hover:bg-primary/10 rounded-full gap-1"
                      >
                        <a href="#harga" aria-label={`Pesan ${service.title}`}>
                          Pesan <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
