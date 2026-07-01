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
      {/* Rich warm background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-[#F5EFE3] to-[#E8D5B0] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[480px] items-center">

          {/* ── Left: Copy ── */}
          <div className="py-16 lg:py-20 pr-6 lg:pr-12 z-10">
            <h1 className="font-serif text-[3.25rem] lg:text-[3.75rem] leading-[1.04] font-bold text-primary mb-5 tracking-[-0.02em]">
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
                <div key={f.label} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full border border-gold/40 bg-gradient-to-br from-gold-pale to-tan flex items-center justify-center text-gold-mid shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-0.5">
                    {f.icon}
                  </div>
                  <div className="text-[13px] text-dark/80 font-semibold leading-tight">
                    {f.label}<br /><span className="text-[12px] font-medium text-muted">{f.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="btn-gold text-[14px] shadow-[0_8px_32px_rgba(160,112,48,0.45)] hover:shadow-[0_12px_40px_rgba(160,112,48,0.55)]">
              <WaIcon />
              Start Your Daily Puja Plan
            </button>
          </div>

          {/* ── Right: Hero Image ── */}
          <div className="relative hidden lg:flex items-center justify-center py-8">
            {/* Decorative leaf/petal scatter — with floating animations */}
            <svg className="absolute top-2 left-2 w-9 h-9 text-gold opacity-80 rotate-[-25deg] z-10 animate-float" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C12 2 4 6 4 13C4 16.866 7.58172 20 12 20C16.4183 20 20 16.866 20 13C20 6 12 2 12 2ZM12 18C8.68629 18 6 15.7614 6 13C6 8.5 12 4.5 12 4.5C12 4.5 18 8.5 18 13C18 15.7614 15.3137 18 12 18Z"/></svg>
            <svg className="absolute top-20 -left-2 w-5 h-5 text-gold-mid opacity-60 rotate-[60deg] z-10 animate-float-slow" style={{animationDelay:'1.2s'}} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C12 2 4 6 4 13C4 16.866 7.58172 20 12 20C16.4183 20 20 16.866 20 13C20 6 12 2 12 2ZM12 18C8.68629 18 6 15.7614 6 13C6 8.5 12 4.5 12 4.5C12 4.5 18 8.5 18 13C18 15.7614 15.3137 18 12 18Z"/></svg>
            <svg className="absolute bottom-6 -right-2 w-10 h-10 text-gold opacity-70 rotate-[30deg] z-10 animate-float" style={{animationDelay:'0.8s'}} fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 3C17.5 3 10 3.5 6 8.5C3.33333 11.8333 3.33333 16.5 3.33333 16.5C3.33333 16.5 7.5 17 11.5 13.5C16.5 9.125 17.5 3 17.5 3ZM15.5 5.5C15.5 5.5 14.5 9.5 10.5 12.5C7.3 14.9 5.5 15.25 5.5 15.25C5.5 15.25 6 12.5 8 10C11.5 5.625 15.5 5.5 15.5 5.5Z"/></svg>
            <svg className="absolute top-1/3 -right-4 w-6 h-6 text-gold-mid opacity-70 rotate-[10deg] z-10 animate-float-fast" style={{animationDelay:'2s'}} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
            <svg className="absolute bottom-24 right-10 w-4 h-4 text-gold opacity-50 rotate-[-15deg] z-10 animate-float-slow" style={{animationDelay:'0.5s'}} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
            <svg className="absolute top-4 right-16 w-3 h-3 text-gold-mid opacity-60 z-10 animate-float" style={{animationDelay:'1.5s'}} fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>

            {/* Main image — leaf/petal shape crop */}
            <div
              className="relative w-[480px] h-[400px] overflow-hidden shadow-2xl border-8 border-white"
              style={{ borderRadius: "50% 20px 50% 20px" }}
            >
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