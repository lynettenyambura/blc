# Domain & Hosting Guide for Better Life CBO Website

This guide will walk you through buying a domain name and hosting your Next.js website.

## Step 1: Choose a Domain Name

### Domain Name Ideas
- `betterlifecbo.org` or `.org.ke` (recommended for organizations)
- `betterlifecbo.com`
- `betterlifecbo.co.ke` (Kenya-specific)
- `betterlifecbo.ngo`

### Domain Registrars (Recommended)
1. **Namecheap** (www.namecheap.com) - User-friendly, good prices
2. **GoDaddy** (www.godaddy.com) - Popular, easy to use
3. **Google Domains** (domains.google.com) - Simple interface
4. **Name.com** - Good alternative
5. **Kenya-specific**: **Kenya Web Experts** or **Truehost Kenya** for `.co.ke` domains

### How to Buy a Domain
1. Visit one of the registrars above
2. Search for your desired domain name
3. Add it to cart and complete checkout
4. You'll need to provide contact information
5. Domain typically costs $10-15/year for .com or .org

---

## Step 2: Choose a Hosting Provider

For Next.js websites, here are the best options:

### Option 1: Vercel (RECOMMENDED - Easiest) ⭐

**Why Vercel?**
- Made by the creators of Next.js
- Free tier available
- Automatic deployments
- Built-in SSL certificates
- Very easy to set up

**Pricing:**
- **Free tier**: Perfect for your CBO website
- **Pro**: $20/month (if you need more features later)

**Steps to Deploy on Vercel:**

1. **Prepare your code:**
   ```bash
   # Make sure your code is on GitHub
   # If not, create a GitHub account and push your code there
   ```

2. **Sign up for Vercel:**
   - Go to https://vercel.com
   - Sign up with your GitHub account (easiest)

3. **Deploy:**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Your site will be live in 2-3 minutes!

4. **Connect your domain:**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your domain name
   - Follow the DNS instructions

---

### Option 2: Netlify (Good Alternative)

**Pricing:** Free tier available

**Steps:**
1. Sign up at https://netlify.com
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy!

---

### Option 3: Traditional Hosting (cPanel/Shared Hosting)

If you prefer traditional hosting:

**Recommended Providers:**
- **Truehost Kenya** (for Kenya-based hosting)
- **Hostinger**
- **Bluehost**

**Note:** You'll need to configure Next.js for static export or use a Node.js hosting plan.

---

## Step 3: Connect Domain to Hosting

### If Using Vercel:

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add your domain (e.g., `betterlifecbo.org`)

2. **Update DNS Records at Your Domain Registrar:**
   
   Vercel will give you DNS records to add. Usually:
   - **A Record**: `76.76.21.21` (or similar IP from Vercel)
   - **CNAME Record**: `cname.vercel-dns.com` (or similar)

3. **At Your Domain Registrar (e.g., Namecheap):**
   - Log in to your account
   - Go to "Domain List" → Select your domain
   - Click "Advanced DNS"
   - Add the DNS records Vercel provided
   - Save changes

4. **Wait for DNS Propagation:**
   - Can take 24-48 hours (usually much faster)
   - Your site will be live once DNS propagates!

---

## Step 4: Build and Deploy Your Website

### Before Deploying:

1. **Make sure your code is ready:**
   ```bash
   # Test locally first
   npm run build
   npm start
   ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/better-life-cbo.git
   git push -u origin main
   ```

### Deploy on Vercel:

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"
6. Done! Your site is live

---

## Step 5: Environment Variables (If Needed)

If you add features that need API keys or secrets later:

1. In Vercel: Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## Complete Step-by-Step Checklist

### Domain Purchase:
- [ ] Choose domain registrar (Namecheap recommended)
- [ ] Search and select domain name
- [ ] Complete purchase
- [ ] Verify domain ownership

### Code Preparation:
- [ ] Test website locally (`npm run build`)
- [ ] Create GitHub account (if you don't have one)
- [ ] Push code to GitHub repository
- [ ] Verify code is on GitHub

### Hosting Setup:
- [ ] Sign up for Vercel account
- [ ] Connect GitHub account to Vercel
- [ ] Import your repository
- [ ] Deploy website
- [ ] Verify site is live on Vercel URL

### Domain Connection:
- [ ] Add domain in Vercel dashboard
- [ ] Get DNS records from Vercel
- [ ] Update DNS at domain registrar
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Verify site loads on your domain

---

## Estimated Costs

### Option 1: Free/Cheap Setup
- Domain: $10-15/year
- Hosting: FREE (Vercel free tier)
- **Total: ~$10-15/year**

### Option 2: Professional Setup
- Domain: $10-15/year
- Hosting: $20/month (Vercel Pro) = $240/year
- **Total: ~$250-255/year**

For a CBO website, the **free tier is usually sufficient**!

---

## Troubleshooting

### DNS Not Working?
- Wait 24-48 hours for propagation
- Check DNS records are correct
- Use https://dnschecker.org to verify

### Build Errors?
- Check `package.json` has all dependencies
- Ensure Node.js version is compatible
- Check Vercel build logs for errors

### Site Not Loading?
- Verify domain is connected in Vercel
- Check DNS records are correct
- Clear browser cache

---

## Need Help?

If you get stuck:
1. Check Vercel documentation: https://vercel.com/docs
2. Check your domain registrar's DNS help docs
3. Contact support from your domain registrar or Vercel

---

## Quick Start Commands

```bash
# 1. Test your build locally
npm run build
npm start

# 2. Initialize git (if not done)
git init
git add .
git commit -m "Ready for deployment"

# 3. Push to GitHub
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 4. Then deploy on Vercel (via web interface)
```

---

## Recommended: Vercel + Namecheap

**Best combination for beginners:**
- **Domain**: Namecheap (easy to use, good prices)
- **Hosting**: Vercel (free, automatic, perfect for Next.js)

This combination is the easiest and most reliable for a Next.js website!

