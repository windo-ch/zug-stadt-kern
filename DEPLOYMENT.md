# Deployment Guide for SVP Stadt Zug Website

## Overview
This website is built with React, TypeScript, and Vite, optimized for static hosting on platforms like Netlify, Vercel, or GitHub Pages.

## Build Commands

### Development
```bash
npm run dev          # Start development server
npm run type-check   # TypeScript type checking
npm run lint         # ESLint code quality check
```

### Production Build
```bash
npm run build        # Production build
npm run build:analyze # Build with bundle analysis
npm run preview      # Preview production build locally
npm run clean        # Clean build directory
```

## Static Export

The build process creates a `dist/` folder containing all static assets ready for deployment.

### Key Optimizations Applied:
- **Code Splitting**: Routes are lazy-loaded for better performance
- **Bundle Optimization**: Vendor chunks separated for better caching
- **Minification**: Terser compression with console removal
- **Asset Optimization**: Proper asset naming and chunking
- **Security Headers**: XSS protection and content type security

## Deployment Options

### 1. Netlify (Recommended)
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`
- Automatic deployments on push

### 2. Vercel
- Import your GitHub repository
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### 3. GitHub Pages
- Enable GitHub Pages in repository settings
- Source: GitHub Actions
- Build workflow will be created automatically

### 4. Manual Upload
- Run `npm run build`
- Upload `dist/` contents to your web server
- Ensure proper SPA routing configuration

## SPA Routing Configuration

For client-side routing to work properly, configure your hosting provider to:
- Serve `index.html` for all routes
- Handle 404s by redirecting to the main app

### Netlify Configuration
The `_redirects` file handles this automatically.

### Apache (.htaccess)
A complete `.htaccess` file is included in the build output with:
- SPA routing configuration
- Security headers
- Compression settings
- Browser caching
- HTTPS redirect (optional)

The file is automatically copied to `dist/.htaccess` during build.

### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Performance Monitoring

### Bundle Analysis
Run `npm run build:analyze` to generate a visual bundle analysis:
- Identifies large dependencies
- Shows chunk sizes and relationships
- Helps optimize bundle splitting

### Core Web Vitals
Monitor these metrics after deployment:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Environment Variables

Create `.env.production` for production-specific settings:
```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## Troubleshooting

### Build Issues
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear build cache: `npm run clean`
3. Check TypeScript errors: `npm run type-check`

### Routing Issues
1. Ensure hosting provider supports SPA routing
2. Check redirect configuration
3. Verify `_redirects` file is in the root of `dist/`

### Performance Issues
1. Analyze bundle with `npm run build:analyze`
2. Check image sizes and formats
3. Verify lazy loading is working
4. Monitor Core Web Vitals

## Security Considerations

- HTTPS enforcement
- Security headers configured
- XSS protection enabled
- Content type sniffing disabled
- Frame embedding restricted

## Support

For deployment issues, check:
1. Build logs in your hosting platform
2. Browser console for runtime errors
3. Network tab for failed requests
4. Hosting provider documentation
