import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Zap, Palette, Cog, Cpu, BarChart3 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Variant4() {
  const timelineRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Staggered timeline animations
    timelineRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
          delay: index * 0.15,
        }
      );

      // Animate the dot
      const dot = item.querySelector("[data-dot]");
      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
            delay: index * 0.15,
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-red-950/20 to-slate-950 text-slate-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                מנתונים גולמיים
                <br />
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  לתוצאות בר-קיימא
                </span>
              </h1>
              <p className="text-xl text-slate-300">
                אני בונה את המכונה שעובדת בשבילך.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0"
              >
                בוא נבנה את המכונה שלך
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Hero Video Placeholder */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-red-900 to-slate-900 rounded-lg border border-red-500/30 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <ChevronRight className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-slate-400">וידאו: הצתת המכונה</p>
              </div>
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
              { icon: Cpu, title: "המוח האנליטי", color: "red" },
              { icon: Zap, title: "הלב העסקי", color: "pink" },
              { icon: Palette, title: "היד הקריאייטיבית", color: "red" },
              { icon: Cog, title: "המנגנון התפעולי", color: "pink" },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-${item.color}-500/30 rounded-lg hover:border-${item.color}-500/60 transition group`}
              >
                <item.icon className={`w-10 h-10 text-${item.color}-500 mb-4 group-hover:scale-110 transition`} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">
                  תיאור קצר של המומחיות הזו בתחום השיווק.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Interactive Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">הפעלת המכונה - ציר זמן</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-pink-500 opacity-30"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                { icon: BarChart3, title: "שלב 1: ניתוח", desc: "ניתוח עמוק של השוק, התחרות והלקוח" },
                { icon: TrendingUp, title: "שלב 2: אסטרטגיה", desc: "בניית תוכנית עסקית מדויקת" },
                { icon: Palette, title: "שלב 3: קריאייטיב", desc: "יצירת תוכן ששוברים רעש" },
                { icon: Cpu, title: "שלב 4: הפעלה", desc: "הפעלת קמפיינים רב-ערוציים" },
                { icon: Zap, title: "שלב 5: אופטימיזציה", desc: "שיפור רציף בהתאם לנתונים" },
                { icon: Cog, title: "שלב 6: צמיחה", desc: "תוצאות מדידות וברות קיימא" },
              ].map((service, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) timelineRef.current[index] = el;
                  }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div
                    data-dot="true"
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-4 border-slate-950 z-10"
                  ></div>

                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="p-6 bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg hover:border-red-500/60 transition group">
                      <service.icon className="w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition" />
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-slate-400 text-sm">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">בוא נבנה את המכונה שלך</h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0"
          >
            צור קשר עכשיו
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

