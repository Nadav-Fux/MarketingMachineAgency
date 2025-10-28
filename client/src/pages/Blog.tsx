import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "כיצד נתונים משנים את משחק השיווק",
    excerpt: "למה אנליטיקה היא לא רק מספרים, אלא הקול של הלקוח שלך.",
    content: "כשאנחנו מדברים על שיווק דיגיטלי, הרבה מעסיקים חושבים שזה רק על קריאייטיב טוב או קמפיינים יפים. אבל האמת? הנתונים הם המלך. בכל קליק, בכל צפייה, בכל המרה - יש סיפור. הסיפור של הלקוח שלך.",
    author: "נדב פוקס",
    date: "2025-10-20",
    category: "אנליטיקה",
    image: "📊"
  },
  {
    id: "2",
    title: "AI בשיווק: כלי או איום?",
    excerpt: "איך להשתמש ב-AI בשיווק בלי שהוא יהפוך את הקמפיין שלך לגנרי.",
    content: "AI הוא כלי חזק. אבל כמו כל כלי, הוא טוב רק כמו האדם שמשתמש בו. הבעיה היא שהרבה מעסיקים משתמשים ב-AI כדי להחליף קריאייטיב אנושי. זה טעות. AI צריך להיות עוזר, לא החלפה.",
    author: "נדב פוקס",
    date: "2025-10-15",
    category: "AI וקריאייטיב",
    image: "🤖"
  },
  {
    id: "3",
    title: "ROI בשיווק דיגיטלי: איך מודדים הצלחה?",
    excerpt: "לא כל קמפיין שנראה טוב הוא קמפיין שעובד. הנה איך מודדים את זה.",
    content: "ROI הוא המילה הקסומה בשיווק דיגיטלי. אבל מה זה בעצם? וכיצד מודדים אותו? בפוסט הזה, אנחנו נלך לעומק של איך לחשוב על ROI לא רק כמספר, אלא כסיפור עסקי.",
    author: "נדב פוקס",
    date: "2025-10-10",
    category: "עסקיות",
    image: "💰"
  },
  {
    id: "4",
    title: "טיקטוק לעסקים: מעבר לטרנדים",
    excerpt: "טיקטוק לא רק לצעירים. הנה איך להשתמש בו לקמפיינים שמכניסים כסף.",
    content: "טיקטוק הוא הפלטפורמה שהכי מעסיקה אותי כרגע. למה? כי זה המקום שבו אנשים באמת מעורבים. בפוסט הזה, אנחנו נדבר על איך להשתמש בטיקטוק לא כדי להיות ווירלי, אלא כדי להכניס כסף.",
    author: "נדב פוקס",
    date: "2025-10-05",
    category: "טיקטוק",
    image: "🎵"
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-orange-500 hover:text-orange-400 flex items-center gap-2"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            חזור לבלוג
          </button>

          <article className="space-y-8">
            <div className="space-y-4">
              <div className="text-4xl">{selectedPost.image}</div>
              <h1 className="text-5xl font-bold">{selectedPost.title}</h1>
              <div className="flex gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.date).toLocaleDateString("he-IL")}
                </div>
                <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed">{selectedPost.content}</p>
              <p className="text-slate-400 mt-8">
                זה רק תחילת הסיפור. בשיווק דיגיטלי, כל קמפיין הוא ניסוי, וכל ניסוי הוא הזדמנות ללמוד.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
              <h3 className="text-2xl font-bold mb-6">עוד מאמרים</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((post) => post.id !== selectedPost.id)
                  .slice(0, 2)
                  .map((post) => (
                    <button
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="text-right p-6 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition group"
                    >
                      <div className="text-3xl mb-3">{post.image}</div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-orange-400 transition">
                        {post.title}
                      </h4>
                      <p className="text-slate-400 text-sm">{post.excerpt}</p>
                    </button>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50" dir="rtl">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-6 mb-20">
          <h1 className="text-6xl font-bold">
            בלוג
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              תובנות ודעות
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            מחשבות על שיווק דיגיטלי, אנליטיקה, קריאייטיב, ועסקיות. כל מאמר הוא הזדמנות ללמוד משהו חדש.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="text-right group"
            >
              <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-orange-500/50 rounded-lg transition space-y-4 h-full hover:shadow-lg hover:shadow-orange-500/10">
                <div className="text-5xl">{post.image}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="text-sm text-slate-500">
                    {new Date(post.date).toLocaleDateString("he-IL")}
                  </div>
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-orange-400 group-hover:gap-3 transition">
                  קרא עוד
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

