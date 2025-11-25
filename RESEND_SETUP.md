# Resend Email Setup Guide

Your newsletter subscription now sends **both** confirmation and notification emails! Here's how to set it up.

## What Emails Are Sent?

1. **Confirmation Email to Subscriber** ✅
   - Welcome message
   - Information about what to expect
   - Branded with Better Life CBO colors

2. **Notification Email to Admin** ✅
   - Sent to `cbobetterlife@gmail.com` (or your custom admin email)
   - Notifies you when someone subscribes
   - Includes subscriber email and timestamp

## Setup Steps

### Step 1: Create Resend Account

1. Go to https://resend.com
2. Sign up for a free account (3,000 emails/month free)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Better Life CBO Newsletter")
5. Copy the API key (starts with `re_...`)

### Step 3: Set Up Environment Variables

Create or update your `.env.local` file in the project root:

```env
# Resend API Key (required)
RESEND_API_KEY=re_your_api_key_here

# Optional: Custom "from" email address
# Default: onboarding@resend.dev (for testing)
# For production, verify your domain in Resend and use:
RESEND_FROM_EMAIL=newsletter@betterlifecbo.org

# Optional: Custom admin email for notifications
# Default: cbobetterlife@gmail.com
ADMIN_EMAIL=cbobetterlife@gmail.com
```

### Step 4: Verify Your Domain (For Production)

**For Testing (Works Immediately):**
- You can use `onboarding@resend.dev` as the "from" address
- This works immediately without domain verification
- Perfect for development and testing

**For Production:**
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add `betterlifecbo.org` (or your domain)
4. Follow DNS setup instructions
5. Once verified, use `newsletter@betterlifecbo.org` as your from address

## Testing

### Test Locally

1. Make sure `.env.local` has your `RESEND_API_KEY`
2. Start your dev server: `npm run dev`
3. Submit the newsletter form on your website
4. Check:
   - Subscriber receives confirmation email
   - You receive notification email at `cbobetterlife@gmail.com`

### Test Email Sending

You can test if emails are working by checking the console logs:
- ✅ "Confirmation email sent to: [email]" = Success
- ✅ "Notification email sent to admin: [email]" = Success
- ⚠️ "RESEND_API_KEY not set" = Need to add API key

## Email Templates

The emails are beautifully designed with:
- ✅ Better Life CBO brand colors (purple #320258, orange #fe330a)
- ✅ Professional HTML formatting
- ✅ Mobile-responsive design
- ✅ Clear call-to-actions

## Troubleshooting

### Emails Not Sending?

1. **Check API Key:**
   - Make sure `RESEND_API_KEY` is in `.env.local`
   - Restart your dev server after adding it
   - API key should start with `re_`

2. **Check Console Logs:**
   - Look for error messages in terminal
   - Check if "RESEND_API_KEY not set" appears

3. **Resend Dashboard:**
   - Check Resend dashboard for email logs
   - See if emails are being sent/rejected
   - Check API key usage limits

4. **Domain Verification (Production):**
   - If using custom domain, ensure it's verified
   - Check DNS settings match Resend requirements

### Subscription Still Works Without Emails

✅ **Good news:** Even if email sending fails, the subscription is still saved to the database. This ensures users can always subscribe even if there's an email service issue.

## Production Deployment

When deploying to Vercel/Netlify:

1. Add environment variables in your hosting platform:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` (optional)
   - `ADMIN_EMAIL` (optional)

2. Verify your domain in Resend

3. Update `RESEND_FROM_EMAIL` to use your verified domain

## Free Tier Limits

Resend Free Tier:
- ✅ 3,000 emails/month
- ✅ 100 emails/day
- ✅ Perfect for small to medium newsletters

If you need more, upgrade to paid plans starting at $20/month.

## Next Steps

1. ✅ Get Resend API key
2. ✅ Add to `.env.local`
3. ✅ Test subscription
4. ✅ Verify emails are received
5. ✅ Deploy with environment variables

Your newsletter is now fully functional with email confirmations! 🎉



