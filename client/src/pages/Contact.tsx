import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50" dir="rtl">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-6 mb-20">
          <h1 className="text-6xl font-bold">
            בואו נדבר
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              על המכונה שלך
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            יש לך שאלות? רוצה לדעת איך אנחנו יכולים לעזור? בואו נדבר.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">דוא"ל</h3>
                  <a href="mailto:hello@nvision.digital" className="text-slate-400 hover:text-orange-400">
                    hello@nvision.digital
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">טלפון</h3>
                  <a href="tel:+972501234567" className="text-slate-400 hover:text-orange-400">
                    +972 50 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">מיקום</h3>
                  <p className="text-slate-400">תל אביב, ישראל</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-8 border-t border-slate-800">
              <h3 className="font-bold">עקבו אחרינו</h3>
              <div className="flex gap-4">
                {[
                  { name: "LinkedIn", icon: "in" },
                  { name: "Instagram", icon: "ig" },
                  { name: "Twitter", icon: "tw" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">שם מלא</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-orange-500 focus:outline-none text-slate-50"
                    placeholder="שם שלך"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">דוא"ל</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-orange-500 focus:outline-none text-slate-50"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">טלפון</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-orange-500 focus:outline-none text-slate-50"
                    placeholder="+972 50 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">חברה</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-orange-500 focus:outline-none text-slate-50"
                    placeholder="שם החברה"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">הודעה</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-orange-500 focus:outline-none text-slate-50 resize-none"
                  placeholder="ספר לנו על הפרויקט שלך..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 py-3 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                שלח הודעה
              </Button>

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                  ✓ תודה! קיבלנו את ההודעה שלך. נחזור אליך בקרוב.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

