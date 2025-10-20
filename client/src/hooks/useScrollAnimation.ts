import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  type: "fadeIn" | "slideIn" | "scaleIn" | "rotateIn";
  duration?: number;
  delay?: number;
  stagger?: number;
}

export function useScrollAnimation(config: AnimationConfig = { type: "fadeIn" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll("[data-animate]");
    if (elements.length === 0) return;

    const animations: Record<string, any> = {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideIn: {
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 },
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      rotateIn: {
        from: { opacity: 0, rotation: -10 },
        to: { opacity: 1, rotation: 0 },
      },
    };

    const anim = animations[config.type];

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        anim.from,
        {
          ...anim.to,
          duration: config.duration || 0.6,
          delay: (config.delay || 0) + (config.stagger || 0) * index,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [config.type, config.duration, config.delay, config.stagger]);

  return ref;
}

