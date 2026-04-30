import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rina Sulistiani",
    role: "Karyawan Swasta, Sudirman",
    quote:
      "Sejak pakai Cuci Cuci, weekend saya jadi bebas. Pickup tepat waktu, hasilnya rapi banget — kemeja kantor saya kayak baru lagi tiap minggu.",
    rating: 5,
    avatar: "RS",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Bagas Pramudya",
    role: "Mahasiswa, Depok",
    quote:
      "Anak kos wajib coba. Harganya masuk akal banget, wanginya bikin nagih. Yang paling enak: bisa request ambil kapan aja lewat WA.",
    rating: 5,
    avatar: "BP",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Diah Kusuma",
    role: "Ibu Rumah Tangga, Kelapa Gading",
    quote:
      "Saya pakai paket Premium untuk batik dan baju anak. Belum pernah rusak, belum pernah luntur. Pelayanannya juga ramah, kayak punya tukang cuci pribadi.",
    rating: 5,
    avatar: "DK",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Andre Wijaya",
    role: "Owner Kafe, Senopati",
    quote:
      "Kami langganan untuk seragam barista dan taplak meja. Selalu on time, packagingnya rapi, dan invoicenya jelas. Sangat profesional.",
    rating: 5,
    avatar: "AW",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Maya Anindita",
    role: "Content Creator, Kemang",
    quote:
      "Saya sering harus packing cepat untuk shooting. Pakai Express service mereka 24 jam beneran. Lifesaver banget!",
    rating: 5,
    avatar: "MA",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Reza Kurnianto",
    role: "Konsultan, BSD",
    quote:
      "Suit saya pernah kena saus, panik banget. Bawa ke Cuci Cuci untuk dry cleaning, bersih total. Harganya jujur, hasilnya jempolan.",
    rating: 5,
    avatar: "RK",
    color: "bg-teal-100 text-teal-700",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Star className="w-4 h-4 fill-primary" />
            <span>4.9/5 dari 1.200+ ulasan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Cerita pelanggan setia kami
          </h2>
          <p className="text-lg text-muted-foreground">
            Ribuan keluarga, mahasiswa, dan profesional sudah pindah ke Cuci Cuci. Ini cerita mereka.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Card className="h-full p-6 border-border/40 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 bg-white relative overflow-hidden group">
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
                <div className="flex items-center gap-1 mb-4 relative">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 relative">"{t.quote}"</p>
                <div className="flex items-center gap-3 relative">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
