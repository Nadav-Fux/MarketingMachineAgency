import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50" dir="rtl">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold">
              אני נדב
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                בונה מכונות
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              לא מנהל קמפיינים. לא יוצר תוכן. לא אנליסט. אני כל אלה ביחד.
            </p>
          </div>

          <div className="text-6xl text-center">👨‍💼</div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">הסיפור שלי</h2>
              <p className="text-slate-300 leading-relaxed">
                התחלתי בשיווק בלי להיות מעצב או מתכנת. הייתי איש מכירות שלא הבין למה הקמפיינים לא עובדים. אז התחלתי ללמוד.
              </p>
              <p className="text-slate-300 leading-relaxed">
                למדתי כלכלה באוניברסיטה. עבדתי בפרונטליין ובטלפון. ראיתי את הלקוח מהצד שלו. הבנתי מה הוא רוצה, מה הוא צריך, ומה הוא מוכן לשלם.
              </p>
              <p className="text-slate-300 leading-relaxed">
                אחר כך, התחלתי לעבוד בשיווק דיגיטלי. ראיתי את הנתונים. הבנתי שרוב הקמפיינים נכשלים כי אנשים לא מבינים את הלקוח שלהם. הם רק עושים מה שכל אחד אחר עושה.
              </p>
              <p className="text-slate-300 leading-relaxed">
                אז החלטתי לעשות משהו שונה. לא להיות רק מנהל קמפיינים. להיות בונה מכונות. להבין את הלקוח, את העסק, את הנתונים, ואת הכספים. ולבנות קמפיינים שעובדים.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">הגישה שלי</h2>
              <p className="text-slate-300 leading-relaxed">
                אני לא מאמין בפתרונות חד-גוניים. כל עסק שונה. כל לקוח שונה. אני מתחיל בשאלות:
              </p>
              <ul className="space-y-3">
                {[
                  "מי בעצם הלקוח שלך?",
                  "מה הוא מנסה לפתור?",
                  "כמה הוא מוכן לשלם?",
                  "איפה הוא מוצא מידע?",
                  "מה הוא מאמין?",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">→</span>
                    <span className="text-slate-300">{q}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                רק אחרי שאני מבין את התשובות, אני בונה את המכונה. וכשאני בונה אותה, אני בונה אותה כדי שתעבוד. לא כדי שתיראה יפה.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">הכישורים שלי</h3>
            {[
              { title: "כלכלן", desc: "הבנה של עסקים ופיננסים" },
              { title: "אנליסט", desc: "חילוץ תובנות מנתונים" },
              { title: "קריאייטיב", desc: "יצירת תוכן ששוברים רעש" },
              { title: "איש מכירות", desc: "הבנה של הלקוח" },
              { title: "מנהל", desc: "הפעלת קמפיינים בעילות" },
              { title: "מחשבון", desc: "ספירה של כל שקל" },
            ].map((skill, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">{skill.title}</h4>
                  <p className="text-slate-400 text-sm">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-20 border-y border-slate-800">
          {[
            { num: "50+", label: "קמפיינים" },
            { num: "100M+", label: "impressions" },
            { num: "500K+", label: "conversions" },
            { num: "8 שנים", label: "ניסיון" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">{stat.num}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold">בואו נבנה את המכונה שלך</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            אם אתה מחפש שיווק שמשלב אנליטיקה, קריאייטיב ועסקיות - בואו נדבר.
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

