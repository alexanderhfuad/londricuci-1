import { motion } from "framer-motion";
import { MapPin, Truck } from "lucide-react";

const areas = [
  "Jakarta Pusat",
  "Jakarta Selatan",
  "Jakarta Barat",
  "Jakarta Timur",
  "Jakarta Utara",
  "Tangerang",
  "Tangerang Selatan",
  "Bekasi",
  "Depok",
  "BSD",
  "Bintaro",
  "Kelapa Gading",
];

export default function Coverage() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 via-white to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Truck className="w-4 h-4" />
              <span>Antar Jemput Gratis</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Layanan menjangkau seluruh Jabodetabek
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Pickup gratis untuk pesanan di atas Rp 50.000. Kurir kami akan datang sesuai jadwal yang Anda pilih lewat WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
