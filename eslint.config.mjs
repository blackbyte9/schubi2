import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["src/_components/ui/**"],
  },
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      camelcase: "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn", // Allow console statements, but warn about them
      "no-debugger": "warn", // Allow debugger statements, but warn about them
      "eol-last": "error", // Ensure files end with a newline
      "no-multiple-empty-lines": ["error", { max: 1 }], // Prevent multiple empty lines
      "no-trailing-spaces": "error", // Disallow trailing whitespace at the end
      "no-undef": "error", // Disallow the use of undeclared variables
      "no-unused-expressions": "error", // Disallow unused expressions
      "no-duplicate-imports": "error", // Disallow duplicate imports
      "import/no-unresolved": "error", // Ensure imports point to a file/module that exists
      "react/react-in-jsx-scope": "off", // Not needed with Next.js
      "react/jsx-uses-react": "off", // Not needed with Next.js
      "react/jsx-uses-vars": "error", // Prevent unused variables in JSX
      "react/no-unescaped-entities": "off", // Allow unescaped entities in JSX
      "react/no-unknown-property": [
        "error",
        { ignore: ["css", "jsx", "global"] }, // Allow custom properties like `css` and `jsx`
      ],
      "react/jsx-key": "error", // Ensure that all elements in an array or iterator have a unique "key" prop
      "react/no-children-prop": "error", // Prevent passing children as a prop
      "react/no-array-index-key": "warn", // Warn against using array index as a key in React components
      "react-hooks/rules-of-hooks": "error", // Enforce rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in useEffect
      "jsx-a11y/anchor-is-valid": "warn", // Warn about invalid anchor tags // Warn about click events on non-interactive elements
      "jsx-a11y/alt-text": "warn", // Warn about missing alt text
    },
  },
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      "unicorn/prefer-module": "off", // Disable the prefer-module rule
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ], // Enforce file names to be in kebab-case
      "unicorn/no-abusive-eslint-disable": "error", // Disallow abusive eslint-disable comments
      "unicorn/prefer-top-level-await": "warn", // Prefer top-level await
      "unicorn/better-regex": "warn", // Suggest using better regex patterns
      "unicorn/template-indent": "error", // Enforce consistent indentation in template literals
      "unicorn/no-array-for-each": "error", // Disallow the use of Array.prototype.forEach
      "unicorn/no-useless-undefined": "error", // Disallow unnecessary use of undefined
    },
  },
];

export default eslintConfig;
