import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Zap, Palette, Cog, Menu, X } from "lucide-react";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@shared/const";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            {COMPANY_NAME}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm hover:text-orange-500 transition">
              שירותים
            </a>
            <a href="#expertise" className="text-sm hover:text-orange-500 transition">
              מומחיות
            </a>
            <a href="#contact" className="text-sm hover:text-orange-500 transition">
              צור קשר
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-orange-500 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-4">
            <a href="#services" className="block text-sm hover:text-orange-500 transition">
              שירותים
            </a>
            <a href="#expertise" className="block text-sm hover:text-orange-500 transition">
              מומחיות
            </a>
            <a href="#contact" className="block text-sm hover:text-orange-500 transition">
              צור קשר
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section - Asymmetrical Layout */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Text (asymmetrical positioning) */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4">
                    מנתונים גולמיים
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                      לתוצאות עסקיות
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 mt-3 md:mt-4">
                    אני בונה את המכונה שעובדת בשבילך.
                  </p>
                </div>

                <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                  אני כלכלן, אנליסט, איש מכירות וקריאייטיב. אני לא רק מנהל קמפיינים – אני מארכיטקט את הצמיחה שלך.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 text-sm md:text-base"
                  >
                    בוא נבנה את המכונה שלך
                    <ChevronRight className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 text-sm md:text-base"
                  >
                    קרא עוד
                  </Button>
                </div>

                {/* Tagline */}
                <div className="pt-6 md:pt-8 border-t border-slate-800">
                  <p className="text-xs md:text-sm text-slate-500 mb-2">הגישה שלי:</p>
                  <p className="text-base md:text-lg font-semibold text-slate-200">
                    {COMPANY_TAGLINE}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Video/Visual element (asymmetrical) */}
            <div className="lg:col-span-1 order-1 lg:order-2 relative">
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Video placeholder with fallback to animated SVG */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 overflow-hidden flex items-center justify-center relative">
                  {/* Animated SVG Machine */}
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full max-w-sm p-8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Outer circle */}
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      opacity="0.3"
                    />

                    {/* Inner circles (gears concept) */}
                    <circle
                      cx="200"
                      cy="200"
                      r="120"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="1.5"
                      opacity="0.2"
                    />

                    {/* Center element */}
                    <circle cx="200" cy="200" r="40" fill="none" stroke="#ea580c" strokeWidth="2" />
                    <circle cx="200" cy="200" r="30" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.5" />

                    {/* Flowing lines (asymmetrical) */}
                    <path
                      d="M 200 80 Q 280 140 260 220 Q 240 280 140 260"
                      fill="none"
                      stroke="#ea580c"
                      strokeWidth="3"
                      opacity="0.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 200 80 Q 120 140 140 220 Q 160 280 260 260"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="2"
                      opacity="0.4"
                      strokeLinecap="round"
                    />

                    {/* Decorative points */}
                    <circle cx="200" cy="80" r="6" fill="#ea580c" />
                    <circle cx="260" cy="220" r="5" fill="#dc2626" opacity="0.7" />
                    <circle cx="140" cy="260" r="5" fill="#ea580c" opacity="0.7" />

                    {/* Gear 1 (rotating) */}
                    <g opacity="0.5">
                      <circle cx="280" cy="140" r="25" fill="none" stroke="#ea580c" strokeWidth="2" />
                      <circle cx="280" cy="140" r="18" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.5" />
                    </g>

                    {/* Gear 2 (rotating opposite) */}
                    <g opacity="0.5">
                      <circle cx="120" cy="260" r="20" fill="none" stroke="#dc2626" strokeWidth="2" />
                      <circle cx="120" cy="260" r="14" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.5" />
                    </g>

                    {/* Gradient definitions */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                    </defs>

                    {/* Animation styles */}
                    <style>{`
                      @keyframes rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                      @keyframes rotateReverse {
                        from { transform: rotate(360deg); }
                        to { transform: rotate(0deg); }
                      }
                      g:nth-child(8) {
                        transform-origin: 280px 140px;
                        animation: rotate 4s linear infinite;
                      }
                      g:nth-child(9) {
                        transform-origin: 120px 260px;
                        animation: rotateReverse 3s linear infinite;
                      }
                    `}</style>
                  </svg>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-lg blur-2xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Proof Section */}
      <section id="expertise" className="py-12 md:py-20 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">המומחיות שמניעה את המכונה</h2>
            <p className="text-slate-400 text-base md:text-lg">
              {COMPANY_TAGLINE}
            </p>
          </div>

          {/* Asymmetrical grid of expertise cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1 - Analyst */}
            <div className="lg:col-span-1 group">
              <div className="relative p-4 md:p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-orange-500/50 transition h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition"></div>
                <TrendingUp className="w-8 md:w-10 h-8 md:h-10 text-orange-500 mb-3 md:mb-4 relative z-10" />
                <h3 className="text-base md:text-lg font-bold mb-2 relative z-10">המוח האנליטי</h3>
                <p className="text-slate-400 text-xs md:text-sm relative z-10">
                  אני מוצא את הסיפור שהמספרים מנסים לספר. אם זה לא מדיד, זה לא קיים.
                </p>
              </div>
            </div>

            {/* Card 2 - Economist/Salesman */}
            <div className="lg:col-span-1 group md:translate-y-6 lg:translate-y-8">
              <div className="relative p-4 md:p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-red-500/50 transition h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/20 transition"></div>
                <Zap className="w-8 md:w-10 h-8 md:h-10 text-red-500 mb-3 md:mb-4 relative z-10" />
                <h3 className="text-base md:text-lg font-bold mb-2 relative z-10">הלב העסקי</h3>
                <p className="text-slate-400 text-xs md:text-sm relative z-10">
                  אני מבין אנשים, מבין עסקים, מבין כספים. אני הייתי בשטח.
                </p>
              </div>
            </div>

            {/* Card 3 - Creative */}
            <div className="lg:col-span-1 group">
              <div className="relative p-4 md:p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-orange-500/50 transition h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition"></div>
                <Palette className="w-8 md:w-10 h-8 md:h-10 text-orange-500 mb-3 md:mb-4 relative z-10" />
                <h3 className="text-base md:text-lg font-bold mb-2 relative z-10">היד הקריאייטיבית</h3>
                <p className="text-slate-400 text-xs md:text-sm relative z-10">
                  אני משלב קריאייטיב אנושי עם יעילות AI. התוצאה: תוכן ששוברים רעש.
                </p>
              </div>
            </div>

            {/* Card 4 - Operator */}
            <div className="lg:col-span-1 group md:translate-y-6 lg:translate-y-8">
              <div className="relative p-4 md:p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-red-500/50 transition h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/20 transition"></div>
                <Cog className="w-8 md:w-10 h-8 md:h-10 text-red-500 mb-3 md:mb-4 relative z-10" />
                <h3 className="text-base md:text-lg font-bold mb-2 relative z-10">המנגנון התפעולי</h3>
                <p className="text-slate-400 text-xs md:text-sm relative z-10">
                  אני מנהל את המכונה – גוגל, מטא, טיקטוק. בעילות מקסימלית.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center">
            הפעלת המכונה
          </h2>

          <div className="space-y-10 md:space-y-12">
            {/* Service 1 - Asymmetrical layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">ארכיטקטורה אסטרטגית</h3>
                <p className="text-slate-300 text-base md:text-lg mb-4 md:mb-6">
                  לפני שאנחנו מפעילים משהו, אנחנו מחשבים הכל. אסטרטגיה שהיא תוכנית עסקית, לא רק תוכנית שיווק.
                </p>
                <ul className="space-y-2 md:space-y-3 text-slate-400 text-sm md:text-base">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    ניתוח שוק ותחרות
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    בניית פרסונה לקוח מבוססת נתונים
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    אסטרטגיה תקציב מבוססת ROI
                  </li>
                </ul>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg border border-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 md:w-16 h-12 md:h-16 text-orange-500 mx-auto mb-3 md:mb-4" />
                  <p className="text-slate-400 text-sm md:text-base">תוכנית עסקית מדויקת</p>
                </div>
              </div>
            </div>

            {/* Service 2 - Reversed asymmetrical layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="h-48 md:h-64 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-lg border border-slate-700 flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <Zap className="w-12 md:w-16 h-12 md:h-16 text-red-500 mx-auto mb-3 md:mb-4" />
                  <p className="text-slate-400 text-sm md:text-base">קמפיינים רב-ערוציים</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">ניהול קמפיינים</h3>
                <p className="text-slate-300 text-base md:text-lg mb-4 md:mb-6">
                  ניהול קמפיינים רב-ערוצי (גוגל, מטא, טיקטוק) המבוסס על תובנות אנליטיות עמוקות.
                </p>
                <ul className="space-y-2 md:space-y-3 text-slate-400 text-sm md:text-base">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
                    Google Ads (Search, Display, Shopping)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
                    Meta Ads (Facebook, Instagram)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
                    TikTok Ads ו-Organic Strategy
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">קריאייטיב ותוכן</h3>
                <p className="text-slate-300 text-base md:text-lg mb-4 md:mb-6">
                  קריאייטיב שמדבר ללב ומונע על ידי נתונים. וידאו, פוסטים, דפי נחיתה.
                </p>
                <ul className="space-y-2 md:space-y-3 text-slate-400 text-sm md:text-base">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    ייצור וידאו (AI ו-Traditional)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    תוכן סוציאל מדיה
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    דפי נחיתה ואתרים
                  </li>
                </ul>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg border border-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="w-12 md:w-16 h-12 md:h-16 text-orange-500 mx-auto mb-3 md:mb-4" />
                  <p className="text-slate-400 text-sm md:text-base">קריאייטיב שוברי רעש</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 md:py-20 px-4 bg-gradient-to-r from-orange-500/10 to-red-600/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">בוא נבנה את המכונה שלך</h2>
          <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8">
            אם אתה מחפש שיווק שמשלב אנליטיקה, קריאייטיב ועסקיות – בואו נדבר.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 text-sm md:text-base"
          >
            צור קשר עכשיו
            <ChevronRight className="mr-2 w-4 md:w-5 h-4 md:h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h4 className="font-bold mb-3 md:mb-4">{COMPANY_NAME}</h4>
              <p className="text-slate-400 text-xs md:text-sm">
                סוכנות שיווק דיגיטלית המשלבת אנליטיקה כלכלית עם קריאייטיב מקורי.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4">ניווט</h4>
              <ul className="space-y-2 text-slate-400 text-xs md:text-sm">
                <li><a href="#services" className="hover:text-orange-500 transition">שירותים</a></li>
                <li><a href="#expertise" className="hover:text-orange-500 transition">מומחיות</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition">צור קשר</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4">צור קשר</h4>
              <p className="text-slate-400 text-xs md:text-sm">
                <a href="mailto:hello@nvision.digital" className="hover:text-orange-500 transition">
                  hello@nvision.digital
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 md:pt-8 text-center text-slate-500 text-xs md:text-sm">
            <p>&copy; 2025 {COMPANY_NAME}. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

