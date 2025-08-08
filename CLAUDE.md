# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build production**: `npm run build`
- **Start production**: `npm start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js 15 application with the App Router using TypeScript, Tailwind CSS, and Clerk for authentication.

### Key Technologies & Libraries
- **Framework**: Next.js 15 with App Router
- **Authentication**: Clerk (`@clerk/nextjs`)
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS with theme support (light/dark mode)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts
- **Database**: Prisma (configuration present in `/prisma/`)

### Project Structure
- **`/src/app/`**: App Router pages and layouts
  - `/dashboard/`: Protected dashboard area with sidebar layout
  - `/api/`: API routes including tRPC setup
- **`/src/components/`**: Reusable React components
  - `/ui/`: shadcn/ui component library
  - `/svg/`: Custom SVG components
- **`/src/lib/`**: Utility functions and configurations
- **`/src/server/`**: Server-side code including tRPC routers

### Authentication & Routing
- Clerk middleware protects all `/dashboard/*` routes
- Public routes: landing page and product pages
- Protected routes require authentication via Clerk

### Layout Architecture
- **Root Layout**: Includes theme providers (dark/light mode) and Clerk setup
- **Dashboard Layout**: Responsive design with:
  - Desktop: Collapsible sidebar with SidebarProvider
  - Mobile: Bottom navigation with header
  - Consistent theme switcher across both layouts

### Styling Patterns
- Uses Tailwind CSS with CSS variables for theming
- Consistent spacing and color schemes across components
- Responsive design with mobile-first approach
- Custom font setup with Geist Sans and Geist Mono

### Path Aliases
- `@/*` maps to `./src/*` for clean imports