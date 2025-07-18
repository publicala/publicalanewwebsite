# Cloudflare Workers Migration Plan

## Overview

This document outlines the migration plan from Vercel to Cloudflare Workers for the publicalanewwebsite project.

## Current Project Analysis

**Project Compatibility:** ✅ Excellent
- Next.js 15.2.4 (fully supported)
- Uses App Router (recommended)
- No API routes or server-side functions
- Static/SSG pages only
- No edge runtime exports currently
- Images already unoptimized
- i18n with static dictionaries

## Migration Approach

We're using **Cloudflare Workers** (NOT Pages) with the `@opennextjs/cloudflare` adapter.

### Why Workers vs Pages?

- ✅ Full Node.js runtime support
- ✅ No edge runtime restrictions
- ✅ Better for existing Next.js projects
- ✅ 10MB size limit (vs 3MB on free tier)
- ✅ Future-proof approach recommended by Cloudflare

## Configuration Changes Made

### 1. Installed Dependencies
```bash
pnpm install @opennextjs/cloudflare
```

### 2. Created `wrangler.toml`
```toml
name = "publicala-website"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[build]
command = "pnpm run build"

# Workers configuration (NOT Pages)
main = ".next/server/chunks/index.js"
```

### 3. Updated `next.config.mjs`
- Added `experimental.runtime: 'nodejs'` - Explicitly use Node.js runtime (NOT edge)
- Added `output: 'standalone'` - Required for Workers deployment

### 4. Updated `package.json` Scripts
- Added `"deploy": "wrangler deploy"`
- Added `"preview": "wrangler dev"`

## Next Steps

### Setup Cloudflare CLI
```bash
# Install Wrangler CLI globally
pnpm install -g wrangler

# Authenticate with Cloudflare
wrangler login
```

### Deploy to Workers
```bash
# Build and deploy
pnpm run build
pnpm run deploy
```

### Local Development
```bash
# Preview on Cloudflare Workers locally
pnpm run preview
```

## Migration Benefits

- **Performance**: Edge deployment, faster global delivery
- **Cost**: Potentially lower costs vs Vercel
- **Scalability**: Automatic scaling with Workers
- **Integration**: Better integration with Cloudflare services
- **No Runtime Restrictions**: Full Node.js support

## Testing Checklist

Before switching DNS:
- [ ] All pages render correctly
- [ ] i18n routing works (`/en`, `/es`, `/pt`)
- [ ] HubSpot scripts load properly
- [ ] Google Analytics tracking works
- [ ] Performance metrics acceptable
- [ ] SEO metadata preserved
- [ ] Footer shows "deploy test" text

## Rollback Plan

1. Keep Vercel deployment active during testing
2. Use Cloudflare custom domain for testing
3. Switch DNS only when confident
4. If issues arise, revert DNS to Vercel

## Timeline

- **Setup**: ✅ Complete (2 hours)
- **Testing**: ~1 day
- **DNS Migration**: ~1 hour
- **Total**: ~1-2 days

## Additional Notes

- The project name in Cloudflare Workers will be `publicala-website`
- All existing functionality should work without changes
- v0.dev integration may need adjustment for the new deployment workflow
- External scripts (HubSpot, Google Analytics) should work seamlessly