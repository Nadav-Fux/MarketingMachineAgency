import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Zap, Palette, Cog, Cpu, BarChart3 } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Variant3() {
  const expertiseRef = useScrollAnimation({ type: "slideIn", stagger: 0.1 });
  const servicesRef = useScrollAnimation({ type: "scaleIn", stagger: 0.08 });

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

            {/* Hero Video Component */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <HeroVideo colorScheme="blue" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">המומחיות שמניעה את המכונה</h2>

          <div ref={expertiseRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, title: "המוח האנליטי", color: "blue" },
              { icon: Zap, title: "הלב העסקי", color: "cyan" },
              { icon: Palette, title: "היד הקריאייטיבית", color: "blue" },
              { icon: BarChart3, title: "המנגנון התפעולי", color: "cyan" },
            ].map((item, index) => (
              <div
                key={index}
                data-animate="true"
                className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-lg hover:border-blue-500/60 transition group"
              >
                <item.icon className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">
                  תיאור קצר של המומחיות הזו בתחום השיווק והעסקים.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">הפעלת המכונה - שלב אחר שלב</h2>

          <div className="relative">
            <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 transform translate-x-1/2"></div>

            <div ref={servicesRef} className="space-y-12">
              {[
                { num: 1, title: "ארכיטקטורה אסטרטגית", desc: "בניית תוכנית עסקית מדויקת" },
                { num: 2, title: "ניהול קמפיינים", desc: "הפעלת קמפיינים רב-ערוציים" },
                { num: 3, title: "קריאייטיב ותוכן", desc: "יצירת תוכן ששוברים רעש" },
                { num: 4, title: "ניתוח נתונים", desc: "חילוץ תובנות עמוקות" },
                { num: 5, title: "אופטימיזציה ROI", desc: "הגדלת תוצאות מדידות" },
                { num: 6, title: "ייעוץ אסטרטגי", desc: "הנחיה מקצועית מתמשכת" },
              ].map((item, index) => (
                <div key={index} data-animate="true" className="relative">
                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold">
                        {item.num}
                      </div>
                    </div>
                    <div className="flex-1 pt-2 pb-8 border-l-2 border-blue-500/30 pl-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

