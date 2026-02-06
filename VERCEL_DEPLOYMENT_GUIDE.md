# Vercel Deployment Guide for INkosinami NPO

This guide provides step-by-step instructions for deploying the INkosinami Drop-In Center website to Vercel.

## 1. Prerequisites
- A GitHub, GitLab, or Bitbucket account.
- A Vercel account (free tier is perfect).
- The project files ready (which they are!).

## 2. Push to GitHub
1. Create a new repository on your GitHub account (e.g., `inkosinami-website`).
2. Initialize git in your local project folder (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Production ready"
   ```
3. Connect and push to your GitHub repo:
   ```bash
   git remote add origin https://github.com/your-username/inkosinami-website.git
   git branch -M main
   git push -u origin main
   ```

## 3. Deploy to Vercel
1. Log in to [Vercel.com](https://vercel.com).
2. Click **"Add New"** -> **"Project"**.
3. Select your GitHub repository from the list.
4. **Configure Project**:
   - **Framework Preset**: Vite (should be auto-detected).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**.

## 4. Why Vercel?
- **Global CDN**: Your site will be lightning-fast across South Africa and the world.
- **Auto-Deploy**: Every change you push to GitHub will automatically update the live site.
- **SSL by Default**: The site will be secured with HTTPS automatically.
- **Analytics**: Vercel provides great insights into site performance.

## 5. Image & Asset Management (Critical for Vercel)
To ensure your images load correctly on the live site, follow these rules:

1. **Storage Location**: Save all your images in the `public/images/` folder.
2. **Reference in Code**: Always reference images using a root-relative path starting with a slash `/`.
   - ✅ **Correct**: `<img src="/images/your-photo.jpg" />`
   - ❌ **Incorrect**: `<img src="public/images/your-photo.jpg" />`
   - ❌ **Incorrect**: `<img src="images/your-photo.jpg" />`
3. **Case Sensitivity**: Vercel uses Linux servers, which are case-sensitive. If your file is `Photo.JPG` and your code says `/images/photo.jpg`, it **will fail** on the live site even if it works on your computer. Make sure they match exactly.
4. **No "public" in path**: In a Vite project, the `public` folder is the "root". When you deploy, the contents of `public` are moved to the top level. That's why you don't include the word "public" in your image paths.

## 6. Post-Deployment Checklist
- [ ] **Image Check**: Visit every page and ensure images are visible.
- [ ] **Domain**: Connect a custom domain (e.g., `inkosinami.org`) in Vercel settings.
- [ ] **GSAP Check**: Verify that all scroll animations run smoothly on the live URL.
- [ ] **Form Test**: Send a test message through the Contact page.
- [ ] **Copy Test**: Verify the "Copy Bank Details" functionality on mobile.

---
**Prepared with ❤️ for INkosinami Drop-In Center.**
