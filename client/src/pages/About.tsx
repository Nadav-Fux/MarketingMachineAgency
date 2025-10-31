import { CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col" dir="rtl">
      <Navigation />

      {/* Header */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono text-purple-700 font-semibold mb-2">// אודות</p>
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">מי אני</h1>
          <p className="text-lg text-gray-600 font-mono max-w-2xl">
            כלכלן, אנליסט, קריאייטיב. שלוש מקצועות בגוף אחד.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 px-4 bg-white flex-grow">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 font-mono leading-relaxed">
              שלום, אני נדב. בן 28, מתל אביב. בתחילת הדרך שלי בשיווק דיגיטלי, הבנתי משהו פשוט: רוב הסוכנויות מתמחות בדבר אחד. או קריאייטיב, או אנליטיקה, או עסקיות. אבל הצמיחה האמיתית קורית בצומת של שלוש הדברים האלה.
            </p>
          </div>

          {/* Background */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-mono text-purple-700 font-semibold mb-4">// הרקע</p>
              <h2 className="text-2xl font-bold font-mono mb-4">איך הגעתי לכאן</h2>
            </div>

            <div className="space-y-4 font-mono text-gray-700">
              <p>
                התחלתי בכלכלה באוניברסיטה. לא בגלל שאני אוהב ספרים, אלא בגלל שאני אוהב לשאול שאלות. "למה?" "איך?" "מה אם?". כלכלה נתנה לי את הכלים לענות על השאלות האלה.
              </p>
              <p>
                אחר כך עבדתי במכירות. שנתיים של שיחות עם אנשים, הבנת צרכים, בנייה של יחסים. זה שינה את הדרך שלי לחשוב על שיווק. זה לא על מוצר, זה על אדם.
              </p>
              <p>
                ואז עבדתי בפרונטלי וגם בטלפון. עוד שנתיים של הקשנות קשות, למידה מהלקוחות, הבנת מה באמת חשוב להם.
              </p>
              <p>
                בכל התפקידים האלה, הבנתי שאני אוהב שלוש דברים: מספרים, אנשים, וקריאייטיב. ככל שעבדתי, הבנתי שאני יכול לשלב את שלוש הדברים האלה בשיווק דיגיטלי.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-mono text-purple-700 font-semibold mb-4">// הכישורים</p>
              <h2 className="text-2xl font-bold font-mono mb-4">מה אני יודע לעשות</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "אנליטיקה", items: ["Google Analytics", "Data Visualization", "A/B Testing", "ROI Analysis"] },
                { title: "אסטרטגיה", items: ["Campaign Planning", "Market Analysis", "Competitive Research", "Budget Optimization"] },
                { title: "קריאייטיב", items: ["Copywriting", "Content Strategy", "Video Concepts", "Design Direction"] },
                { title: "ביצוע", items: ["Google Ads", "Meta Ads", "TikTok Ads", "Campaign Management"] },
              ].map((skill, idx) => (
                <div key={idx} className="p-6 border-2 border-gray-200 rounded-lg">
                  <h3 className="font-bold font-mono text-lg mb-4">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-mono text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-700 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-6 p-8 bg-gray-50 border-2 border-gray-200 rounded-lg">
            <div>
              <p className="text-sm font-mono text-purple-700 font-semibold mb-4">// הפילוסופיה</p>
              <h2 className="text-2xl font-bold font-mono mb-4">איך אני עובד</h2>
            </div>

            <div className="space-y-4 font-mono text-gray-700">
              <p>
                <strong>1. נתונים קודם:</strong> לא אני מחליט מה טוב. הנתונים מחליטים. כל החלטה מבוססת על אנליטיקה.
              </p>
              <p>
                <strong>2. קריאייטיב שעובד:</strong> קריאייטיב יפה זה בסדר. קריאייטיב שמוכר זה טוב. קריאייטיב שמוכר וגם מביא תוצאות זה מעולה.
              </p>
              <p>
                <strong>3. שקיפות מלאה:</strong> אתה תדע בדיוק מה קורה בקמפיינים שלך. דוחות שבועיים, מפגשים חודשיים, תמיכה מלאה.
              </p>
              <p>
                <strong>4. צמיחה בר-קיימא:</strong> לא אני מחפש קמפיינים מהירים. אני מחפש צמיחה שנמשכת.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

