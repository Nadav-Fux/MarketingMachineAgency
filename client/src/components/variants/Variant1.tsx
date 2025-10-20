import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Zap, Palette, Cog } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Variant1() {
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Scroll-triggered animations for cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotation: -5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "back.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 text-slate-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                מנתונים גולמיים
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  לצמיחה בר-קיימא
                </span>
              </h1>
              <p className="text-xl text-slate-300">
                אני בונה את המכונה שעובדת בשבילך.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0"
              >
                בוא נבנה את המכונה שלך
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Animated SVG */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-md"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>

                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.3" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.2" />
                <circle cx="200" cy="200" r="40" fill="none" stroke="#10b981" strokeWidth="2" />

                <path
                  d="M 200 80 Q 280 140 260 220 Q 240 280 140 260"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  opacity="0.6"
                />
                <path
                  d="M 200 80 Q 120 140 140 220 Q 160 280 260 260"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  opacity="0.4"
                />

                <circle cx="200" cy="80" r="6" fill="#10b981" />
                <circle cx="260" cy="220" r="5" fill="#06b6d4" opacity="0.7" />
                <circle cx="140" cy="260" r="5" fill="#10b981" opacity="0.7" />

                <style>{`
                  @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  svg circle:nth-child(5) {
                    transform-origin: 200px 200px;
                    animation: rotate 4s linear infinite;
                  }
                `}</style>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">המומחיות שמניעה את המכונה</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "המוח האנליטי", color: "emerald" },
              { icon: Zap, title: "הלב העסקי", color: "cyan" },
              { icon: Palette, title: "היד הקריאייטיבית", color: "emerald" },
              { icon: Cog, title: "המנגנון התפעולי", color: "cyan" },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-${item.color}-500/50 transition group`}
              >
                <item.icon className={`w-10 h-10 text-${item.color}-500 mb-4`} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">
                  תיאור קצר של המומחיות הזו בתחום השיווק והעסקים.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Magnetic Tiles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">הפעלת המכונה</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "ארכיטקטורה אסטרטגית",
              "ניהול קמפיינים",
              "קריאייטיב ותוכן",
              "ניתוח נתונים",
              "אופטימיזציה ROI",
              "ייעוץ אסטרטגי",
            ].map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index + 4] = el;
                }}
                className="p-6 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg hover:border-emerald-500/60 transition cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">בוא נבנה את המכונה שלך</h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0"
          >
            צור קשר עכשיו
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

