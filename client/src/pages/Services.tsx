import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "ארכיטקטורה אסטרטגית",
    description: "בניית תוכנית עסקית מדויקת שמבוססת על נתונים ותובנות עמוקות.",
    details: [
      "ניתוח שוק ותחרות מעמיק",
      "בניית פרסונה לקוח מבוססת נתונים",
      "אסטרטגיית תקציב ו-ROI",
      "מפת דרכים לשנה הבאה",
    ],
    icon: "🎯",
  },
  {
    id: "2",
    title: "ניהול קמפיינים",
    description: "הפעלה של קמפיינים רב-ערוציים (גוגל, מטא, טיקטוק) בעילות מקסימלית.",
    details: [
      "Google Ads (Search, Display, Shopping)",
      "Meta Ads (Facebook, Instagram)",
      "TikTok Ads ו-Organic Strategy",
      "ניהול תקציב וביצועים יומיים",
    ],
    icon: "📊",
  },
  {
    id: "3",
    title: "קריאייטיב ותוכן",
    description: "יצירת תוכן ששוברים רעש - וידאו, פוסטים, דפי נחיתה.",
    details: [
      "ייצור וידאו (AI ו-Traditional)",
      "תוכן סוציאל מדיה",
      "דפי נחיתה ואתרים",
      "כתיבה שיווקית מקצועית",
    ],
    icon: "🎨",
  },
  {
    id: "4",
    title: "ניתוח נתונים",
    description: "חילוץ תובנות עמוקות מהנתונים שלך כדי לקבל החלטות טובות יותר.",
    details: [
      "ניתוח ביצועי קמפיינים",
      "דוחות חודשיים מפורטים",
      "זיהוי הזדמנויות לשיפור",
      "ייעוץ בהתאם לנתונים",
    ],
    icon: "📈",
  },
  {
    id: "5",
    title: "אופטימיזציה ROI",
    description: "הגדלת התוצאות של הקמפיינים שלך תוך הקטנת ההוצאות.",
    details: [
      "A/B Testing מתמשך",
      "אופטימיזציה של Conversion Rate",
      "ניהול Cost Per Acquisition",
      "סטרטגיות Retargeting",
    ],
    icon: "💰",
  },
  {
    id: "6",
    title: "ייעוץ אסטרטגי",
    description: "הנחיה מקצועית מתמשכת לצמיחה בר-קיימא של העסק שלך.",
    details: [
      "ישיבות חודשיות של תכנון",
      "הנחיה בבחירות אסטרטגיות",
      "ניתוח תחרויות וטרנדים",
      "תמיכה בהחלטות עסקיות",
    ],
    icon: "🧠",
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50" dir="rtl">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-6 mb-20">
          <h1 className="text-6xl font-bold">
            השירותים שלנו
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              כל חלק של המכונה
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            אנחנו מספקים את כל מה שצריך כדי להפעיל את המכונה של הצמיחה שלך.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-slate-700 rounded-lg overflow-hidden hover:border-orange-500/50 transition"
            >
              <button
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="w-full p-6 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition text-right flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform ${
                    expandedId === service.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedId === service.id && (
                <div className="px-6 py-6 bg-slate-900/50 border-t border-slate-700 space-y-4">
                  <h4 className="font-bold text-orange-400">מה כלול:</h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-orange-500 font-bold mt-1">✓</span>
                        <span className="text-slate-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">בואו נדבר על המכונה שלך</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            כל עסק שונה. בואו נמצא את הקומבינציה הנכונה של שירותים עבור הצמיחה שלך.
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

