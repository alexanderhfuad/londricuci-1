import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Tag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const plans = [
  {
    name: "Hemat",
    tagline: "Cocok untuk anak kos",
    price: "7.000",
    unit: "/kg",
    minimum: "Min. 3 kg",
    color: "from-sky-50 to-cyan-50",
    features: [
      "Cuci + kering + lipat",
      "Selesai 2x24 jam",
      "Pewangi standar",
      "Antar jemput Rp 5rb",
    ],
  },
  {
    name: "Express",
    tagline: "Pilihan paling populer",
    price: "12.000",
    unit: "/kg",
    minimum: "Tanpa minimum",
    color: "from-primary/10 to-secondary/30",
    features: [
      "Selesai 24 jam dijamin",
      "Setrika rapi siap pakai",
      "Pewangi premium tahan lama",
      "Antar jemput GRATIS",
      "Notifikasi WhatsApp",
    ],
    featured: true,
  },
  {
    name: "Premium",
    tagline: "Untuk pakaian berharga",
    price: "25.000",
    unit: "/pcs",
    minimum: "Per item",
    color: "from-violet-50 to-purple-50",
    features: [
      "Penanganan satu per satu",
      "Dry cleaning untuk bahan halus",
      "Garansi tidak susut & luntur",
      "Hanger + plastik premium",
      "Pickup VIP terjadwal",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Tag className="w-4 h-4" />
            <span>Harga Transparan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Harga jujur, tanpa biaya tersembunyi
          </h2>
          <p className="text-lg text-muted-foreground">
            Pilih paket yang sesuai. Bayar setelah cucian selesai dan diantar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.featured ? "md:-mt-4" : ""}
            >
              <Card
                className={`h-full p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.featured
                    ? "border-primary shadow-xl shadow-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/20"
                    : "border-border/60 hover:border-primary/40"
                }`}
              >
                {plan.featured && (
                  <div className="inline-flex items-center gap-1 mb-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Paling Banyak Dipilih
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.tagline}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-medium text-muted-foreground">Rp</span>
                  <span className="text-5xl font-bold text-foreground tracking-tight">{plan.price}</span>
                  <span className="text-lg text-muted-foreground ml-1">{plan.unit}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-6">{plan.minimum}</p>

                <Button
                  asChild
                  className={`w-full rounded-full gap-2 mb-6 ${
                    plan.featured
                      ? "shadow-lg shadow-primary/30"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                  }`}
                  variant={plan.featured ? "default" : "default"}
                >
                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                      `Halo Londri Cuci Cuci, saya mau pesan paket ${plan.name}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Pilih Paket {plan.name}
                  </a>
                </Button>

                <div className="border-t border-border/60 pt-6">
                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Yang kamu dapat
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            plan.featured ? "bg-primary text-white" : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Butuh paket khusus untuk kantor, kos, atau hotel?{" "}
          <a href="#kontak" className="text-primary font-semibold underline-offset-4 hover:underline">
            Hubungi kami untuk penawaran B2B
          </a>
        </motion.p>
      </div>
    </section>
  );
}
