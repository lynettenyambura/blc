# Next Steps After Buying Your Domain

Great! You've bought `betterlifecbo.org`. Now let's get your website live!

## Step 1: Test Your Website Locally (5 minutes)

First, make sure everything works:

```bash
# In your terminal, navigate to your project folder
cd C:\Users\best\Desktop\better

# Install dependencies (if you haven't already)
npm install

# Test the build
npm run build

# If build succeeds, start the server
npm start
```

✅ **Success Check:** If you see "Ready on http://localhost:3000" without errors, you're good to go!

---

## Step 2: Push Your Code to GitHub (10 minutes)

### 2a. Create a GitHub Account (if you don't have one)
- Go to https://github.com
- Sign up for a free account

### 2b. Create a New Repository
1. Click the "+" icon in top right → "New repository"
2. Name it: `better-life-cbo` (or any name you like)
3. Make it **Public** (so Vercel can access it)
4. **Don't** initialize with README (you already have code)
5. Click "Create repository"

### 2c. Push Your Code to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - Better Life CBO website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/better-life-cbo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ **Success Check:** Go to your GitHub repository page - you should see all your files there!

---

## Step 3: Deploy to Vercel (5 minutes)

### 3a. Sign Up for Vercel
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub" (easiest way)
4. Authorize Vercel to access your GitHub

### 3b. Deploy Your Website
1. In Vercel dashboard, click **"Add New Project"**
2. You'll see your GitHub repositories - select `better-life-cbo`
3. Vercel will auto-detect Next.js settings:
   - Framework Preset: **Next.js** ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
4. Click **"Deploy"**
5. Wait 2-3 minutes for deployment

✅ **Success Check:** You'll get a URL like `better-life-cbo.vercel.app` - your site is live!

---

## Step 4: Connect Your Domain to Vercel (10 minutes)

### 4a. Add Domain in Vercel
1. In your Vercel project dashboard, click **"Settings"**
2. Click **"Domains"** in the left sidebar
3. Enter your domain: `betterlifecbo.org`
4. Click **"Add"**

### 4b. Get DNS Records from Vercel
Vercel will show you DNS records to add. You'll see something like:
- **A Record**: `76.76.21.21` (or similar IP)
- **CNAME Record**: `cname.vercel-dns.com` (or similar)

**Copy these values** - you'll need them in the next step!

### 4c. Update DNS at Namecheap
1. Log in to your **Namecheap account**
2. Go to **"Domain List"** → Click on `betterlifecbo.org`
3. Click **"Advanced DNS"** tab
4. In the **"Host Records"** section:

   **Remove any existing A records** (if any)
   
   **Add these records:**
   
   **Type: A Record**
   - Host: `@`
   - Value: `76.76.21.21` (use the IP Vercel gave you)
   - TTL: Automatic (or 30 min)
   - Click the green checkmark to save
   
   **Type: CNAME Record**
   - Host: `www`
   - Value: `cname.vercel-dns.com` (use the CNAME Vercel gave you)
   - TTL: Automatic (or 30 min)
   - Click the green checkmark to save

5. **Save all changes**

### 4d. Wait for DNS Propagation
- DNS changes can take **24-48 hours** to propagate
- Usually works within **1-2 hours**
- You can check status at: https://dnschecker.org

✅ **Success Check:** After DNS propagates, visit `betterlifecbo.org` - your site should load!

---

## Step 5: Verify Everything Works

1. **Check your site loads:** Visit `betterlifecbo.org`
2. **Check HTTPS:** Make sure you see the padlock 🔒 (SSL is automatic!)
3. **Test all pages:** Home, About, Programs, Volunteer, Donate
4. **Test on mobile:** Make sure it looks good on phones

---

## Troubleshooting

### Build Fails on Vercel?
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try running `npm run build` locally first

### Domain Not Working?
- Wait 24-48 hours for DNS propagation
- Double-check DNS records match exactly what Vercel provided
- Use https://dnschecker.org to verify DNS propagation

### Site Shows "Not Found"?
- Make sure domain is added in Vercel Settings → Domains
- Check DNS records are correct
- Wait for DNS to propagate

---

## Quick Reference Commands

```bash
# Test locally
npm run build
npm start

# Push to GitHub
git add .
git commit -m "Your message"
git push

# Vercel will auto-deploy when you push to GitHub!
```

---

## What Happens Next?

Once everything is set up:
- ✅ Your site is live at `betterlifecbo.org`
- ✅ SSL certificate is automatic (free)
- ✅ Every time you push code to GitHub, Vercel auto-deploys
- ✅ You can update your site anytime by pushing code

**You're all set!** 🎉

