const features = [
  { icon: "👨‍🌾", title: "Familiar Face", desc: "People you already trust" },
  { icon: "⏰", title: "Reliable Delivery", desc: "Every morning before 7 AM" },
  { icon: "🏘️", title: "Hyperlocal", desc: "Accountability" },
  { icon: "🤝", title: "Community First", desc: "Strengthening local ties" },
];

export default function VendorSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left: Text + feature icons */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="mb-8">
              <h2 className="font-serif text-[2rem] lg:text-[2.25rem] font-semibold text-primary leading-[1.2] mb-4">
                Powered By Your<br />Trusted Newspaper Vendor
              </h2>
              <p className="text-[15px] text-muted leading-relaxed max-w-lg">
                Our local newspaper vendors already visit your neighborhood before sunrise. Now, they bring devotion to your doorstep.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-tan flex items-center justify-center text-2xl shrink-0 border border-gold-light/30">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-[15px] mb-0.5">{f.title}</div>
                    <div className="text-[13px] text-muted">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Vendor photo */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="rounded-[32px] overflow-hidden shadow-xl border-4 border-white aspect-[4/5] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1542856204-00101eb6def4?auto=format&fit=crop&w=800&q=90"
                alt="Trusted newspaper vendor at dawn"
                className="w-full h-full object-cover"
              />
              {/* warm tint */}
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
