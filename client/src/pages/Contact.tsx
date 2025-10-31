import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col" dir="rtl">
      <Navigation />

      {/* Header */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono text-purple-700 font-semibold mb-2">// צור קשר</p>
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">בואו נדבר</h1>
          <p className="text-lg text-gray-600 font-mono max-w-2xl">
            יש לך שאלה? רעיון? או אתה רוצה לדבר על הקמפיין הבא שלך? אני כאן.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 px-4 bg-white flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-mono text-purple-700 font-semibold mb-4">// פרטי התקשרות</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold font-mono text-gray-900">אימייל</h3>
                    <a
                      href="mailto:hello@nvision.digital"
                      className="text-gray-600 hover:text-purple-700 transition font-mono text-sm"
                    >
                      hello@nvision.digital
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold font-mono text-gray-900">טלפון</h3>
                    <a
                      href="tel:+972501234567"
                      className="text-gray-600 hover:text-purple-700 transition font-mono text-sm"
                    >
                      +972 50 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold font-mono text-gray-900">מיקום</h3>
                    <p className="text-gray-600 font-mono text-sm">תל אביב, ישראל</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-mono mb-4">// זמני תגובה</p>
                <p className="text-sm text-gray-600 font-mono">
                  בדרך כלל אני מגיב תוך 24 שעות. בשבתות אני לא עובד.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono font-semibold text-gray-900 mb-2">
                    שם
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-purple-700 rounded-lg font-mono text-gray-900 placeholder-gray-400 focus:outline-none transition"
                    placeholder="שם מלא"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono font-semibold text-gray-900 mb-2">
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-purple-700 rounded-lg font-mono text-gray-900 placeholder-gray-400 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-mono font-semibold text-gray-900 mb-2">
                    טלפון (אופציונלי)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-purple-700 rounded-lg font-mono text-gray-900 placeholder-gray-400 focus:outline-none transition"
                    placeholder="+972 50 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono font-semibold text-gray-900 mb-2">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-purple-700 rounded-lg font-mono text-gray-900 placeholder-gray-400 focus:outline-none transition resize-none"
                    placeholder="ספר לי על הקמפיין שלך..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white border-0 font-mono font-bold"
                >
                  שלח הודעה
                  <Send className="mr-2 w-4 h-4" />
                </Button>

                {submitted && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 font-mono text-sm">
                    ✓ תודה! קיבלנו את ההודעה שלך. נחזור אליך בקרוב.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

