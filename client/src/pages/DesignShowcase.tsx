import { useState } from "react";
import Variant1 from "@/components/variants/Variant1";
import Variant2 from "@/components/variants/Variant2";
import Variant3 from "@/components/variants/Variant3";
import Variant4 from "@/components/variants/Variant4";

export default function DesignShowcase() {
  const [activeVariant, setActiveVariant] = useState(1);

  const variants = [
    { id: 1, name: "Magnetic Tiles + ירוק", description: "אריחים מגנטיים עם אנימציות scroll" },
    { id: 2, name: "Hexagonal Grid + סגול", description: "רשת משושה עם 3D rotations" },
    { id: 3, name: "Scroll-Reveal + כחול", description: "כרטיסים שנחשפים בגלילה" },
    { id: 4, name: "Timeline + ורוד", description: "ציר זמן אינטראקטיבי" },
  ];

  return (
    <div className="min-h-screen bg-slate-950" dir="rtl">
      {/* Variant Selector */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-50">בחר גרסה לתצוגה</h1>
            <p className="text-slate-400 text-sm">השווה בין 4 עיצובים שונים</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setActiveVariant(variant.id)}
                className={`px-4 py-2 rounded-lg transition text-sm font-medium ${
                  activeVariant === variant.id
                    ? "bg-orange-500 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Variant Content */}
      <div className="pt-24">
        {activeVariant === 1 && <Variant1 />}
        {activeVariant === 2 && <Variant2 />}
        {activeVariant === 3 && <Variant3 />}
        {activeVariant === 4 && <Variant4 />}
      </div>

      {/* Info Panel */}
      <div className="fixed bottom-4 right-4 bg-slate-800 border border-slate-700 rounded-lg p-4 max-w-xs">
        <h3 className="font-bold text-slate-50 mb-2">גרסה נוכחית:</h3>
        <p className="text-slate-300 text-sm">{variants.find(v => v.id === activeVariant)?.name}</p>
        <p className="text-slate-400 text-xs mt-2">{variants.find(v => v.id === activeVariant)?.description}</p>
      </div>
    </div>
  );
}

