import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Local working material, not project source — see .gitignore.
    "design/**",
    "design_final/**",
    "skill/**",
    ".claude/**",
    ".github/agents/**",
    ".github/hooks/**",
    ".github/skills/**",
  ]),
]);

export default eslintConfig;
