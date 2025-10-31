import { BarChart3, Video, Zap, TrendingUp, Code2, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  {
    icon: BarChart3,
    title: "Google Ads",
    description: "חיפוש מכוון, תוצאות מדויקות",
    details: [
      "ניהול קמפיינים מתקדם",
      "אופטימיזציה של מילות מפתח",
      "דוחות שבועיים מפורטים",
      "A/B Testing",
    ],
  },
  {
    icon: Zap,
    title: "Meta Ads",
    description: "קהל מדויק, הודעה נכונה",
    details: [
      "ניהול Facebook & Instagram",
      "Audience Targeting מתקדם",
      "Creative Testing",
      "Pixel Implementation",
    ],
  },
  {
    icon: Video,
    title: "TikTok Ads",
    description: "וירליות שמביאות מכירות",
    details: [
      "TikTok Creative Strategy",
      "Influencer Collaboration",
      "Viral Content Planning",
      "Performance Tracking",
    ],
  },
  {
    icon: TrendingUp,
    title: "ניהול קמפיינים",
    description: "תכנון, ביצוע, אופטימיזציה",
    details: [
      "Strategic Planning",
      "Campaign Execution",
      "Real-time Optimization",
      "Budget Management",
    ],
  },
  {
    icon: Code2,
    title: "קריאייטיב AI",
    description: "וידאו ותמונות שעובדות",
    details: [
      "AI Video Generation",
      "Image Creation",
      "Copy Writing",
      "Content Strategy",
    ],
  },
  {
    icon: Lightbulb,
    title: "ניתוח נתונים",
    description: "דוחות שמספרים את האמת",
    details: [
      "Advanced Analytics",
      "Custom Reporting",
      "Data Visualization",
      "Insights & Recommendations",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col" dir="rtl">
      <Navigation />

      {/* Header */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono text-purple-700 font-semibold mb-2">// השירותים</p>
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">מה אני עושה</h1>
          <p className="text-lg text-gray-600 font-mono max-w-2xl">
            כל שירות בנוי כדי לתת לך תוצאות מדידות וברורות.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 px-4 bg-white flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 border-2 border-gray-200 hover:border-purple-700 transition rounded-lg">
                <service.icon className="w-8 h-8 text-purple-700 mb-4" />
                <h3 className="text-xl font-bold font-mono mb-2">{service.title}</h3>
                <p className="text-gray-600 font-mono text-sm mb-6">{service.description}</p>

                <div className="space-y-2 pt-6 border-t border-gray-200">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-purple-700 font-bold mt-1">→</span>
                      <span className="text-sm text-gray-600 font-mono">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-mono text-purple-700 font-semibold mb-2">// התהליך</p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono">איך אנחנו עובדים</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "ייעוץ", desc: "הבנה של המטרות שלך" },
              { num: "02", title: "תכנון", desc: "בניית אסטרטגיה מותאמת" },
              { num: "03", title: "ביצוע", desc: "הפעלת הקמפיינים" },
              { num: "04", title: "אופטימיזציה", desc: "שיפור מתמיד" },
            ].map((step, idx) => (
              <div key={idx} className="p-6 bg-white border-2 border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-purple-700 font-mono mb-2">{step.num}</div>
                <h3 className="font-bold font-mono text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 font-mono">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

