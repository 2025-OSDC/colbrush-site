"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface TextTypeProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

const TextType = ({
  text,
  className = "",
  typingSpeed = 50,
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const cursorRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Cursor blink animation
    if (showCursor && cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor]);

  useEffect(() => {
    // Typing animation
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const timeline = gsap.timeline();
    const chars = text.split("");

    chars.forEach((_, index) => {
      timeline.to(
        {},
        {
          duration: typingSpeed / 1000,
          onComplete: () => {
            setDisplayedText(text.substring(0, index + 1));
          },
        },
      );
    });

    timelineRef.current = timeline;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [text, typingSpeed]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span ref={cursorRef} className="ml-1 inline-block">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
