import { motion } from "framer-motion";
import { Droplets, Clock, MapPin, Star } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Kami Jemput",
      description: "Hubungi via WhatsApp, kurir kami akan mengambil cucian kotor langsung di depan pintu Anda."
    },
    {
      icon: <Droplets className="w-6 h-6 text-primary" />,
      title: "Kami Cuci",
      description: "Pakaian dicuci dengan deterjen premium, dipisahkan sesuai jenis, dan disetrika hingga rapi."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Kami Antar",
      description: "Pakaian bersih, wangi, dan rapi siap diantar kembali ke tempat Anda. Siap dipakai!"
    }
  ];

  return (
    <section id="cara-kerja" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Jemput, Cuci, Antar — Beres.</h2>
          <p className="text-lg text-muted-foreground">
            Tidak perlu repot keluar rumah. Nikmati layanan laundry yang praktis dalam 3 langkah mudah.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-muted -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white border-4 border-muted flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4 mx-auto text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
