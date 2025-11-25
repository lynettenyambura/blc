# Email Troubleshooting Guide

If you see "Confirmation email sent to: [email]" but didn't receive the email, follow these steps:

## Quick Checks

### 1. Check if API Key is Set

Look in your terminal/console when you submit the form. You should see:
- ✅ `RESEND_API_KEY is set` = Good
- ⚠️ `RESEND_API_KEY not set` = **Problem!** Add it to `.env.local`

### 2. Check for Errors

Look for these in your console:
- ❌ `Resend API Error:` = API key might be invalid
- ❌ `Error sending confirmation email:` = Check the error details

### 3. Check Resend Dashboard

1. Go to https://resend.com/emails
2. Log in to your account
3. Check the "Emails" section
4. See if your email appears there and its status:
   - ✅ **Delivered** = Email was sent (check spam folder)
   - ⚠️ **Bounced** = Email address might be invalid
   - ❌ **Failed** = API key or configuration issue

## Common Issues & Solutions

### Issue 1: "RESEND_API_KEY not set"

**Solution:**
1. Create `.env.local` file in your project root (same folder as `package.json`)
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. **Restart your dev server** (important!)
4. Try subscribing again

### Issue 2: API Key Invalid

**Solution:**
1. Go to https://resend.com/api-keys
2. Make sure your API key is active
3. Copy the key again (starts with `re_`)
4. Update `.env.local`
5. Restart server

### Issue 3: Email in Spam Folder

**Solution:**
- Check spam/junk folder
- Mark as "Not Spam" if found
- Add `onboarding@resend.dev` to contacts

### Issue 4: Email Not Appearing in Resend Dashboard

**Solution:**
- Check if you're using the correct Resend account
- Verify API key belongs to the account you're checking
- Check if API key has proper permissions

### Issue 5: Rate Limits

**Solution:**
- Free tier: 100 emails/day
- Check Resend dashboard for usage
- Wait 24 hours if limit reached

## Testing Steps

### Step 1: Verify API Key

Run this in your terminal (in project root):
```bash
node -e "require('dotenv').config({ path: '.env.local' }); console.log('API Key:', process.env.RESEND_API_KEY ? 'Set ✅' : 'Not Set ❌')"
```

Or simply check if `.env.local` exists and has the key.

### Step 2: Test with Simple Email

Try subscribing with a Gmail address (they usually receive emails well).

### Step 3: Check Console Output

When you submit the form, you should see:
```
📧 Attempting to send confirmation email to: test@example.com
✅ RESEND_API_KEY is set
📤 From email: Better Life CBO <onboarding@resend.dev>
✅ Confirmation email sent successfully to: test@example.com
Email ID: [some-id]
```

If you see errors instead, note them down.

### Step 4: Check Resend Dashboard

1. Go to https://resend.com/emails
2. Look for your email
3. Check status and any error messages

## Still Not Working?

### Option 1: Test API Key Directly

Create a test file `test-email.js`:
```javascript
require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function test() {
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@gmail.com',
      subject: 'Test Email',
      html: '<p>This is a test</p>',
    });
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
```

Run: `node test-email.js`

### Option 2: Check Email Provider

Some email providers (like corporate emails) might block emails from Resend. Try with:
- Gmail
- Outlook
- Yahoo

### Option 3: Verify Domain (For Production)

If using a custom domain:
1. Verify domain in Resend dashboard
2. Update DNS records as instructed
3. Wait for verification (can take up to 48 hours)

## Next Steps

1. ✅ Check console logs for detailed error messages
2. ✅ Verify `.env.local` has correct API key
3. ✅ Restart dev server after adding API key
4. ✅ Check Resend dashboard for email status
5. ✅ Check spam folder
6. ✅ Try with different email address

## Need More Help?

Check the Resend documentation:
- https://resend.com/docs
- https://resend.com/docs/send-with-nodejs

Or check your Resend dashboard logs for detailed error messages.



