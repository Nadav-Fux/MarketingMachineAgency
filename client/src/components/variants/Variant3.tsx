import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Zap, Palette, Cog, Cpu, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Variant3() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Scroll-reveal animations for cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50, rotation: -2 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            end: "top 25%",
            scrub: 1,
          },
          delay: index * 0.1,
        }
      );

      // Add border animation
      const border = card.querySelector("[data-border]");
      if (border) {
        gsap.fromTo(
          border,
          { strokeDashoffset: 1000 },
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 text-slate-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                מנתונים גולמיים
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  לחדשנות טכנולוגית
                </span>
              </h1>
              <p className="text-xl text-slate-300">
                אני בונה את המכונה שעובדת בשבילך.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
              >
                בוא נבנה את המכונה שלך
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Hero Video Placeholder */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-blue-900 to-slate-900 rounded-lg border border-blue-500/30 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <ChevronRight className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-slate-400">וידאו: הצתת המכונה</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section with Line Drawing */}
      <section className="py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">המומחיות שמניעה את המכונה</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, title: "המוח האנליטי", color: "blue" },
              { icon: Zap, title: "הלב העסקי", color: "cyan" },
              { icon: Palette, title: "היד הקריאייטיבית", color: "blue" },
              { icon: Cog, title: "המנגנון התפעולי", color: "cyan" },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-${item.color}-500/30 rounded-lg hover:border-${item.color}-500/60 transition group relative`}
              >
                <svg className="absolute inset-0 w-full h-full rounded-lg pointer-events-none" style={{ overflow: "visible" }}>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke={item.color === "blue" ? "#3b82f6" : "#06b6d4"}
                    strokeWidth="2"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    data-border="true"
                    rx="8"
                  />
                </svg>
                <item.icon className={`w-10 h-10 text-${item.color}-500 mb-4 relative z-10`} />
                <h3 className="text-lg font-bold mb-2 relative z-10">{item.title}</h3>
                <p className="text-slate-400 text-sm relative z-10">
                  תיאור קצר של המומחיות הזו בתחום השיווק.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Scroll Reveal */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">הפעלת המכונה</h2>

          <div className="space-y-8">
            {[
              { icon: BarChart3, title: "ארכיטקטורה אסטרטגית", desc: "תוכנית עסקית מדויקת מבוססת נתונים" },
              { icon: TrendingUp, title: "ניהול קמפיינים", desc: "קמפיינים רב-ערוציים עם ROI מקסימלי" },
              { icon: Palette, title: "קריאייטיב ותוכן", desc: "תוכן ששוברים רעש ומדבר ללב" },
              { icon: Cpu, title: "ניתוח נתונים", desc: "תובנות עמוקות מנתונים גולמיים" },
              { icon: Zap, title: "אופטימיזציה ROI", desc: "תוצאות מדידות וברות קיימא" },
              { icon: Cog, title: "ייעוץ אסטרטגי", desc: "הנחיה מקצועית בכל שלב" },
            ].map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index + 4] = el;
                }}
                className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg hover:border-blue-500/60 transition group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <service.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-400">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">בוא נבנה את המכונה שלך</h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
          >
            צור קשר עכשיו
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

