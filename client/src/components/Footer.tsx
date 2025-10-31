import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-700 font-mono">
              nVision Digital
            </h3>
            <p className="text-gray-600 text-sm font-mono">
              בונים מכונות שיווק שעובדות.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 font-mono">ניווט</h4>
            <ul className="space-y-2">
              {[
                { label: "בית", href: "/" },
                { label: "שירותים", href: "/services" },
                { label: "בלוג", href: "/blog" },
                { label: "אודות", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-purple-700 transition font-mono">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 font-mono">שירותים</h4>
            <ul className="space-y-2">
              {[
                "Google Ads",
                "Meta Ads",
                "TikTok Ads",
                "ניהול קמפיינים",
              ].map((service) => (
                <li key={service} className="text-sm text-gray-600 hover:text-purple-700 transition cursor-pointer font-mono">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 font-mono">צור קשר</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@nvision.digital" className="text-sm hover:text-purple-700 transition font-mono">
                  hello@nvision.digital
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
                <a href="tel:+972501234567" className="text-sm hover:text-purple-700 transition font-mono">
                  +972 50 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-mono">תל אביב, ישראל</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs font-mono">
          <p>&copy; 2025 nVision Digital. כל הזכויות שמורות.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-700 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-700 transition">
              Terms
            </a>
            <a href="#" className="hover:text-purple-700 transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

