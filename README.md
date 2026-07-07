# Journey Connects - Website Deployment Guide

## Project Overview
This is a complete React website for Journey Connects Salesforce consulting company, built with:
- React 18
- Vite
- Tailwind CSS
- React Router
- Formspree for email handling

## Quick Start Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## Deployment to Cloudflare Pages

### Step 1: Set Up GitHub Repository

1. Create a new repository on GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/journey-connects.git
   git push -u origin main
   ```

2. Replace `YOUR_USERNAME` with your actual GitHub username

### Step 2: Connect to Cloudflare Pages

1. Log in to **Cloudflare Dashboard**: https://dash.cloudflare.com
2. Go to **Pages** (left sidebar)
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize GitHub and select your `journey-connects` repository
6. Choose branch: `main`

### Step 3: Configure Build Settings

**Build command:**
```
npm run build
```

**Build output directory:**
```
dist
```

**Environment variables:** (if needed)
```
NODE_VERSION=18
```

### Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will automatically build and deploy your site
3. You'll get a `.pages.dev` URL (e.g., `journey-connects.pages.dev`)

### Step 5: Connect Custom Domain

1. In Cloudflare Dashboard, go to your site
2. Go to **Custom domains**
3. Click **Add custom domain**
4. Enter `journeyconnects.com`
5. Verify DNS records (usually auto-configured if journeyconnects.com uses Cloudflare DNS)

## Important: Email Form Setup

The contact form uses **Formspree** for email handling:

### Setup Formspree

1. Go to **formspree.io**
2. Sign up with your email
3. Create a new form
4. Copy the form endpoint (looks like `https://formspree.io/f/YOUR_FORM_ID`)
5. Open `src/pages/Contact.jsx`
6. Find this line:
   ```javascript
   const response = await fetch('https://formspree.io/f/xyzqwert', {
   ```
7. Replace `xyzqwert` with your actual Formspree form ID
8. Redeploy your site

**How it works:**
- When someone submits the form, Formspree captures it
- Formspree sends the data to `contact@journeyconnects.com`
- You receive emails directly in your inbox

## Site Structure

```
journey-connects/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors
Edit `tailwind.config.js` to change Walmart blue color:
```javascript
colors: {
  walmart: '#0071ce',
  'walmart-dark': '#00438f',
  navy: '#1e3a8a',
}
```

### Content
Edit content in each page file:
- `src/pages/Home.jsx` - Homepage
- `src/pages/Services.jsx` - Services page
- `src/pages/About.jsx` - About page
- `src/pages/Contact.jsx` - Contact form

### Booking Link
The booking link is used in:
- Navbar (button)
- Home page (multiple CTAs)
- Services page (CTA)
- About page (CTA)
- Contact page (info section)

To update, search for the Outlook booking URL and replace it everywhere.

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Form Not Sending Emails
1. Verify Formspree form ID is correct in `Contact.jsx`
2. Check Formspree dashboard for submission logs
3. Check spam folder for emails

### Site Not Updating After Deploy
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait 5 minutes for Cloudflare cache to clear
3. Check Cloudflare Pages deployment logs

## Next Steps

1. ✅ Set up GitHub repository
2. ✅ Connect to Cloudflare Pages
3. ✅ Add custom domain
4. ✅ Set up Formspree email
5. Add blog section (optional)
6. Add portfolio/case studies (optional)
7. Set up analytics (Google Analytics)

## Support

For issues with:
- **Cloudflare Pages**: https://support.cloudflare.com
- **Formspree**: https://formspree.io/help
- **Vite**: https://vitejs.dev/guide/
- **React**: https://react.dev

---

**Your website is ready to deploy!** 🚀
