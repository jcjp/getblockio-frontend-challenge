# Next.js Ethereum Wallet with MetaMask SDK, Wagmi, and TailwindCSS

This project is a modern Ethereum wallet dApp built with **Next.js**, **React**, **TailwindCSS**, **Wagmi**, and the **MetaMask SDK**. It enables users to connect their MetaMask wallet and view their ETH and USDT balances on the Ethereum mainnet.

---

## 🛠 Technology Stack & Why

- **Next.js**  
  A powerful React framework providing SSR (server-side rendering), file-based routing, and great developer experience. Perfect for building fast, SEO-friendly dApps.

- **React (with TSX)**  
  Component-based UI library offering flexibility and composability. Using TypeScript (TSX) adds type safety and better maintainability.

- **TailwindCSS**  
  Utility-first CSS framework for rapid styling with responsive and modern design. Keeps styles consistent and minimal without writing custom CSS.

- **Wagmi**  
  React hooks library designed for Ethereum, simplifying wallet connection, contract interactions, and balance fetching.

- **MetaMask SDK**  
  Latest MetaMask integration enabling seamless wallet connection, improved mobile support, and enhanced developer logging.

---

## 📁 Project Structure Explanation

app/
├── globals.css # Tailwind global styles and resets
├── icon.png # App icon for favicon or manifest
├── layout.tsx # Root layout wrapping all pages (includes Wagmi & MetaMask setup)
├── page.tsx # Home page component: Connect wallet + display balances
├── providers.tsx # React context/provider setup (e.g. WagmiConfig)
components/
├── ui/ # Reusable UI components (buttons, balance display, etc)
├── Hero.tsx # Hero section component (landing page intro)
├── navbar.tsx # Navigation bar component
lib/
├── utils.ts # Utility functions (formatting balances, addresses)
node_modules/ # Dependencies
public/
├── *.svg # Icons and SVG assets (MetaMask logo, arrows, etc)
.gitignore # Git ignore rules
components.json # Custom config or metadata for components (if any)
eslint.config.mjs # ESLint config file
next-env.d.ts # Next.js TypeScript environment definitions
next.config.ts # Next.js configuration (e.g. for Tailwind)
package.json # Project manifest with dependencies & scripts
pnpm-lock.yaml # Lock file for pnpm package manager
postcss.config.mjs # PostCSS configuration for TailwindCSS
README.md # This README file
tailwind.config.ts # TailwindCSS configuration
tsconfig.json # TypeScript configuration

### Why This Structure?

- **`app/`**  
  Following Next.js 13+ **App Router** convention, placing page and layout components here ensures seamless routing and layout composition.

- **`components/`**  
  Keeps UI modular and reusable; splitting out common elements like navbar and hero improves maintainability.

- **`lib/`**  
  Utility and helper functions separate from components keep code organized.

- **`public/`**  
  Static assets like SVGs and images served directly for easy access.

- Configuration files at the root keep project-wide settings transparent and centralized.

---

## 🚀 Getting Started

1. Clone the repo  
2. Run `pnpm install` (or `npm install`)  
3. Start the dev server: `pnpm dev`  
4. Open `http://localhost:3000` and connect your MetaMask wallet

---

## 💡 Summary

This setup offers a robust, scalable, and developer-friendly foundation for Ethereum dApps with:

- **Next.js** for SSR and routing  
- **React + TSX** for type-safe UI  
- **TailwindCSS** for rapid styling  
- **Wagmi** for simplified wallet & blockchain interactions  
- **MetaMask SDK** for smooth wallet connectivity and enhanced mobile support

The clear project structure promotes maintainability and easy feature extension.

---

Happy building! 🚀

