# CLAUDE.md

This file provides guidance to Claude Code when working with the Publica.la marketing website.

## Project Overview

This is the **Publica.la Marketing Website** - a modern, multi-language marketing site built with Next.js and deployed on Cloudflare Workers using OpenNext. The site showcases Publica.la's digital publishing platform and serves as the primary customer-facing website.

## Technology Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Package Manager**: pnpm
- **Deployment**: Cloudflare Workers (using OpenNext)
- **Internationalization**: Built-in i18n support (English, Spanish, Portuguese)

## Development Environment

**This project is developed directly on the host system and is completely isolated from the Zoo Docker environment.**

### Common Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Build for Cloudflare Workers
pnpm build:openext

# Deploy to Cloudflare Workers
pnpm deploy

# Lint code
pnpm lint
```

## Project Structure

```
publicalanewwebsite/
├── app/
│   ├── [locale]/           # Internationalized pages
│   ├── dictionaries/       # Translation files (en.json, es.json, pt.json)
│   ├── dictionaries.ts     # Dictionary loader
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── middleware.ts           # i18n middleware
└── public/                 # Static assets
```

## Internationalization

The site supports three languages with automatic locale detection:
- **English** (default): `/en/`
- **Spanish**: `/es/`
- **Portuguese**: `/pt/`

### Translation Management

Translations are managed through static JSON files in `app/dictionaries/`:
- Content is manually maintained in JSON format
- No external CMS integration
- Translations are loaded server-side for SEO optimization

## Key Features

### Multi-Language Support
- Automatic locale detection and redirection
- Server-side translation loading
- SEO-friendly localized URLs

### Component Architecture
- Built with shadcn/ui and Radix UI primitives
- Consistent design system
- Responsive components

### Deployment Pipeline
- Built using OpenNext for Cloudflare Workers compatibility
- Deployed to Cloudflare Workers with edge performance
- Automatic deployments via GitHub Actions (or manual via `pnpm deploy`)

## Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Leverage shadcn/ui components
- Maintain consistent naming conventions

### Component Development
- Use existing shadcn/ui components when possible
- Create reusable components in `/components`
- Follow the established component patterns

### Translation Updates
- Edit JSON files directly in `app/dictionaries/`
- Maintain consistency across all three languages
- Use nested objects for organized content structure

## Deployment

### Current Setup
- **Platform**: Cloudflare Workers using OpenNext adapter
- **Domain**: www.publica.la (with apex redirect)
- **Build**: OpenNext build process for Workers compatibility
- **Assets**: Served from Cloudflare's global edge network

### Build Configuration
- ESLint and TypeScript errors ignored during builds for rapid iteration
- Images currently unoptimized (considering enabling optimization)
- OpenNext handles Next.js → Workers transformation
- Standalone output mode for Workers compatibility

## Development Workflow

1. **Local Development**: Run `pnpm dev` directly on host
2. **Content Changes**: Edit dictionary files or create new components
3. **Testing**: Use `pnpm build:openext` to verify Workers build
4. **Deployment**: Deploy via `pnpm deploy` to Cloudflare Workers

## Important Notes

- **No Docker**: This project does not use Zoo or any Docker containers
- **Host Development**: All development happens directly on the host system
- **Edge Deployment**: Leverages Cloudflare's global edge network for performance
- **Static Content**: All marketing content is statically defined in JSON files
- **OpenNext Compatibility**: Uses OpenNext adapter for seamless Next.js → Workers deployment