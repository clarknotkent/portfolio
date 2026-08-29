"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Shared motion vocabulary.
 *
 * Two rules drive everything here:
 *
 * 1. Reduced motion means *gentler*, not *none*. Position and scale changes go
 *    away; opacity stays, because the fade is what explains that content
 *    replaced other content.
 * 2. Framer Motion's `x` / `y` / `scale` shorthands run on the main thread via
 *    requestAnimationFrame. A full `transform` string is hardware accelerated
 *    and keeps its frames while the browser is busy loading images — which this
 *    site does constantly.
 */

/** Strong ease-out. Matches --ease-out in globals.css. */
export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

/** Enter, then leave faster: the system should respond quicker than it presents. */
const ENTER = 0.2;
const EXIT = 0.14;

/** Page-level entrance: an 8px rise under a fade. */
export function usePageEntrance() {
  const reduce = useReducedMotion();
  // Memoised for identity stability: a fresh object every render makes Framer
  // restart the animation mid-flight.
  return useMemo(
    () => ({
      initial: { opacity: 0, transform: reduce ? "translateY(0px)" : "translateY(8px)" },
      animate: { opacity: 1, transform: "translateY(0px)" },
      transition: { duration: ENTER, ease: EASE_OUT },
    }),
    [reduce],
  );
}

/**
 * Crossfade for swapped content (project tabs, gallery slides).
 *
 * No stagger on the children by design. Tab switching is list navigation the
 * visitor repeats, and a cascade that reads as craft the first time reads as
 * latency the tenth.
 */
export function useCrossfade() {
  const reduce = useReducedMotion();
  // Memoised so the returned props keep a stable identity across renders; a
  // fresh object each render can restart an animation that is still in flight.
  return useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: reduce ? 0.1 : 0.15, ease: EASE_OUT } },
      exit: { opacity: 0, transition: { duration: reduce ? 0.1 : EXIT, ease: EASE_OUT } },
    }),
    [reduce],
  );
}
