import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Zap, Palette, Cog, Cpu, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Variant2() {
  const machineRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate machine parts on scroll
    const parts = machineRef.current?.querySelectorAll("[data-part]") as NodeListOf<Element> | undefined;
    if (parts) {
      parts.forEach((part: Element, index: number) => {
        gsap.fromTo(
          part,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out",
            scrollTrigger: {
              trigger: part,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
            delay: index * 0.1,
          }
        );
      });
    }

    // Animate service cards
    servicesRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, rotation: 5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 15%",
            scrub: 1,
          },
          delay: index * 0.05,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-slate-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                מנתונים גולמיים
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  לעתיד דיגיטלי
                </span>
              </h1>
              <p className="text-xl text-slate-300">
                אני בונה את המכונה שעובדת בשבילך.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              >
                בוא נבנה את המכונה שלך
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Hero Video Placeholder */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-purple-900 to-slate-900 rounded-lg border border-purple-500/30 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <ChevronRight className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-slate-400">וידאו: הצתת המכונה</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Machine Section */}
      <section ref={machineRef} className="py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">חלקי המכונה</h2>

          {/* Machine Visualization */}
          <div className="mb-20 p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg">
            <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="machineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>

              {/* Main connecting line */}
              <path
                d="M 50 150 Q 200 80 400 150 Q 600 220 750 150"
                fill="none"
                stroke="url(#machineGrad)"
                strokeWidth="3"
                opacity="0.6"
              />

              {/* Gear 1 - Brain */}
              <g data-part="gear1">
                <circle cx="100" cy="150" r="40" fill="none" stroke="#a855f7" strokeWidth="2" />
                <circle cx="100" cy="150" r="25" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
                <text x="100" y="155" textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold">
                  מוח
                </text>
              </g>

              {/* Gear 2 - Heart */}
              <g data-part="gear2">
                <circle cx="300" cy="100" r="35" fill="none" stroke="#ec4899" strokeWidth="2" />
                <circle cx="300" cy="100" r="22" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.5" />
                <text x="300" y="105" textAnchor="middle" fill="#ec4899" fontSize="12" fontWeight="bold">
                  לב
                </text>
              </g>

              {/* Gear 3 - Creative */}
              <g data-part="gear3">
                <circle cx="500" cy="180" r="38" fill="none" stroke="#a855f7" strokeWidth="2" />
                <circle cx="500" cy="180" r="24" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
                <text x="500" y="185" textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold">
                  יד
                </text>
              </g>

              {/* Gear 4 - Operator */}
              <g data-part="gear4">
                <circle cx="700" cy="150" r="35" fill="none" stroke="#ec4899" strokeWidth="2" />
                <circle cx="700" cy="150" r="22" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.5" />
                <text x="700" y="155" textAnchor="middle" fill="#ec4899" fontSize="12" fontWeight="bold">
                  מנוע
                </text>
              </g>

              <style>{`
                @keyframes rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                g[data-part="gear1"] {
                  transform-origin: 100px 150px;
                  animation: rotate 4s linear infinite;
                }
                g[data-part="gear3"] {
                  transform-origin: 500px 180px;
                  animation: rotate 3s linear infinite reverse;
                }
              `}</style>
            </svg>
          </div>

          {/* Machine Parts as Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, title: "המוח האנליטי", color: "purple" },
              { icon: Zap, title: "הלב העסקי", color: "pink" },
              { icon: Palette, title: "היד הקריאייטיבית", color: "purple" },
              { icon: Cog, title: "המנגנון התפעולי", color: "pink" },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) servicesRef.current[index] = el;
                }}
                className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-${item.color}-500/30 rounded-lg hover:border-${item.color}-500/60 transition group`}
              >
                <item.icon className={`w-10 h-10 text-${item.color}-500 mb-4 group-hover:scale-110 transition`} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">
                  חלק חיוני של המכונה שמניע את הצמיחה שלך.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Hexagonal Grid Style */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">הפעלת המכונה</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "ארכיטקטורה אסטרטגית", desc: "תוכנית עסקית מדויקת" },
              { icon: TrendingUp, title: "ניהול קמפיינים", desc: "קמפיינים רב-ערוציים" },
              { icon: Palette, title: "קריאייטיב ותוכן", desc: "תוכן ששוברים רעש" },
              { icon: Cpu, title: "ניתוח נתונים", desc: "תובנות עמוקות" },
              { icon: Zap, title: "אופטימיזציה ROI", desc: "תוצאות מדידות" },
              { icon: Cog, title: "ייעוץ אסטרטגי", desc: "הנחיה מקצועית" },
            ].map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) servicesRef.current[index + 4] = el;
                }}
                className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg hover:border-purple-500/60 transition cursor-pointer group"
              >
                <service.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">בוא נבנה את המכונה שלך</h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
          >
            צור קשר עכשיו
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

