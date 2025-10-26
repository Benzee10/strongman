# HTML Starter - Replit Setup

## Overview
This is a static HTML5 template originally designed for Vercel deployment. It has been adapted to run in the Replit environment with a simple Node.js static file server.

**Original Repository**: Vercel HTML Starter Template  
**Purpose**: HTML5 website with analytics and routing capabilities  
**Current State**: Fully functional in Replit environment

## Recent Changes (October 25, 2025)
- Migrated from Vercel to Replit environment
- Created custom Node.js static file server (`server.js`) to replace Vercel Edge Middleware
- Configured server to run on port 5000 with proper cache headers
- Set up deployment configuration for Replit autoscale
- Added Node.js `.gitignore` file

## Project Architecture

### File Structure
```
.
├── index.html          # Main HTML page (static content)
├── server.js           # Node.js static file server (created for Replit)
├── middleware.js       # Original Vercel Edge Middleware (not used in Replit)
├── package.json        # Node.js dependencies
├── .gitignore          # Git ignore rules for Node.js
└── README.md           # Original project documentation
```

### Technology Stack
- **Frontend**: Static HTML5, CSS, JavaScript
- **Server**: Node.js HTTP server (custom built for Replit)
- **Analytics**: Google Analytics, Facebook Pixel (configured in HTML)
- **Deployment**: Replit Autoscale

### Server Configuration
- **Host**: 0.0.0.0 (required for Replit proxy)
- **Port**: 5000 (Replit standard)
- **Cache Control**: Disabled for development
- **Security Headers**: Referrer-Policy, X-Content-Type-Options, X-DNS-Prefetch-Control
- **Security Features**: Path sanitization and directory traversal protection

## Running the Project

### Development
The project runs automatically via the configured workflow:
```bash
node server.js
```

### Deployment
The project is configured for Replit autoscale deployment. Click the "Publish" button to deploy.

## Notes
- External resources (Google Fonts, Analytics) may show errors in Replit environment but don't affect core functionality
- The original Vercel middleware is preserved but not used
- Cache headers are disabled for development convenience
- Server serves all static files from the root directory
