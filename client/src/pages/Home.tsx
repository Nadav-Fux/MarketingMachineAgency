import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, BarChart3, Zap, Grid3x3, Lightbulb, TrendingUp } from "lucide-react";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@shared/const";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col" dir="rtl">
      <Navigation />

      {/* Hero Section - Minimal Tech */}
      <section className="py-20 md:py-32 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-mono text-purple-700 font-semibold">// nVision Digital</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono leading-tight">
                  מנתונים לתוצאות
                </h1>
              </div>

              <p className="text-lg text-gray-600 font-mono leading-relaxed max-w-lg">
                אני בונה מכונות שיווק שעובדות. כלכלן, אנליסט, קריאייטיב – כל הכלים בידיים אחת.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-purple-700 hover:bg-purple-800 text-white border-0 font-mono"
                >
                  בואו נדבר
                  <ArrowRight className="mr-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-900 hover:bg-gray-50 font-mono"
                >
                  קרא עוד
                </Button>
              </div>

              {/* Tagline */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2 font-mono">// הגישה שלי</p>
                <p className="text-sm font-mono text-gray-700">
                  {COMPANY_TAGLINE}
                </p>
              </div>
            </div>

            {/* Right - Minimal Illustration */}
            <div className="relative">
              <div className="w-full aspect-square bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center p-8">
                {/* Minimal SVG Illustration */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid background */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#grid)" />

                  {/* Central circle */}
                  <circle cx="200" cy="200" r="80" fill="none" stroke="#6b46c1" strokeWidth="2" />
                  <circle cx="200" cy="200" r="60" fill="none" stroke="#6b46c1" strokeWidth="1" opacity="0.5" />

                  {/* Connecting lines */}
                  <line x1="200" y1="120" x2="200" y2="80" stroke="#6b46c1" strokeWidth="2" />
                  <line x1="200" y1="320" x2="200" y2="360" stroke="#6b46c1" strokeWidth="2" />
                  <line x1="80" y1="200" x2="120" y2="200" stroke="#6b46c1" strokeWidth="2" />
                  <line x1="320" y1="200" x2="360" y2="200" stroke="#6b46c1" strokeWidth="2" />

                  {/* Corner nodes */}
                  <circle cx="200" cy="80" r="6" fill="#6b46c1" />
                  <circle cx="200" cy="320" r="6" fill="#6b46c1" />
                  <circle cx="80" cy="200" r="6" fill="#6b46c1" />
                  <circle cx="320" cy="200" r="6" fill="#6b46c1" />

                  {/* Diagonal connections */}
                  <line x1="140" y1="140" x2="110" y2="110" stroke="#7c3aed" strokeWidth="1.5" opacity="0.6" />
                  <line x1="260" y1="140" x2="290" y2="110" stroke="#7c3aed" strokeWidth="1.5" opacity="0.6" />
                  <line x1="140" y1="260" x2="110" y2="290" stroke="#7c3aed" strokeWidth="1.5" opacity="0.6" />
                  <line x1="260" y1="260" x2="290" y2="290" stroke="#7c3aed" strokeWidth="1.5" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-mono text-purple-700 font-semibold mb-2">// המומחיות</p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono">המכונה שלי</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: "אנליטיקה", desc: "מספרים שמספרים סיפור" },
              { icon: TrendingUp, title: "אסטרטגיה", desc: "תוכנית שמובילה לצמיחה" },
              { icon: Code2, title: "קריאייטיב", desc: "רעיונות שעובדים" },
              { icon: Zap, title: "ביצוע", desc: "תוצאות שמדברות" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border-2 border-gray-200 hover:border-purple-700 transition rounded-lg">
                <item.icon className="w-8 h-8 text-purple-700 mb-4" />
                <h3 className="font-bold font-mono text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-mono text-purple-700 font-semibold mb-2">// השירותים</p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono">מה אני עושה</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Google Ads", desc: "חיפוש מכוון, תוצאות מדויקות" },
              { title: "Meta Ads", desc: "קהל מדויק, הודעה נכונה" },
              { title: "TikTok Ads", desc: "וירליות שמביאות מכירות" },
              { title: "ניהול קמפיינים", desc: "תכנון, ביצוע, אופטימיזציה" },
              { title: "קריאייטיב AI", desc: "וידאו ותמונות שעובדות" },
              { title: "ניתוח נתונים", desc: "דוחות שמספרים את האמת" },
            ].map((service, idx) => (
              <div key={idx} className="p-8 bg-white border-2 border-gray-200 hover:border-purple-700 transition rounded-lg">
                <Grid3x3 className="w-6 h-6 text-purple-700 mb-4" />
                <h3 className="font-bold font-mono text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 font-mono">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">בואו נבנה את המכונה שלך</h2>
          <p className="text-lg text-purple-100 mb-8 font-mono max-w-2xl mx-auto">
            אם אתה מחפש שיווק שמשלב אנליטיקה, קריאייטיב ועסקיות – בואו נדבר.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-gray-100 border-0 font-mono font-bold"
          >
            צור קשר עכשיו
            <ArrowRight className="mr-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

