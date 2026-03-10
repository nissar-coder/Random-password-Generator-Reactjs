React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel (or oxc when used in rolldown-vite) for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
React Compiler
The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see this documentation.

Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.

Password Generator — React A lightweight browser-based password generator built with React, Vite, and Tailwind CSS that generates secure random passwords with customizable length and character options.

🔐 Demo Adjust the slider and toggle checkboxes — a new password generates instantly. Hit Copy to copy it to your clipboard.

📁 Project Structure src/ ├── App.jsx # Main component — generator logic, state, UI ├── main.jsx # React DOM entry point └── index.css # Global styles vite.config.js # Vite + Tailwind config

✨ Features

🔢 Adjustable password length — from 8 to 100 characters 🔣 Toggle numbers and special characters ⚡ Auto-regenerates on every setting change via useEffect 📋 One-click copy to clipboard with text selection highlight 🧠 Optimized with useCallback to prevent unnecessary re-renders

🚀 Getting Started bashgit clone https://github.com/YOUR_USERNAME/password-generator.git cd password-generator npm install npm run dev Open http://localhost:5173 in your browser.

🛠️ Tech Stack

React 18 Vite Tailwind CSS

🪝 React Hooks Used HookPurposeuseStateManages length, toggles, and password valueuseEffectTriggers regeneration on setting changeuseCallbackMemoizes generator and copy functionsuseRefReferences the input for clipboard selection

📄 License MIT Sonnet 4.6
