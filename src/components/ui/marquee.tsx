"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { contentData } from "~/lib/content-data";

const Marquee = () => {
  const { items: PARTNERS } = contentData.partners;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry?.isIntersecting ?? false);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <>
      <div ref={containerRef} className="relative overflow-hidden pt-4">
        {/* Левая тень для плавного исчезновения */}
        <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r to-transparent"></div>

        <div className="flex gap-0">
          {/* Первая копия для бесконечной прокрутки */}
          <div
            className={`flex min-w-max animate-none ${
              isVisible ? "animate-marquee" : ""
            }`}
          >
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="mx-10 flex items-center justify-center"
              >
                <div className="relative h-16 w-32 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Вторая копия для бесконечной прокрутки */}
          <div
            className={`flex min-w-max animate-none ${
              isVisible ? "animate-marquee" : ""
            }`}
          >
            {PARTNERS.map((partner) => (
              <div
                key={`second-${partner.id}`}
                className="mx-10 flex items-center justify-center"
              >
                <div className="relative h-16 w-32 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Правая тень для плавного исчезновения */}
        <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l to-transparent"></div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 5rem));
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Marquee;
