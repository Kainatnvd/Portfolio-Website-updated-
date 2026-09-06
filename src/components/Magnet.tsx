import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  innerClassName?: string;
}

/**
 * Makes its children drift toward the cursor whenever the pointer comes
 * within `padding` pixels, and ease back to rest when it moves away. This
 * is the "character reacts to your mouse" effect used on the hero avatar —
 * a lightweight magnetic pull rather than a full 3D tilt, matching the
 * reference design. Respects prefers-reduced-motion by staying inert.
 */
export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  strength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  innerClassName = "",
  style,
  ...props
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const isInert = disabled || reducedMotion;

  useEffect(() => {
    if (isInert) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        setPosition({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, isInert, strength]);

  const effectivePosition = isInert ? { x: 0, y: 0 } : position;

  return (
    <div ref={ref} className={className} style={style} {...props}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${effectivePosition.x}px, ${effectivePosition.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
