import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  phone: z.string().min(8, "Nomor HP tidak valid").regex(/^[0-9+\s-]+$/, "Hanya angka diperbolehkan"),
  email: z.string().email("Format email tidak valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type FormValues = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "halo@cucicuci.id",
    href: "mailto:halo@cucicuci.id",
  },
  {
    icon: MapPin,
    label: "Outlet Pusat",
    value: "Jl. Sudirman No. 123, Jakarta Pusat",
    href: "#",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Setiap hari, 08.00 – 20.00 WIB",
    href: "#",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    setTimeout(() => {
      toast({
        title: "Pesan terkirim!",
        description: "Tim kami akan menghubungi Anda dalam 1x24 jam.",
      });
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    }, 600);
    // eslint-disable-next-line no-console
    console.log("Contact submission:", data);
  };

  return (
    <section id="kontak" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Send className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Mau pesan, tanya, atau kerja sama?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tim kami siap membantu. Pilih cara paling nyaman untuk Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const isLink = info.href !== "#";
              const Wrapper = isLink ? "a" : "div";
              const wrapperProps = isLink
                ? {
                    href: info.href,
                    target: info.href.startsWith("http") ? "_blank" : undefined,
                    rel: "noopener noreferrer",
                  }
                : {};
              return (
                <Wrapper
                  key={info.label}
                  {...wrapperProps}
                  className={`flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-muted/30 transition-all ${
                    isLink ? "hover:border-primary/40 hover:bg-primary/5 cursor-pointer" : ""
                  }`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-foreground break-words">{info.value}</p>
                  </div>
                </Wrapper>
              );
            })}

            <div className="flex items-center gap-3 pt-2">
              <span className="text-sm text-muted-foreground">Ikuti kami:</span>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="p-6 md:p-8 border-border/60 shadow-xl shadow-primary/5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Lengkap</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Budi Santoso"
                              {...field}
                              className="rounded-xl h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nomor WhatsApp</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="0812-3456-7890"
                              {...field}
                              className="rounded-xl h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="budi@email.com"
                            {...field}
                            className="rounded-xl h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pesan</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Hai, saya ingin tahu lebih banyak tentang layanan..."
                            rows={5}
                            {...field}
                            className="rounded-xl resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitted}
                    className="w-full rounded-full gap-2 h-12 shadow-lg shadow-primary/20"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Pesan Terkirim
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
