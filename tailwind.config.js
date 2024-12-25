/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // ეს საშუალებას მოგვცემს Tailwind-ის კლასები გამოვიყენოთ Shopify-ის სტანდარტულ კლასებთან ერთად
  important: true,
}
