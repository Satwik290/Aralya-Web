import Image from "next/image";

const WaIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const features = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <polyline points="12 6 12 12 16 14" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    label: "Delivered",
    sub: "before 7 AM",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Trusted local",
    sub: "newspaper vendors",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="6" y="4" width="4" height="16" rx="1" strokeWidth={1.5} />
        <rect x="14" y="4" width="4" height="16" rx="1" strokeWidth={1.5} />
      </svg>
    ),
    label: "Pause or resume",
    sub: "anytime",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Warm gradient overlay on right side */}
      <div className="absolute inset-y-0 right-0 w-[52%] bg-gradient-to-l from-[#F0E5D0] via-[#F5EFE3] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[480px] items-center">

          {/* ── Left: Copy ── */}
          <div className="py-16 lg:py-20 pr-6 lg:pr-12 z-10">
            <h1 className="font-serif text-[3.25rem] lg:text-[3.6rem] leading-[1.08] font-bold text-primary mb-5">
              Preserve Your<br />Family&apos;s Morning<br />Rituals
            </h1>

            {/* Gold divider ornament */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[1.5px] bg-gold rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="w-2 h-[1.5px] bg-gold rounded-full" />
            </div>

            <p className="text-[1.05rem] text-dark/75 font-medium mb-1">
              Fresh flowers delivered before sunrise.
            </p>
            <p className="text-[1.05rem] text-gold-mid font-semibold mb-8">
              Every day. Without fail.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-5 mb-10">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-gold-light bg-gold-pale flex items-center justify-center text-gold shrink-0">
                    {f.icon}
                  </div>
                  <div className="text-[12px] text-dark/70 font-medium leading-tight">
                    {f.label}<br />{f.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="btn-gold text-[14px] shadow-lg">
              <WaIcon />
              Start Your Daily Puja Plan
            </button>
          </div>

          {/* ── Right: Hero Image ── */}
          <div className="relative hidden lg:flex items-center justify-center py-8">
            {/* Decorative leaf petals floating */}
            <div className="absolute top-8 left-0 text-3xl opacity-70 rotate-[-20deg]">🍂</div>
            <div className="absolute bottom-12 right-0 text-2xl opacity-60 rotate-[30deg]">🍃</div>
            <div className="absolute top-1/3 right-0 text-xl opacity-50 rotate-[10deg]">✨</div>

            {/* Main image — circular/oval crop */}
            <div className="relative w-[430px] h-[430px] rounded-full overflow-hidden shadow-2xl border-8 border-white/60">
              {/* Using a high-quality Unsplash puja flowers image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/puja-hero.png"
                alt="Vibrant puja flower arrangement with marigolds, roses and lit diyas"
                className="w-full h-full object-cover"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/15 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
