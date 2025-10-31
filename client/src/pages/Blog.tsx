import { useState } from "react";
import { ArrowRight, Calendar, User, ChevronLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "כיצד נתונים משנים את משחק השיווק",
    excerpt: "למה אנליטיקה היא לא רק מספרים, אלא הקול של הלקוח שלך.",
    content: "כשאנחנו מדברים על שיווק דיגיטלי, הרבה מעסיקים חושבים שזה רק על קריאייטיב טוב או קמפיינים יפים. אבל האמת? הנתונים הם המלך. בכל קליק, בכל צפייה, בכל המרה - יש סיפור. הסיפור של הלקוח שלך.",
    author: "נדב",
    date: "2025-10-20",
    category: "אנליטיקה",
  },
  {
    id: "2",
    title: "AI בשיווק: כלי או איום?",
    excerpt: "איך להשתמש ב-AI בשיווק בלי שהוא יהפוך את הקמפיין שלך לגנרי.",
    content: "AI הוא כלי חזק. אבל כמו כל כלי, הוא טוב רק כמו האדם שמשתמש בו. הבעיה היא שהרבה מעסיקים משתמשים ב-AI כדי להחליף קריאייטיב אנושי. זה טעות. AI צריך להיות עוזר, לא החלפה.",
    author: "נדב",
    date: "2025-10-15",
    category: "AI וקריאייטיב",
  },
  {
    id: "3",
    title: "ROI בשיווק דיגיטלי: איך מודדים הצלחה?",
    excerpt: "לא כל קמפיין שנראה טוב הוא קמפיין שעובד. הנה איך מודדים את זה.",
    content: "ROI הוא המילה הקסומה בשיווק דיגיטלי. אבל מה זה בעצם? וכיצד מודדים אותו? בפוסט הזה, אנחנו נלך לעומק של איך לחשוב על ROI לא רק כמספר, אלא כסיפור עסקי.",
    author: "נדב",
    date: "2025-10-10",
    category: "עסקיות",
  },
  {
    id: "4",
    title: "טיקטוק לעסקים: מעבר לטרנדים",
    excerpt: "טיקטוק לא רק לצעירים. הנה איך להשתמש בו לקמפיינים שמכניסים כסף.",
    content: "טיקטוק הוא הפלטפורמה שהכי מעסיקה אותי כרגע. למה? כי זה המקום שבו אנשים באמת מעורבים. בפוסט הזה, אנחנו נדבר על איך להשתמש בטיקטוק לא כדי להיות ווירלי, אלא כדי להכניס כסף.",
    author: "נדב",
    date: "2025-10-05",
    category: "טיקטוק",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col" dir="rtl">
        <Navigation />

        <article className="flex-grow py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 text-purple-700 hover:text-purple-800 flex items-center gap-2 font-mono"
            >
              <ChevronLeft className="w-5 h-5" />
              חזור לבלוג
            </button>

            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold font-mono">{selectedPost.title}</h1>
                <div className="flex gap-6 text-gray-600 text-sm font-mono border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {selectedPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(selectedPost.date).toLocaleDateString("he-IL")}
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded">
                    {selectedPost.category}
                  </span>
                </div>
              </div>

              <div className="space-y-6 font-mono text-gray-700 leading-relaxed">
                <p className="text-lg">{selectedPost.content}</p>
                <p className="text-gray-600">
                  זה רק תחילת הסיפור. בשיווק דיגיטלי, כל קמפיין הוא ניסוי, וכל ניסוי הוא הזדמנות ללמוד.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold font-mono mb-6">עוד מאמרים</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter((post) => post.id !== selectedPost.id)
                    .slice(0, 2)
                    .map((post) => (
                      <button
                        key={post.id}
                        onClick={() => setSelectedPost(post)}
                        className="text-right p-6 border-2 border-gray-200 hover:border-purple-700 rounded-lg transition group"
                      >
                        <h4 className="text-lg font-bold font-mono mb-2 group-hover:text-purple-700 transition">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 text-sm font-mono">{post.excerpt}</p>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col" dir="rtl">
      <Navigation />

      {/* Header */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono text-purple-700 font-semibold mb-2">// הבלוג</p>
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">מחשבות על שיווק</h1>
          <p className="text-lg text-gray-600 font-mono max-w-2xl">
            תובנות, אסטרטגיות וטיפים מעולם השיווק הדיגיטלי
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-28 px-4 bg-white flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="text-right group"
              >
                <div className="p-6 border-2 border-gray-200 hover:border-purple-700 transition rounded-lg h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-mono mb-3 flex-grow">{post.title}</h3>
                  <p className="text-sm text-gray-600 font-mono mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("he-IL")}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

