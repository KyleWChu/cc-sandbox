# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using React 19, TypeScript, and Turbopack. It follows the Next.js App Router architecture with the `src/app` directory structure.

## Common Commands

- **Development**: `npm run dev` - Start development server with Turbopack (runs at http://localhost:3000)
- **Build**: `npm run build` - Create production build with Turbopack
- **Production**: `npm start` - Start production server
- **Lint**: `npm run lint` - Run ESLint with Next.js TypeScript rules

## Architecture

- **Framework**: Next.js 15 with App Router (not Pages Router)
- **Source Structure**: All application code lives in `src/app/`
  - `src/app/layout.tsx` - Root layout with Geist font configuration
  - `src/app/page.tsx` - Home page component
  - `src/app/globals.css` - Global styles
- **Path Aliases**: `@/*` maps to `./src/*` (configured in tsconfig.json)
- **Styling**: CSS Modules (`.module.css`) for component-level styles
- **Fonts**: Uses next/font with Geist Sans and Geist Mono from Google Fonts
- **TypeScript**: Strict mode enabled with ES2017 target
- **Build Tool**: Turbopack (Next.js's Rust-based bundler)

## Key Configuration

- ESLint extends `next/core-web-vitals` and `next/typescript`
- Static assets in `public/` directory
- TypeScript paths configured for `@/*` imports
- Use Context7 to check up-to-date docs when needed for implementing new libraries or frameworks, or adding features using them.