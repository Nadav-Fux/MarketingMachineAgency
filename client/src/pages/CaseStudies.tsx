import { TrendingUp, Target, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    id: 1,
    title: "SaaS Startup - 300% ROI Growth",
    category: "Google Ads + Meta Ads",
    challenge: "סטארטאפ SaaS שרצה להגדיל את מספר הלקוחות החדשים בתקציב קטן",
    solution: "בנינו אסטרטגיה משולבת של Google Ads (לחיפוש) ו-Meta Ads (לבנייה של קהל)",
    results: {
      roi: "300%",
      leads: "+250%",
      cost: "-35%",
    },
  },
  {
    id: 2,
    title: "E-commerce Brand - 5x Revenue",
    category: "TikTok Ads + Content",
    challenge: "חנות אונליין שרצתה להגיע לקהל צעיר ולהגדיל מכירות",
    solution: "יצרנו קמפיין TikTok Ads עם קריאייטיב מקורי וקהל מדויק",
    results: {
      roi: "500%",
      sales: "+450%",
      aov: "+65%",
    },
  },
  {
    id: 3,
    title: "Local Service - 2x Leads",
    category: "Google Ads + SEO",
    challenge: "שירות מקומי שרצה להגדיל את מספר הקוראים מהאזור",
    solution: "שילוב של Google Ads ל-Local Services וSEO אופטימיזציה",
    results: {
      roi: "200%",
      leads: "+200%",
      cost: "-20%",
    },
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col" dir="rtl">
      <Navigation />

      {/* Header */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono text-purple-700 font-semibold mb-2">// מקרים</p>
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">קמפיינים שעבדו</h1>
          <p className="text-lg text-gray-600 font-mono max-w-2xl">
            דוגמאות של קמפיינים שהצליחו. מספרים שמדברים בעד עצמם.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 px-4 bg-white flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-purple-700 transition">
                <div className="p-8 bg-gray-50 border-b-2 border-gray-200">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-mono mb-2">{study.title}</h3>
                      <span className="text-xs font-mono font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded inline-block">
                        {study.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-purple-700 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-mono font-semibold mb-1">// האתגר</p>
                        <p className="text-sm text-gray-700 font-mono">{study.challenge}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-purple-700 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-mono font-semibold mb-1">// הפתרון</p>
                        <p className="text-sm text-gray-700 font-mono">{study.solution}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-purple-700 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-mono font-semibold mb-1">// התוצאות</p>
                        <p className="text-sm text-gray-700 font-mono">
                          ROI: <strong>{study.results.roi}</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-mono font-semibold mb-4">// המדדים</p>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-700 font-mono">{value}</div>
                          <div className="text-xs text-gray-600 font-mono mt-1 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-mono mb-4">רוצה קמפיין כמו אלה?</h2>
          <p className="text-lg text-purple-100 font-mono mb-8">
            בואו נדבר על הקמפיין הבא שלך.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-purple-700 hover:bg-gray-100 rounded-lg font-mono font-bold transition"
          >
            צור קשר עכשיו
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

