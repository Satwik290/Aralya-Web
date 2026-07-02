"use client";

import React from "react";
import { motion } from "framer-motion";

const WaIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const plans = [
  {
    name: "Lotus Daily",
    price: "449",
    tagline: "Best for traditional daily prayers",
    features: [
      "Daily fresh Lotus & Marigold mix",
      "Delivered before 7:00 AM",
      "Pause or resume anytime",
      "Standard WhatsApp support",
    ],
    popular: false,
    color: "from-tan to-white",
  },
  {
    name: "Rose & Marigold",
    price: "549",
    tagline: "Vibrant colors to brighten your morning",
    features: [
      "Dutch Roses & Marigold garlands",
      "Delivered before 6:30 AM",
      "Pause or resume anytime",
      "Priority WhatsApp concierge",
      "Free festive flower upgrades",
    ],
    popular: true,
    color: "from-gold-pale/50 to-white",
  },
  {
    name: "Festive Premium",
    price: "649",
    tagline: "Rich varieties for festivals & home decor",
    features: [
      "Exotic blooms (Hibiscus, Jasmine, Roses)",
      "Delivered before 6:00 AM",
      "Pause or resume anytime",
      "Dedicated WhatsApp manager",
      "Custom leaves (Mango/Betel) included",
    ],
    popular: false,
    color: "from-tan to-white",
  },
];

export default function Pricing() {
  return (
    <section id="subscriptions" className="py-24 bg-cream relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold-pale/30 blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-mid bg-gold-pale/60 border border-gold-light/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Our Plans
          </span>
          <h2 className="font-serif text-[2.2rem] lg:text-[2.75rem] font-bold text-primary tracking-[-0.01em] mb-4">
            Select Your Daily Devotion
          </h2>
          <p className="text-[15px] text-muted max-w-lg mx-auto leading-relaxed">
            Choose a subscription plan tailored to your family's morning rituals. Delivered fresh every day, without fail.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className={`relative rounded-[32px] border flex flex-col justify-between transition-all duration-500 group ${
                plan.popular
                  ? "bg-gradient-to-b from-[#1E3A2F] to-[#12241d] text-white border-primary shadow-[0_20px_50px_rgba(30,58,47,0.25)] md:-translate-y-4"
                  : "bg-gradient-to-b from-white to-[#FAF6ED] text-dark border-gold-light/40 shadow-xl shadow-gold-pale/10 hover:shadow-2xl hover:shadow-gold/15"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-mid to-gold text-white text-[10px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full shadow-md z-20">
                  Most Popular
                </span>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className={`font-serif text-[1.45rem] font-bold ${plan.popular ? "text-gold-light" : "text-primary"} mb-1`}>
                  {plan.name}
                </h3>
                <p className={`text-[12px] ${plan.popular ? "text-white/60" : "text-muted"} mb-6 min-h-[36px]`}>
                  {plan.tagline}
                </p>

                {/* Price block */}
                <div className={`py-4 px-5 rounded-2xl border mb-8 flex items-baseline gap-1 ${
                  plan.popular 
                    ? "bg-white/5 border-white/10" 
                    : "bg-tan/40 border-gold-light/20"
                }`}>
                  <span className={`text-[2.2rem] font-serif font-bold ${plan.popular ? "text-white" : "text-primary"}`}>
                    ₹{plan.price}
                  </span>
                  <span className={`text-[13px] font-medium ${plan.popular ? "text-white/60" : "text-muted"}`}>
                    / month
                  </span>
                  <span className={`text-[11px] ml-auto font-medium ${plan.popular ? "text-gold-light/80" : "text-gold-mid"}`}>
                    ≈ ₹{Math.round(parseInt(plan.price) / 30)}/day
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-gold-light" : "text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-[13.5px] font-medium ${plan.popular ? "text-white/80" : "text-dark/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-8 pt-0 mt-8">
                <a
                  href={`https://wa.me/917900012345?text=Hi%20Aralya%2C%20I%20would%20like%20to%20subscribe%20to%20the%20${encodeURIComponent(plan.name)}%20plan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full justify-center gap-2.5 text-[13.5px] py-3.5 px-6 rounded-full inline-flex items-center font-bold tracking-wide transition-all duration-300 ${
                    plan.popular
                      ? "btn-gold shadow-[0_4px_20px_rgba(198,156,109,0.3)] hover:shadow-[0_8px_30px_rgba(198,156,109,0.5)]"
                      : "bg-primary text-white hover:bg-[#163020] shadow-md hover:shadow-lg shadow-primary/10"
                  }`}
                >
                  <WaIcon className={plan.popular ? "w-4 h-4 text-white" : "w-4 h-4 text-whatsapp"} />
                  Subscribe Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting FAQ note */}
        <div className="text-center mt-12 text-[12px] text-muted">
          Need a custom flower mix for your daily rituals? <a href="https://wa.me/917900012345" className="text-gold-mid font-semibold underline hover:text-primary">Chat with our flower concierge</a>.
        </div>
      </div>
    </section>
  );
}
