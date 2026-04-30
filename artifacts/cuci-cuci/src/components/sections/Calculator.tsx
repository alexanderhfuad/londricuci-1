import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Calculator as CalcIcon, Minus, Plus, Sparkles, Truck, Wind, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type ServiceKey = "reguler" | "express" | "satuan" | "dryclean";

const services: Record<
  ServiceKey,
  { label: string; price: number; unit: "kg" | "pcs"; min: number; eta: string; icon: typeof Sparkles }
> = {
  reguler: { label: "Kiloan Reguler", price: 7000, unit: "kg", min: 3, eta: "2x24 jam", icon: Sparkles },
  express: { label: "Kiloan Express", price: 12000, unit: "kg", min: 1, eta: "24 jam", icon: Zap },
  satuan: { label: "Satuan Express", price: 10000, unit: "pcs", min: 1, eta: "24 jam", icon: Sparkles },
  dryclean: { label: "Dry Cleaning", price: 25000, unit: "pcs", min: 1, eta: "3-4 hari", icon: Wind },
};

const PICKUP_FEE = 10000;
const FREE_PICKUP_THRESHOLD = 50000;
const PREMIUM_FRAGRANCE_FEE = 5000;

const formatRp = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

export default function Calculator() {
  const [service, setService] = useState<ServiceKey>("express");
  const [quantity, setQuantity] = useState(3);
  const [pickup, setPickup] = useState(true);
  const [premiumFragrance, setPremiumFragrance] = useState(false);

  const current = services[service];

  const breakdown = useMemo(() => {
    const safeQty = Math.max(current.min, quantity);
    const subtotal = safeQty * current.price;
    const fragranceFee = premiumFragrance ? PREMIUM_FRAGRANCE_FEE * safeQty : 0;
    const eligibleFreePickup = subtotal + fragranceFee >= FREE_PICKUP_THRESHOLD;
    const pickupFee = pickup ? (eligibleFreePickup ? 0 : PICKUP_FEE) : 0;
    const total = subtotal + fragranceFee + pickupFee;
    return { safeQty, subtotal, fragranceFee, pickupFee, total, eligibleFreePickup };
  }, [service, quantity, pickup, premiumFragrance, current.min, current.price]);

  const message = useMemo(() => {
    const lines = [
      "Halo Londri Cuci Cuci, saya mau pesan:",
      "",
      `• Layanan: ${current.label}`,
      `• Jumlah: ${breakdown.safeQty} ${current.unit}`,
      `• Estimasi selesai: ${current.eta}`,
      "",
      "Rincian biaya:",
      `- Subtotal: ${formatRp(breakdown.subtotal)}`,
    ];
    if (breakdown.fragranceFee > 0) {
      lines.push(`- Pewangi premium: ${formatRp(breakdown.fragranceFee)}`);
    }
    if (pickup) {
      lines.push(
        breakdown.pickupFee === 0
          ? "- Antar jemput: GRATIS"
          : `- Antar jemput: ${formatRp(breakdown.pickupFee)}`,
      );
    }
    lines.push(`- Total estimasi: ${formatRp(breakdown.total)}`);
    lines.push("", "Mohon konfirmasi jadwal pickupnya. Terima kasih!");
    return lines.join("\n");
  }, [breakdown, current, pickup]);

  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;

  return (
    <section id="kalkulator" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <CalcIcon className="w-4 h-4" />
            <span>Estimasi Cepat</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Hitung biaya cucian dalam 10 detik
          </h2>
          <p className="text-lg text-muted-foreground">
            Pilih layanan, masukkan jumlahnya, langsung dapat estimasi total. Tinggal kirim ke WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-6 md:p-10 border-border/60 shadow-2xl shadow-primary/5 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-3 block">
                    1. Pilih jenis layanan
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {(Object.keys(services) as ServiceKey[]).map((key) => {
                      const s = services[key];
                      const Icon = s.icon;
                      const active = service === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            setService(key);
                            setQuantity(Math.max(s.min, quantity));
                          }}
                          className={`group text-left p-4 rounded-2xl border-2 transition-all ${
                            active
                              ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                              : "border-border/60 bg-white hover:border-primary/40"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                                active ? "bg-primary text-white" : "bg-primary/10 text-primary"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            {active && (
                              <span className="text-xs font-bold text-primary">Dipilih</span>
                            )}
                          </div>
                          <p className="font-semibold text-sm text-foreground mb-0.5">{s.label}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatRp(s.price)}/{s.unit} · {s.eta}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-3 block">
                    2. Jumlah ({current.unit === "kg" ? "berat dalam kg" : "potong pakaian"})
                  </Label>
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity((q) => Math.max(current.min, q - 1))}
                      className="rounded-full h-12 w-12 shrink-0"
                      aria-label="Kurangi"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        type="number"
                        min={current.min}
                        value={quantity}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10);
                          setQuantity(Number.isNaN(v) ? current.min : v);
                        }}
                        className="h-14 text-center text-2xl font-bold rounded-2xl border-2"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
                        {current.unit}
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="rounded-full h-12 w-12 shrink-0"
                      aria-label="Tambah"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-2 px-1">
                    <p className="text-xs text-muted-foreground">
                      Minimum: {current.min} {current.unit}
                    </p>
                    <div className="flex gap-2">
                      {[3, 5, 10].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setQuantity(Math.max(current.min, preset))}
                          className="text-xs px-2.5 py-1 rounded-full bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground font-medium transition-colors"
                        >
                          {preset} {current.unit}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-3 block">
                    3. Tambahan (opsional)
                  </Label>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-border/60 bg-white hover:border-primary/30 cursor-pointer transition-colors">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Truck className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-foreground">Antar Jemput</p>
                          <p className="text-xs text-muted-foreground">
                            Gratis untuk order ≥ {formatRp(FREE_PICKUP_THRESHOLD)}
                          </p>
                        </div>
                      </div>
                      <Switch checked={pickup} onCheckedChange={setPickup} />
                    </label>
                    <label className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-border/60 bg-white hover:border-primary/30 cursor-pointer transition-colors">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-secondary/40 flex items-center justify-center shrink-0">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-foreground">
                            Pewangi Premium Tahan 2 Minggu
                          </p>
                          <p className="text-xs text-muted-foreground">
                            +{formatRp(PREMIUM_FRAGRANCE_FEE)}/{current.unit}
                          </p>
                        </div>
                      </div>
                      <Switch checked={premiumFragrance} onCheckedChange={setPremiumFragrance} />
                    </label>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-primary via-cyan-600 to-primary p-6 md:p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />

                  <div className="relative">
                    <p className="text-xs uppercase tracking-wider font-semibold text-white/70 mb-1">
                      Estimasi Total
                    </p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={breakdown.total}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-1"
                      >
                        {formatRp(breakdown.total)}
                      </motion.div>
                    </AnimatePresence>
                    <p className="text-sm text-white/80">
                      Selesai dalam {current.eta}
                    </p>

                    <div className="my-6 h-px bg-white/20" />

                    <ul className="space-y-2.5 text-sm mb-6">
                      <li className="flex items-center justify-between gap-4">
                        <span className="text-white/80">
                          {current.label} × {breakdown.safeQty} {current.unit}
                        </span>
                        <span className="font-semibold tabular-nums">
                          {formatRp(breakdown.subtotal)}
                        </span>
                      </li>
                      {breakdown.fragranceFee > 0 && (
                        <li className="flex items-center justify-between gap-4">
                          <span className="text-white/80">Pewangi premium</span>
                          <span className="font-semibold tabular-nums">
                            {formatRp(breakdown.fragranceFee)}
                          </span>
                        </li>
                      )}
                      {pickup && (
                        <li className="flex items-center justify-between gap-4">
                          <span className="text-white/80">Antar jemput</span>
                          <span className="font-semibold tabular-nums">
                            {breakdown.pickupFee === 0 ? "GRATIS" : formatRp(breakdown.pickupFee)}
                          </span>
                        </li>
                      )}
                    </ul>

                    {pickup && !breakdown.eligibleFreePickup && (
                      <div className="text-xs bg-white/10 rounded-xl p-3 mb-4">
                        Tambah {formatRp(FREE_PICKUP_THRESHOLD - breakdown.subtotal - breakdown.fragranceFee)}{" "}
                        lagi untuk dapat antar jemput GRATIS.
                      </div>
                    )}

                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-full gap-2 h-13 bg-white text-primary hover:bg-white/95 shadow-xl"
                    >
                      <a href={waLink} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="w-5 h-5" />
                        Pesan via WhatsApp
                      </a>
                    </Button>
                    <p className="text-xs text-white/70 text-center mt-3">
                      Bayar setelah cucian diantar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
