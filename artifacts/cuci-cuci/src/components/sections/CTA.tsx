import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-primary via-cyan-600 to-primary p-12 md:p-20 overflow-hidden text-center"
        >
          {/* Decorative bubbles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { size: 120, top: "10%", left: "5%", delay: 0 },
              { size: 60, top: "60%", left: "12%", delay: 1 },
              { size: 80, top: "20%", right: "10%", delay: 0.5 },
              { size: 140, top: "55%", right: "5%", delay: 1.5 },
            ].map((b, i) => (
              <motion.div
                key={i}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6 + i, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: b.size,
                  height: b.size,
                  top: b.top,
                  left: b.left,
                  right: b.right,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Cucian numpuk? <br className="hidden md:block" />
              Tinggal chat, kami beresin.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Diskon 20% untuk order pertama. Antar jemput gratis se-Jabodetabek. Tanpa download aplikasi, tanpa registrasi ribet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button
                size="lg"
                asChild
                className="rounded-full text-base gap-2 h-14 px-8 bg-white text-primary hover:bg-white/95 hover:-translate-y-1 transition-transform shadow-2xl"
              >
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Cuci%20Cuci,%20saya%20mau%20pakai%20diskon%2020%25%20order%20pertama!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="rounded-full text-base gap-2 h-14 px-8 bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-transform"
              >
                <a href="#harga">
                  Lihat Harga
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-white/70 mt-8"
            >
              Tidak perlu kartu kredit. Bayar setelah cucian diantar.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
