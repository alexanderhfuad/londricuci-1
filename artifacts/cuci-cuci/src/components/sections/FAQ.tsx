import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Bagaimana cara memesan layanan jemput-antar?",
    a: "Cukup chat kami di WhatsApp di nomor +62 812-3456-7890. Sebutkan alamat dan estimasi berat cucian, kurir kami akan datang sesuai jadwal yang Anda pilih. Tidak perlu download aplikasi — semua via WhatsApp.",
  },
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Layanan reguler selesai dalam 2x24 jam, layanan express selesai dalam 24 jam (dijamin atau gratis). Untuk dry cleaning premium butuh 3-4 hari karena prosesnya lebih detail.",
  },
  {
    q: "Apakah ada minimum order untuk antar jemput?",
    a: "Antar jemput GRATIS untuk pesanan minimal Rp 50.000. Di bawah itu kena ongkir Rp 10.000 (radius 5 km dari outlet). Untuk paket Premium, pickup dijadwalkan kapan saja tanpa biaya tambahan.",
  },
  {
    q: "Bagaimana kalau pakaian saya rusak atau hilang?",
    a: "Kami pegang janji: pakaian rusak akibat proses kami akan diganti sesuai nilai pasar (maksimal Rp 500.000 per item, atau klaim asuransi untuk item premium). Pakaian hilang sangat jarang terjadi karena kami pakai sistem barcode tracking, tapi kalau pun terjadi kami ganti penuh.",
  },
  {
    q: "Deterjen apa yang digunakan?",
    a: "Kami menggunakan deterjen berbahan eco-friendly merk Attack Plus dan Daia Lavender, plus pewangi tahan lama. Bagi yang punya kulit sensitif atau alergi, kami sediakan opsi deterjen hypoallergenic tanpa biaya tambahan — cukup sebutkan saat order.",
  },
  {
    q: "Apakah bisa cuci selimut, gorden, atau karpet?",
    a: "Bisa! Kami punya mesin khusus untuk barang berukuran besar. Harga selimut mulai Rp 25.000, gorden Rp 30.000/m, karpet Rp 25.000/m². Hubungi kami via WA untuk estimasi tepat berdasarkan dimensi.",
  },
  {
    q: "Bagaimana pembayarannya?",
    a: "Bayar setelah cucian selesai dan diantar. Kami terima cash, transfer bank (BCA, Mandiri, BRI, BNI), QRIS, GoPay, OVO, ShopeePay, dan DANA. Tidak perlu DP.",
  },
  {
    q: "Apakah bisa langganan bulanan untuk kantor atau kos?",
    a: "Tentu! Kami punya paket B2B khusus untuk perkantoran, kos, hostel, dan kafe dengan diskon mulai 15%. Hubungi tim kami untuk diskusi kebutuhan dan dapatkan penawaran custom.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Pertanyaan Umum</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Hal yang sering ditanyakan
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Belum nemu jawaban? Chat kami langsung di WhatsApp — tim kami siap bantu 7 hari seminggu.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline underline-offset-4"
            >
              Tanya kami di WhatsApp →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white rounded-2xl border border-border/60 px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
