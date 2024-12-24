import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the no-explicit-any rule
      "@typescript-eslint/no-explicit-any": "off",
      // Disable the react-hooks rules of hooks
      "react-hooks/rules-of-hooks": "off",
      // Disable the unused-vars rule
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
