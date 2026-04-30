import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setIsExpanded(true), 1200);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-40 flex items-end gap-3"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="bg-white rounded-2xl shadow-2xl p-4 max-w-[260px] border border-border/60 relative"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full hover:bg-muted flex items-center justify-center"
                  aria-label="Tutup"
                >
                  <X className="w-3 h-3 text-muted-foreground" />
                </button>
                <p className="text-sm font-bold text-foreground mb-1 pr-4">Halo! Butuh bantuan?</p>
                <p className="text-xs text-muted-foreground mb-3">
                  Tim CS kami siap membantu pesanan Anda lewat WhatsApp.
                </p>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Cuci%20Cuci,%20saya%20butuh%20info%20layanan!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Mulai Chat
                </a>
                <span className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-border/60 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href="https://wa.me/6281234567890?text=Halo%20Cuci%20Cuci,%20saya%20mau%20pesan%20laundry!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-500/40 flex items-center justify-center relative"
          >
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
            <FaWhatsapp className="w-7 h-7 relative" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
