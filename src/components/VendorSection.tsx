const features = [
  { icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, title: "Familiar Face", desc: "People you already trust" },
  { icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Reliable Delivery", desc: "Every morning before 7 AM" },
  { icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, title: "Hyperlocal", desc: "Accountability" },
  { icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, title: "Community First", desc: "Strengthening local ties" },
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
          <div className="lg:col-span-6 xl:col-span-5 flex justify-end">
            <div 
              className="overflow-hidden shadow-xl border-4 border-white aspect-[4/5] relative w-full max-w-[420px]"
              style={{ borderRadius: "100px 20px 100px 20px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vendor_1782817026999.png"
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
