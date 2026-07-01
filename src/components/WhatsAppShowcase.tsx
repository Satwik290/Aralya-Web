"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────── Icons ─────────────── */
const WaLogo = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const TypingDots = () => (
  <div className="flex items-center gap-1 px-3 py-2">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full bg-white/50 block"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
      />
    ))}
  </div>
);

/* ─────────────── Chat message types ─────────────── */
type Message =
  | { id: number; role: "bot"; text: string; isTyping?: false }
  | { id: number; role: "bot"; isTyping: true; text?: never }
  | { id: number; role: "user"; text: string };

const FLOWS: Omit<Message, "id">[][] = [
  // Flow 0: Start my daily puja subscription
  [
    { role: "bot", text: "🌸 **Welcome to Aralya!**\n\nI'm your personal flower concierge. I help you set up fresh flower deliveries for your daily puja.\n\nWhat would you like to do today?" },
    { role: "user", text: "Start my daily puja subscription" },
    { role: "bot", text: "Sure! Here are our popular puja plans:\n\n**1. 🪷 Lotus Daily** – ₹449/month\n**2. 🌹 Rose & Marigold** – ₹549/month\n**3. 🌺 Festive Mix** – ₹649/month\n\nWhich one would you like?" },
    { role: "user", text: "1. Lotus Daily sounds perfect!" },
    { role: "bot", text: "Great choice! **Lotus Daily** it is. 🪷\n\nYour vendor will deliver fresh lotus, marigold & jasmine every morning before **6:30 AM**.\n\nShall I confirm your subscription for ₹449/month?" },
    { role: "user", text: "Yes, please confirm!" },
    { role: "bot", text: "✅ **Subscription Confirmed!**\n\n📦 Order ID: ARL-12345\n🌸 Plan: Lotus Daily\n💰 ₹449/month (≈ ₹15/day)\n🚀 First delivery: Tomorrow 6:00 AM\n\nYour morning rituals are in safe hands! 🙏" },
  ],
  // Flow 1: Pause delivery for tomorrow
  [
    { role: "bot", text: "🌸 **Welcome back!**\n\nI see your **Lotus Daily** subscription is active. How can I help you manage your delivery today?" },
    { role: "user", text: "Pause delivery for tomorrow" },
    { role: "bot", text: "Sure, I can help with that. ⏸️\n\nWould you like to pause the delivery scheduled for **tomorrow, 6:00 AM**?" },
    { role: "user", text: "Yes, pause tomorrow's delivery." },
    { role: "bot", text: "Understood! I have paused your delivery for tomorrow.\n\n📅 **Paused Date:** Tomorrow\n🔄 **Resumes:** The day after tomorrow\n\nNo charges will apply for tomorrow. Have a peaceful day! 🙏" }
  ],
  // Flow 2: Upgrade to Festive Mix
  [
    { role: "bot", text: "🌸 **Welcome back!**\n\nHow can I assist you with your flower subscription today?" },
    { role: "user", text: "Upgrade to Festive Mix" },
    { role: "bot", text: "Excellent choice! 🌺 The **Festive Mix** (₹649/month) includes special seasonal flowers, roses, and premium garlands for festivals.\n\nShall I upgrade your current plan from **Lotus Daily** (₹449/month)?" },
    { role: "user", text: "Yes, upgrade my plan." },
    { role: "bot", text: "Upgrade successful! 🎉\n\n🌸 **New Plan:** Festive Mix\n💰 **New Price:** ₹649/month\n✨ **Effective from:** Tomorrow morning\n\nEnjoy the premium blooms! 🌹" }
  ],
  // Flow 3: Track my order
  [
    { role: "bot", text: "🌸 **Welcome back!**\n\nI can help you track your morning delivery. What's on your mind?" },
    { role: "user", text: "Track my order" },
    { role: "bot", text: "Checking status... 📦\n\nYour local vendor **Ramesh** picked up your fresh batch of flowers at **5:15 AM**.\n\n📍 **Status:** Out for delivery\n🚚 **Expected Arrival:** 6:00 AM (in approx. 10 mins)" },
    { role: "user", text: "Awesome, thank you!" },
    { role: "bot", text: "You're very welcome! If you need anything else, just ask. Have a blessed morning! 🙏" }
  ]
];

/* ─────────────── Section heading ─────────────── */
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-3">
    <svg className="w-4 h-4 text-gold opacity-70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10 6 6 8 2 8c2 3 5 5 10 5s8-2 10-5c-4 0-8-2-10-6z" />
      <path d="M12 22c0-4-2-7-6-9 1 4 3 7 6 9z" />
      <path d="M12 22c0-4 2-7 6-9-1 4-3 7-6 9z" />
    </svg>
    <h2 className="font-serif text-[1.9rem] font-semibold text-primary tracking-[-0.01em]">
      {children}
    </h2>
  </div>
);

/* ─────────────── Markdown-ish formatter ─────────────── */
function formatText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Bold formatting
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const formatted = parts.map((part, j) =>
      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
    );
    return (
      <React.Fragment key={i}>
        {formatted}
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

/* ─────────────── Main component ─────────────── */
export default function WhatsAppShowcase() {
  const [activeFlowIndex, setActiveFlowIndex] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const msgSeqRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const prompts = [
    { icon: "🪷", text: "Start my daily puja subscription", index: 0 },
    { icon: "⏸️", text: "Pause delivery for tomorrow", index: 1 },
    { icon: "🌺", text: "Upgrade to Festive Mix", index: 2 },
    { icon: "📦", text: "Track my order", index: 3 },
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Load and play the active flow
  useEffect(() => {
    let cancelled = false;

    async function runFlow() {
      // Clear previous chat
      setMessages([]);
      setIsTyping(false);
      msgSeqRef.current = 0;
      await sleep(400);

      const targetFlow = FLOWS[activeFlowIndex];

      for (const rawMsg of targetFlow) {
        if (cancelled) break;

        if (rawMsg.role === "bot") {
          setIsTyping(true);
          // Adjust typing speed dynamically based on message length
          await sleep(Math.max(400, Math.min(1800, rawMsg.text!.length * 10)));
          if (cancelled) break;
          setIsTyping(false);
          await sleep(80);
        } else {
          await sleep(600);
        }

        if (cancelled) break;
        const id = msgSeqRef.current++;
        setMessages((prev) => [...prev, { id, ...rawMsg } as Message]);
        await sleep(1000);
      }
    }

    runFlow();

    return () => {
      cancelled = true;
    };
  }, [activeFlowIndex]);

  return (
    <section className="py-20 bg-cream relative">
      {/* Subtle radial glow behind section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ─── Left Column ─── */}
          <div>
            {/* Eyebrow label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gold-mid border border-gold-light/60 bg-gold-pale/60 rounded-full px-3 py-1">
                WhatsApp Bot
              </span>
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[11px] text-muted">Live</span>
            </div>

            <SectionHeading>Experience Our WhatsApp Service</SectionHeading>

            <p className="text-[15px] text-muted leading-relaxed mb-8 max-w-md">
              Tap any of the actions below to see how Aralya manages your daily subscription directly inside WhatsApp.
            </p>

            {/* Quick Prompts */}
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted/70 mb-3">Try asking about:</p>
            <div className="flex flex-col gap-2.5">
              {prompts.map((p) => (
                <button
                  key={p.text}
                  onClick={() => setActiveFlowIndex(p.index)}
                  className={`flex items-center gap-3 text-left px-4 py-3 rounded-2xl border text-[14px] font-medium transition-all duration-300 w-full group cursor-pointer ${
                    activeFlowIndex === p.index
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-white/70 text-dark/80 border-gold-light/50 hover:border-gold/60 hover:shadow-md hover:bg-white"
                  }`}
                >
                  <span className="text-lg leading-none">{p.icon}</span>
                  <span>{p.text}</span>
                  <svg 
                    className={`w-4 h-4 ml-auto transition-transform duration-300 ${
                      activeFlowIndex === p.index ? "translate-x-1 text-white" : "opacity-50 text-dark group-hover:translate-x-1"
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/917900012345"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-5 py-3 rounded-full shadow-lg shadow-green-900/20 transition-colors text-[14px] cursor-pointer"
            >
              <WaLogo />
              Chat with Aralya on WhatsApp
            </motion.a>
          </div>

          {/* ─── Right Column: Chat Window ─── */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-3 rounded-[36px] bg-primary/15 blur-xl pointer-events-none" />

            {/* Chat card */}
            <div className="relative bg-[#1E3A2F] rounded-[32px] overflow-hidden shadow-2xl flex flex-col" style={{ height: 540 }}>

              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#1a3328]">
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
                  <WaLogo />
                </div>
                <div>
                  <div className="text-white text-[14px] font-semibold leading-tight">Aralya</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-white/50 text-[11px]">online · WhatsApp Bot</span>
                  </div>
                </div>
                {/* Window chrome dots */}
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-white/10" />
                  <span className="w-3 h-3 rounded-full bg-white/10" />
                  <span className="w-3 h-3 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Messages area */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin"
                style={{ scrollbarWidth: "none" }}
              >
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "bot" && (
                        <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 mr-2 mt-1 shadow-sm">
                          <span className="text-white text-[9px] font-bold">A</span>
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-[1.55] ${
                          msg.role === "user"
                            ? "bg-[#25D366] text-white rounded-br-md"
                            : "bg-white/10 text-white/90 rounded-bl-md backdrop-blur-sm border border-white/8"
                        }`}
                      >
                        {formatText(msg.text)}
                        {msg.role === "user" && (
                          <div className="text-right text-[10px] text-white/60 mt-1">
                            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} ✓✓
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="flex justify-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 mr-2 mt-1">
                        <span className="text-white text-[9px] font-bold">A</span>
                      </div>
                      <div className="bg-white/10 rounded-2xl rounded-bl-md backdrop-blur-sm border border-white/8">
                        <TypingDots />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input bar */}
              <div className="px-4 py-3 bg-[#1a3328] border-t border-white/10">
                <div className="flex items-center gap-2 bg-white/8 rounded-full px-4 py-2.5 border border-white/12">
                  <input
                    type="text"
                    disabled
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent text-white/60 text-[13px] placeholder:text-white/30 outline-none cursor-default"
                  />
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/50">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                      <SendIcon />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-gold-light/40 flex items-center gap-2.5"
            >
              <span className="text-xl">🌸</span>
              <div>
                <div className="text-[11px] font-semibold text-primary leading-tight">Daily plan active</div>
                <div className="text-[10px] text-muted">Lotus · Delivery at 6:00 AM</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}