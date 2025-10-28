import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              nVision Digital
            </h3>
            <p className="text-slate-400">
              בונים מכונות שיווק שעובדות.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-50">ניווט</h4>
            <ul className="space-y-2">
              {[
                { label: "בית", href: "/" },
                { label: "שירותים", href: "/services" },
                { label: "בלוג", href: "/blog" },
                { label: "אודות", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-50">שירותים</h4>
            <ul className="space-y-2">
              {[
                "Google Ads",
                "Meta Ads",
                "TikTok Ads",
                "ניהול קמפיינים",
              ].map((service) => (
                <li key={service} className="text-slate-400 hover:text-orange-400 transition cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-50">צור קשר</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@nvision.digital" className="hover:text-orange-400 transition">
                  hello@nvision.digital
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+972501234567" className="hover:text-orange-400 transition">
                  +972 50 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>תל אביב, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <p>&copy; 2025 nVision Digital. כל הזכויות שמורות.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Terms
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

