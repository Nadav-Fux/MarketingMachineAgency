import { TrendingUp, Users, Target } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  icon: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "SaaS Startup - מ-0 ל-1000 לקוחות",
    category: "Google Ads + Meta",
    challenge: "סטארטאפ חדש שלא היה לו שום מודעות בשוק. היה להם מוצר טוב, אבל אף אחד לא ידע שהוא קיים.",
    solution: "בנינו אסטרטגיית שיווק רב-ערוצית: Google Ads לחיפושים, Meta Ads לRetargeting, וקריאייטיב מקורי שהראה את הערך של המוצר.",
    results: [
      { metric: "CAC", value: "ירד מ-$50 ל-$15" },
      { metric: "Conversion Rate", value: "עלה ל-8%" },
      { metric: "לקוחות חדשים", value: "1000 בחודש הראשון" },
      { metric: "ROI", value: "400% בחודש השני" },
    ],
    icon: "🚀",
  },
  {
    id: "2",
    title: "E-commerce - הגדלת מכירות ב-300%",
    category: "TikTok + Instagram",
    challenge: "חנות אונליין שלא הצליחה למכור. הם השקיעו הרבה בפרסום, אבל הקמפיינים לא עבדו.",
    solution: "בנינו קמפיינים ב-TikTok ו-Instagram עם וידאו אותנטיים (לא AI). התמקדנו בסיפור המוצר, לא בתכונות.",
    results: [
      { metric: "מכירות חודשיות", value: "עלו מ-$10K ל-$40K" },
      { metric: "ROAS", value: "5:1 (כל דולר הפך ל-5)" },
      { metric: "עלות לקנייה", value: "ירדה ב-40%" },
      { metric: "חוזרים", value: "35% מהקונים חזרו" },
    ],
    icon: "🛍️",
  },
  {
    id: "3",
    title: "B2B Service - Lead Generation",
    category: "LinkedIn + Google Ads",
    challenge: "חברת שירותים B2B שלא הצליחה למצוא leads איכותיים. הם קיבלו הרבה leads, אבל כמעט אף אחד לא הפך ללקוח.",
    solution: "בנינו אסטרטגיית LinkedIn עם תוכן חינוכי, וGoogle Ads עם landing pages מותאמות לכל segment.",
    results: [
      { metric: "Leads איכותיים", value: "עלו ב-250%" },
      { metric: "Conversion Rate", value: "עלה מ-2% ל-12%" },
      { metric: "עלות ללקוח", value: "ירדה ב-60%" },
      { metric: "חוזה ממוצע", value: "עלה ל-$50K" },
    ],
    icon: "💼",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50" dir="rtl">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-6 mb-20">
          <h1 className="text-6xl font-bold">
            מחקרי מקרה
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              קמפיינים שעבדו
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            הנה כמה דוגמאות של קמפיינים שבנינו וכיצד הם שינו עסקים.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-5xl">{study.icon}</div>
                  <h2 className="text-3xl font-bold">{study.title}</h2>
                  <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                    {study.category}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-orange-400 mb-2">האתגר</h3>
                    <p className="text-slate-300">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-orange-400 mb-2">הפתרון</h3>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4">
                {study.results.map((result, i) => (
                  <div
                    key={i}
                    className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-orange-500 mb-2">{result.value}</div>
                    <div className="text-sm text-slate-400">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-20 border-y border-slate-800">
          <h2 className="text-3xl font-bold mb-12 text-center">התוצאות הכוללות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                label: "עלייה ממוצעת בהכנסות",
                value: "280%",
              },
              {
                icon: Users,
                label: "לקוחות שהצליחו",
                value: "50+",
              },
              {
                icon: Target,
                label: "ROI ממוצע",
                value: "5:1",
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center space-y-4">
                  <Icon className="w-12 h-12 text-orange-500 mx-auto" />
                  <div className="text-4xl font-bold text-orange-500">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold">בואו נעשה את זה גם לעסק שלך</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            אם אתה רוצה לראות תוצאות דומות, בואו נדבר על המכונה שלך.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg font-bold transition"
          >
            צור קשר עכשיו
          </a>
        </div>
      </section>
    </div>
  );
}

