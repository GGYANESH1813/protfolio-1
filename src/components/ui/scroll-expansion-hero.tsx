"use client";

import React, {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "./next-image-shim";

export interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Smoothly track scroll progression without hijacking or locking the window
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 380; // Distance in pixels to achieve 100% expansion
      const progress = Math.min(Math.max(scrollY / threshold, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const mediaWidth = 280 + scrollProgress * (isMobileState ? 450 : 1050);
  const mediaHeight = 360 + scrollProgress * (isMobileState ? 180 : 340);
  const textTranslateX = scrollProgress * (isMobileState ? 140 : 120);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div
      ref={containerRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden w-full"
      style={{ position: "relative" }}
    >
      <section className="relative flex flex-col items-center justify-start min-h-[90vh] md:min-h-[100vh]">
        <div className="relative w-full flex flex-col items-center min-h-[90vh] md:min-h-[100vh]">
          {/* Ambient Background Image with smooth scroll fade */}
          <div
            className="absolute inset-0 z-0 h-full w-full pointer-events-none"
            style={{
              opacity: Math.max(1 - scrollProgress * 1.2, 0.15),
              transition: "opacity 0.2s ease-out",
            }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10 w-full">
            <div className="flex flex-col items-center justify-center w-full min-h-[75vh] md:min-h-[85vh] relative py-12">
              {/* Expanding Media Frame */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden pointer-events-none"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "92vw",
                  maxHeight: "80vh",
                  boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.6)",
                  transition: "width 0.15s ease-out, height 0.15s ease-out",
                }}
              >
                {mediaType === "video" ? (
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <Image
                    src={mediaSrc}
                    alt={title || "Media preview"}
                    width={1400}
                    height={800}
                    className="w-full h-full object-cover rounded-xl"
                    priority
                  />
                )}
                <div
                  className="absolute inset-0 bg-black/40 rounded-xl"
                  style={{
                    opacity: 0.6 - scrollProgress * 0.4,
                    transition: "opacity 0.2s ease-out",
                  }}
                />

                {/* Subtitles inside media container */}
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-center px-4 z-10 pointer-events-auto">
                  {date && (
                    <p
                      className="text-lg md:text-xl text-blue-200 font-mono font-medium"
                      style={{
                        transform: `translateX(-${textTranslateX}vw)`,
                        transition: "transform 0.15s ease-out",
                      }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-blue-300/80 font-mono text-xs md:text-sm mt-1"
                      style={{
                        transform: `translateX(${textTranslateX}vw)`,
                        transition: "transform 0.15s ease-out",
                      }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {/* Dynamic Split Title Heading */}
              <div
                className={`flex items-center justify-center text-center gap-2 md:gap-4 w-full relative z-10 flex-col pointer-events-none ${
                  textBlend ? "mix-blend-difference" : ""
                }`}
              >
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-100 tracking-tight"
                  style={{
                    transform: `translateX(-${textTranslateX}vw)`,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  {firstWord}
                </h1>
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-blue-100 tracking-tight"
                  style={{
                    transform: `translateX(${textTranslateX}vw)`,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  {restOfTitle}
                </h1>
              </div>
            </div>

            {/* Expanded Content Section (Always safely rendered, smoothly fading in) */}
            <div
              className="flex flex-col w-full px-4 py-8 md:px-12 lg:py-16 relative z-20"
              style={{
                opacity: Math.max(0.2 + scrollProgress * 0.8, 0.2),
                transform: `translateY(${Math.max(20 - scrollProgress * 20, 0)}px)`,
                transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
