# Deploy GradeGuaranteed.com to Vercel

## Step 1 — Create a GitHub repository

1. Go to https://github.com/new
2. Repository name: `gradeguaranteed`
3. Set to **Private**
4. Click **Create repository**

## Step 2 — Push the code to GitHub

Open **Terminal** (Mac) or **Command Prompt** (Windows) and run:

```bash
cd path/to/gradeguaranteed    # navigate to the project folder

git init
git add .
git commit -m "Initial commit — GradeGuaranteed.com"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/gradeguaranteed.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## Step 3 — Deploy on Vercel

1. Go to https://vercel.com and sign in (or create a free account)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your `gradeguaranteed` repository
5. Leave all settings at defaults (Vercel auto-detects Next.js)
6. Click **"Deploy"**

Vercel will build and deploy the site. This takes about 2 minutes.
Your site will be live at a URL like: `gradeguaranteed.vercel.app`

## Step 4 — Add your custom domain (gradeguaranteed.com)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Type `gradeguaranteed.com` and click **Add**
3. Also add `www.gradeguaranteed.com`
4. Vercel shows you DNS records to add — copy them

## Step 5 — Configure DNS at your domain registrar

Go to wherever you bought `gradeguaranteed.com` (GoDaddy, Namecheap, etc.)

Add these DNS records:

| Type  | Name | Value                        |
|-------|------|------------------------------|
| A     | @    | 76.76.21.21                  |
| CNAME | www  | cname.vercel-dns.com         |

Save. DNS propagates in 5–30 minutes. Then your site is live at gradeguaranteed.com.

## Step 6 — Set up Formspree (contact forms)

1. Go to https://formspree.io and create a free account
2. Create a new form → copy your Form ID (looks like: `xpzgkwlq`)
3. In VS Code or any editor, do a Find & Replace across all files:
   - Find: `YOUR_FORM_ID`
   - Replace with your actual Formspree form ID
4. Push the change to GitHub — Vercel redeploys automatically

## What gets auto-deployed

Once GitHub is connected to Vercel, every time you push a change to GitHub,
Vercel rebuilds and deploys the site automatically. No manual steps needed.

## After launch — quick wins

- [ ] Submit sitemap to Google Search Console: https://gradeguaranteed.com/sitemap.xml
- [ ] Add Google Analytics (paste GA4 script into app/layout.js)
- [ ] Replace Formspree with your actual form handler if you prefer
- [ ] Add real OG image (1200x630px) to /public/og-image.jpg
- [ ] Add favicon.ico to /public/
