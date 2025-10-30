# Deploy to Vercel - Step by Step Guide

This is a **static React website** that can be deployed to Vercel without any backend or database.

## Quick Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push this code to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`

3. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## What's Included

✅ **Static Frontend Only** - No backend server required
✅ **No Database** - All data is client-side
✅ **Optimized for Vercel** - Configured with vercel.json
✅ **SPA Routing** - All routes redirect to index.html for client-side routing

## Build Configuration

The `vercel.json` file is already configured with:
- **Build Command**: `vite build` (builds the React app directly)
- **Output Directory**: `dist/public` (where Vite outputs the static files)
- **Rewrites**: All routes redirect to `/index.html` for React Router to work

**Important**: Do not use `npm run build` as it contains legacy backend build steps. Always use `vite build` directly.

## Local Testing

Before deploying, test the build locally:

```bash
# Install dependencies
npm install

# Build the project (builds static files to dist/public)
vite build

# Preview the production build
vite preview --outDir dist/public
```

## Important Notes

1. **No Server Required** - This is a purely static site
2. **Contact Form** - Currently shows success messages client-side only (no actual email sending)
3. **Images** - All images in `attached_assets/generated_images/` will be included in the build

## Troubleshooting

If you encounter build errors:

1. **Clear cache and reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check build locally first**
   ```bash
   vite build
   ```

3. **Verify all files are committed**
   ```bash
   git status
   ```

4. **Common issues**:
   - If you see errors about `server/index.ts`, make sure you're using `vite build` and not `npm run build`
   - The `dist/public` folder should contain `index.html` and an `assets` folder after a successful build

## Custom Domain

After deployment, you can add a custom domain:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## Environment Variables

This static site doesn't require any environment variables. If you add backend functionality later, you can add them in:
- Vercel Dashboard → Project Settings → Environment Variables

---

**Need Help?** Check [Vercel's Documentation](https://vercel.com/docs)
