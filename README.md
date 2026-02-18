# Next.js Ethereum Wallet with MetaMask SDK, Wagmi, and TailwindCSS

This project is a modern Ethereum wallet dApp built with **Next.js**,
**React**, **TailwindCSS**, **Wagmi**, and the **MetaMask SDK**. It
enables users to connect their MetaMask wallet and view their ETH and
USDT balances on the Ethereum mainnet.

------------------------------------------------------------------------

## 🛠 Technology Stack & Why

### **Next.js**

A powerful React framework providing: - Server-side rendering (SSR) -
File-based routing - Excellent developer experience

Perfect for building fast, SEO-friendly dApps.

### **React (with TSX)**

-   Component-based UI library
-   Flexible and composable
-   TypeScript (TSX) adds type safety and maintainability

### **TailwindCSS**

-   Utility-first CSS framework
-   Rapid styling
-   Responsive and modern design
-   Minimal custom CSS required

### **Wagmi**

-   React hooks library for Ethereum
-   Simplifies:
    -   Wallet connections
    -   Contract interactions
    -   Balance fetching

### **MetaMask SDK**

-   Official MetaMask integration
-   Seamless wallet connection
-   Improved mobile support
-   Enhanced developer logging

------------------------------------------------------------------------

## 📁 Project Structure

``` bash
app/
├── globals.css          # Tailwind global styles and resets
├── icon.png             # App icon (favicon/manifest)
├── layout.tsx           # Root layout (Wagmi & MetaMask setup)
├── page.tsx             # Home page (connect wallet + balances)
├── providers.tsx        # React providers (e.g. WagmiConfig)

components/
├── ui/                  # Reusable UI components
├── Hero.tsx             # Landing page hero section
├── Navbar.tsx           # Navigation bar component

lib/
├── utils.ts             # Utility functions (format balances, addresses)

public/
├── *.svg                # Static SVG assets

# Root Files
.gitignore
components.json
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
pnpm-lock.yaml
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
```

------------------------------------------------------------------------

## 🧠 Why This Structure?

### `app/`

Follows the Next.js 13+ **App Router** convention.
Keeps routing and layout composition clean and scalable.

### `components/`

Encourages modular, reusable UI components for better maintainability.

### `lib/`

Separates helper functions from UI logic to keep components clean.

### `public/`

Stores static assets that are served directly by Next.js.

### Root Configuration Files

Centralized project configuration for: - TypeScript - ESLint -
TailwindCSS - PostCSS - Next.js

------------------------------------------------------------------------

## 🚀 Getting Started

### 1️⃣ Clone the repository

``` bash
git clone <your-repo-url>
cd <project-folder>
```

### 2️⃣ Install dependencies

``` bash
pnpm install
# or
npm install
```

### 3️⃣ Start the development server

``` bash
pnpm dev
# or
npm run dev
```

### 4️⃣ Open the app

Visit:

    http://localhost:3000

Then connect your MetaMask wallet 🎉

------------------------------------------------------------------------

## 💡 Summary

This project provides a scalable and developer-friendly foundation for
Ethereum dApps using:

-   **Next.js** --- SSR & routing
-   **React + TypeScript** --- Type-safe UI
-   **TailwindCSS** --- Rapid modern styling
-   **Wagmi** --- Simplified blockchain interactions
-   **MetaMask SDK** --- Smooth wallet connectivity

The clean structure makes it easy to extend with: - Additional tokens -
Smart contract interactions - Network switching - UI improvements

------------------------------------------------------------------------

Happy building! 🚀
