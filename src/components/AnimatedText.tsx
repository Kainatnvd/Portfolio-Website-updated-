import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  scrollOffset?: ScrollOffset;
}

/**
 * Renders `text` character by character, fading each letter in as the
 * viewport scrolls past it. Used for the About bio so reading down the
 * paragraph feels tied to the scroll itself rather than firing all at once.
 */
export default function AnimatedText({
  text,
  className = "",
  style,
  scrollOffset = ["start 0.8", "end 0.2"],
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset,
  });

  const words = text.match(/\S+\s*/g) ?? [];
  const totalChars = text.length;

  // Precompute each word's starting character offset with a fold instead of
  // a mutable loop counter, so nothing gets reassigned during render.
  const wordOffsets = words.reduce<number[]>((offsets) => {
    const previousEnd = offsets.length
      ? offsets[offsets.length - 1] + words[offsets.length - 1].length
      : 0;
    return [...offsets, previousEnd];
  }, []);

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <AnimatedLetter
              key={charIndex}
              char={char}
              scrollYProgress={scrollYProgress}
              index={wordOffsets[wordIndex] + charIndex}
              total={totalChars}
            />
          ))}
        </span>
      ))}
    </p>
  );
}

interface AnimatedLetterProps {
  char: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}

function AnimatedLetter({ char, scrollYProgress, index, total }: AnimatedLetterProps) {
  const charProgress = index / total;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}
