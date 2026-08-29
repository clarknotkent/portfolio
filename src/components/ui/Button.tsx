import * as React from "react"
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-hover",
      secondary:
        "bg-transparent border border-hairline text-ink hover:border-primary hover:text-primary",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center h-10 px-6 rounded-[2px] text-sm font-medium tracking-[0.02em] transition-[color,background-color,border-color,transform] duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variants[variant],
          className
        )}
        style={{
          fontFamily: "var(--font-valley-sans)",
          transitionTimingFunction: "var(--ease-out)",
        }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
