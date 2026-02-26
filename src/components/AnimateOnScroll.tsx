import { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp";

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function AnimateOnScroll({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  return (
    <div
      className={`scroll-reveal ${className}`}
      data-variant={variant}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
