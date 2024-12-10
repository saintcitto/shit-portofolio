module.exports = {
    env: {
      browser: true, // For browser compatibility
      node: true,    // Enable Node.js environment
      es2021: true,  // Support modern ECMAScript syntax
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/essential",
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: ["vue"],
    rules: {},
  };
  