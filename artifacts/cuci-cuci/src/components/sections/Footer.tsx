import { Link } from "wouter";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const linkGroups = [
  {
    title: "Layanan",
    links: [
      { label: "Londri Kiloan Reguler", href: "#layanan" },
      { label: "Londri Kiloan Express", href: "#layanan" },
      { label: "Satuan Express", href: "#layanan" },
      { label: "Dry Cleaning Premium", href: "#layanan" },
      { label: "Layanan Korporat", href: "#kontak" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#tentang" },
      { label: "Cara Kerja", href: "#cara-kerja" },
      { label: "Harga", href: "#harga" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Hubungi Kami", href: "#kontak" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Garansi Layanan", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/">
              <div className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  L
                </div>
                <span className="font-bold text-xl tracking-tight">Londri Cuci Cuci</span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed text-sm max-w-sm">
              Layanan laundry kiloan dan premium yang menghargai pakaian Anda — dan waktu Anda. Melayani Jabodetabek sejak 2017.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +62 812-3456-7890
              </a>
              <a
                href="mailto:halo@cucicuci.id"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                halo@cucicuci.id
              </a>
              <p className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Jl. Sudirman No. 123, Jakarta Pusat 10220
              </p>
            </div>

            <div className="flex items-center gap-2">
              {[
                { Icon: FaWhatsapp, href: "https://wa.me/6281234567890", label: "WhatsApp" },
                { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold text-base mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-background/70 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {year} Londri Cuci Cuci. Hak cipta dilindungi.
          </p>
          <p className="text-sm text-background/60">
            Dibuat dengan rasa sayang untuk pakaian Anda.
          </p>
        </div>
      </div>
    </footer>
  );
}
