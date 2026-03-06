# Kotlin Website — React Router 7 Migration

Migration of the [Kotlin Programming Language](https://kotlinlang.org) homepage to React Router 7 Framework Mode with Server-Side Rendering (SSR).

## Features

- ✅ React Router 7 Framework Mode
- ✅ Server-Side Rendering (SSR)
- ✅ Full hydration on client
- ✅ Original visual appearance preserved
- ✅ Interactive functionality (tab switching, dropdowns, sort)

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Available at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run start
```

Available at `http://localhost:3000`

## Project Structure
```
app/
├── routes/
│   └── home.tsx          # Main page route
├── ktl-component/
│   ├── header/           # Custom SSR-compatible Header
│   └── footer/           # Custom SSR-compatible Footer
├── header-section/       # Hero section
├── why-kotlin-section/   # Why Kotlin section
├── usage-section/        # Usage highlights
├── latest-from-kotlin-section/  # Latest news
├── start-section/        # Get started section
└── root.tsx              # App layout
```
