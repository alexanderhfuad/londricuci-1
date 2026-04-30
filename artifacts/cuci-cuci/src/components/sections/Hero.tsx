import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Cucian bersih, hidup tenang</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
              Pakaian Wangi Tanpa <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">Keluar Rumah</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Serahkan urusan cuci baju kepada kami. Layanan laundry kiloan dan premium terpercaya di Jakarta dengan layanan antar-jemput gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="rounded-full text-base gap-2 shadow-xl shadow-primary/20 h-14 px-8 hover:-translate-y-1 transition-transform">
                <a href="https://wa.me/6281234567890?text=Halo%20Londri%20Cuci%20Cuci,%20saya%20mau%20pesan%20laundry%20jemput!" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-5 h-5" />
                  Pesan Antar Jemput
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full text-base gap-2 h-14 px-8 hover:-translate-y-1 transition-transform bg-white/50 backdrop-blur-sm">
                <a href="#layanan">
                  Lihat Layanan <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-secondary/50 flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=transparent`} alt="Customer" className="w-full h-full" />
                  </div>
                ))}
              </div>
              <p>Dipercaya oleh <span className="text-foreground font-bold">1000+</span> pelanggan</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] max-w-[600px] shadow-2xl">
              <img 
                src="/images/hero.png" 
                alt="Tumpukan pakaian bersih dan rapi" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Selesai 24 Jam</p>
                <p className="text-xs text-muted-foreground">Untuk layanan express</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
