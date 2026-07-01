"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-3 mb-2">
    <svg className="w-4 h-4 text-gold opacity-70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10 6 6 8 2 8c2 3 5 5 10 5s8-2 10-5c-4 0-8-2-10-6z" />
      <path d="M12 22c0-4-2-7-6-9 1 4 3 7 6 9z" />
      <path d="M12 22c0-4 2-7 6-9-1 4-3 7-6 9z" />
    </svg>
    <h2 className="font-serif text-[1.9rem] font-semibold text-primary tracking-[-0.01em]">
      {children}
    </h2>
    <svg className="w-4 h-4 text-gold opacity-70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10 6 6 8 2 8c2 3 5 5 10 5s8-2 10-5c-4 0-8-2-10-6z" />
      <path d="M12 22c0-4-2-7-6-9 1 4 3 7 6 9z" />
      <path d="M12 22c0-4 2-7 6-9-1 4-3 7-6 9z" />
    </svg>
  </div>
);

function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`phone-shadow ${className}`}>
      <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[44px] p-[5px] w-[212px]">
        <div className="bg-black rounded-[39px] overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-2.5 pb-1 bg-[#075E54] text-white">
            <span className="text-[10px] font-semibold tracking-wide">8:41</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h2V10H2v12zm5 0h2V6H7v16zm5 0h2V2h-2v20zm5 0h2V14h-2v8zm5 0h2v-6h-2v6z"/></svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l9-9-1.4-1.4L12 18.2 4.4 10.6 3 12z"/></svg>
              <div className="w-5 h-2.5 rounded-[2px] border border-white/80 relative ml-0.5"><div className="absolute inset-[1px] right-[3px] bg-white rounded-[1px]" /></div>
            </div>
          </div>
          <div className="overflow-hidden bg-[#E5DDD5]" style={{ height: 390 }}>
            {children}
          </div>
          <div className="bg-white/95 flex justify-center py-2">
            <div className="w-24 h-1 bg-black/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WaHeader({ name = "Aralya" }: { name?: string }) {
  return (
    <div className="bg-[#075E54] px-3 py-2.5 flex items-center gap-2.5 shadow-md relative z-10">
      <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white text-[10px] font-bold shrink-0">A</div>
      <div>
        <div className="text-white text-[11px] font-semibold">{name}</div>
        <div className="text-white/70 text-[9px]">online</div>
      </div>
      <div className="ml-auto flex gap-3 text-white/80">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
      </div>
    </div>
  );
}

function WaInput() {
  return (
    <div className="bg-[#f0f0f0] px-2 py-2 flex items-center gap-2 border-t border-gray-200 mt-auto">
      <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={1.5}/><path d="M8 12s1 2 4 2 4-2 4-2" strokeWidth={1.5} strokeLinecap="round"/><line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2} strokeLinecap="round"/><line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2} strokeLinecap="round"/></svg>
      <div className="bg-white flex-1 rounded-full px-3 py-1.5 text-[9px] text-gray-400">Message</div>
      <div className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center shrink-0">
        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2zm0 2a8 8 0 1 0 0 16A8 8 0 0 0 12 4zm-1 8H7l5-5 5 5h-4v4h-2v-4z"/></svg>
      </div>
    </div>
  );
}

const msgVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95, transformOrigin: "bottom left" },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

const userMsgVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95, transformOrigin: "bottom right" },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

export default function WhatsAppShowcase() {
  // Animation state controls the sequence across all 3 phones
  // step 0: nothing, step 1: phone1 msg1, step 2: phone1 user reply, step 3: phone2 catalog, etc.
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Loop the animation sequence
      while (true) {
        setStep(0);
        await new Promise(r => setTimeout(r, 1000));
        setStep(1); // Phone 1: Bot Welcome
        await new Promise(r => setTimeout(r, 1500));
        setStep(2); // Phone 1: User says Hi
        await new Promise(r => setTimeout(r, 1500));
        setStep(3); // Phone 2: Bot shows catalog
        await new Promise(r => setTimeout(r, 2000));
        setStep(4); // Phone 2: User selects Lotus
        await new Promise(r => setTimeout(r, 1500));
        setStep(5); // Phone 3: Payment Success
        await new Promise(r => setTimeout(r, 5000)); // Hold at the end
      }
    };
    sequence();
  }, []);

  const products = [
    { src: "/puja-hero.png", label: "Flowers" }, // Use our local HD image!
    { src: "/step_2_1782817061255.png", label: "Puja Essentials" },
    { src: "/step_3_1782817076704.png", label: "Festive Packs" },
    { src: "/family_puja_1782817017087.png", label: "Daily Packs" },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading>Experience our Live WhatsApp Service</SectionHeading>
          <p className="text-[13.5px] text-muted mt-2 tracking-wide">Automated, smooth, and right from your phone.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          
          {/* ────────────────── PHONE 1 (Greeting) ────────────────── */}
          <PhoneFrame>
            <div className="flex flex-col h-full">
              <WaHeader />
              <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden relative">
                <div className="text-center text-[8px] text-gray-500 my-1 bg-white/60 rounded-full px-3 py-0.5 self-center">Today</div>
                
                <AnimatePresence>
                  {step >= 1 && (
                    <motion.div variants={msgVariants} initial="hidden" animate="visible" className="bg-white rounded-lg rounded-tl-none p-2.5 shadow-sm text-[8.5px] text-gray-700 leading-[1.5] max-w-[90%]">
                      <p className="font-semibold text-[8.5px] text-gray-800 mb-1">Welcome to Aralya! 🌸</p>
                      <p>Discover farm-fresh flowers delivered every morning to your doorstep.</p>
                      <p className="mt-1">Choose an option:</p>
                      <ol className="list-decimal ml-3 mt-1 space-y-0.5">
                        <li>Browse Products</li>
                        <li>Start Subscription</li>
                        <li>Manage Account</li>
                      </ol>
                      <button className="mt-2 pt-1.5 border-t border-gray-100 w-full text-[#1990B8] text-center text-[8px] flex items-center justify-center gap-1">
                        <span>≡</span> Reply
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {step >= 2 && (
                    <motion.div variants={userMsgVariants} initial="hidden" animate="visible" className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-2 shadow-sm text-[8.5px] self-end max-w-[80%] mt-2">
                      <p>2. Start Subscription</p>
                      <div className="text-[7px] text-gray-400 text-right mt-1">08:42 ✓✓</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <WaInput />
            </div>
          </PhoneFrame>

          {/* ────────────────── PHONE 2 (Catalog) ────────────────── */}
          <PhoneFrame className="md:-mt-2">
            <div className="flex flex-col h-full">
              <WaHeader />
              <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden relative">
                <AnimatePresence>
                  {step >= 3 && (
                    <motion.div variants={msgVariants} initial="hidden" animate="visible" className="bg-white rounded-lg rounded-tl-none p-2 shadow-sm max-w-[92%]">
                      <p className="text-[8.5px] text-gray-700 mb-2 px-1">Here are our subscription packs. Tap to select:</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {products.map((p) => (
                          <div key={p.label} className="rounded overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={p.src} alt={p.label} className="w-full aspect-square object-cover" />
                            <div className="text-[8px] text-center text-gray-700 py-0.5 font-medium">{p.label}</div>
                          </div>
                        ))}
                      </div>
                      <button className="mt-2 pt-1.5 border-t border-gray-100 w-full text-[#1990B8] text-center text-[8px] flex items-center justify-center gap-1">
                        <span>≡</span> Reply
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {step >= 4 && (
                    <motion.div variants={userMsgVariants} initial="hidden" animate="visible" className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-2 shadow-sm text-[8.5px] self-end max-w-[80%] mt-2">
                      <p>1. Daily Flowers (Lotus)</p>
                      <p className="text-gray-600 mt-0.5">₹449 / month</p>
                      <div className="text-[7px] text-gray-400 text-right mt-1">08:43 ✓✓</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <WaInput />
            </div>
          </PhoneFrame>

          {/* ────────────────── PHONE 3 (Success) ────────────────── */}
          <PhoneFrame>
            <div className="flex flex-col h-full">
              <WaHeader />
              <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden justify-center relative">
                <AnimatePresence>
                  {step >= 5 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md"
                    >
                      <div className="bg-[#e8f5e9] p-4 flex flex-col items-center">
                        <motion.div 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }} 
                          transition={{ delay: 0.3, type: "spring" }}
                          className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center mb-2"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                        <div className="text-[10px] font-semibold text-gray-700">Payment Successful</div>
                        <div className="text-[22px] font-bold text-gray-900 mt-1">₹449.00</div>
                        <div className="text-[8.5px] text-gray-500 mt-1">Your subscription is active!</div>
                      </div>
                      <div className="p-3 bg-white text-[8.5px] text-gray-700 space-y-1 border-t border-gray-100">
                        <div className="flex justify-between"><span className="text-gray-500">Subscription ID:</span><span className="font-medium">ARL-12345</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Product:</span><span className="font-medium">Lotus (Daily)</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Start Date:</span><span className="font-medium">Tomorrow, 6:00 AM</span></div>
                        <button className="w-full text-center text-[#1990B8] font-semibold mt-2 pt-2 border-t border-gray-100 transition-colors hover:text-[#128C7E]">
                          View Subscription
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <WaInput />
            </div>
          </PhoneFrame>

        </div>
      </div>
    </section>
  );
}