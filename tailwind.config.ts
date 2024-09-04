import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: '#FFF3EB',
        secBackground:'#DBBAA4',
        font: '#D2B48C',
        header : '#58382E',
        footer: '#36221C',
        iconBg:"#36221C",
        textBg:"#AB7D6F",
        
      },
      fontFamily: {
        headingFont: ['Playfair Display', 'serif'], 
        subheadingFont: ['Lora', 'serif'],
      },
    },
  },  

  plugins: [
    addVariablesForColors,
  ],
  
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
