# Newsletter API Integration Guide

The newsletter subscription feature is now fully functional with a Next.js API route. This guide explains how to extend it with database storage or email service integration.

## Current Implementation

The API endpoint is located at `/app/api/newsletter/route.ts` and handles:
- ✅ Email validation
- ✅ POST requests for new subscriptions
- ✅ GET requests to check subscription status
- ✅ Error handling

## Extending the API

### Option 1: Store in Database (Recommended)

#### Using Prisma (PostgreSQL/MySQL)

1. **Install Prisma:**
```bash
npm install prisma @prisma/client
npx prisma init
```

2. **Create schema in `prisma/schema.prisma`:**
```prisma
model Newsletter {
  id          String   @id @default(cuid())
  email       String   @unique
  subscribedAt DateTime @default(now())
}
```

3. **Update the API route:**
```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  // ... validation code ...
  
  // Store in database
  try {
    await prisma.newsletter.create({
      data: {
        email,
        subscribedAt: new Date(),
      },
    })
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }
    throw error
  }
  
  // ... rest of code ...
}
```

#### Using MongoDB with Mongoose

1. **Install Mongoose:**
```bash
npm install mongoose
```

2. **Create model:**
```typescript
// models/Newsletter.ts
import mongoose from 'mongoose'

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
})

export default mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema)
```

3. **Update API route:**
```typescript
import Newsletter from '@/models/Newsletter'
import connectDB from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  await connectDB()
  // ... validation ...
  
  try {
    await Newsletter.create({ email })
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }
    throw error
  }
}
```

### Option 2: Integrate with Mailchimp

1. **Install Mailchimp SDK:**
```bash
npm install @mailchimp/mailchimp_marketing
```

2. **Add environment variable:**
```env
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_LIST_ID=your_list_id
```

3. **Update API route:**
```typescript
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export async function POST(request: NextRequest) {
  // ... validation ...
  
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
      email_address: email,
      status: 'subscribed',
    })
  } catch (error: any) {
    if (error.status === 400 && error.body?.title === 'Member Exists') {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }
    throw error
  }
}
```

### Option 3: Send Email Notifications (Resend)

1. **Install Resend:**
```bash
npm install resend
```

2. **Add environment variable:**
```env
RESEND_API_KEY=your_api_key
```

3. **Update API route:**
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  // ... validation and storage ...
  
  // Send notification email
  await resend.emails.send({
    from: 'newsletter@betterlifecbo.org',
    to: 'cbobetterlife@gmail.com',
    subject: 'New Newsletter Subscription',
    html: `<p>New subscription: ${email}</p>`,
  })
  
  // Send confirmation email to subscriber
  await resend.emails.send({
    from: 'newsletter@betterlifecbo.org',
    to: email,
    subject: 'Welcome to Better Life CBO Newsletter',
    html: `
      <h1>Thank you for subscribing!</h1>
      <p>You will now receive updates on our programs and community initiatives.</p>
    `,
  })
}
```

### Option 4: Use SendGrid

1. **Install SendGrid:**
```bash
npm install @sendgrid/mail
```

2. **Add environment variable:**
```env
SENDGRID_API_KEY=your_api_key
```

3. **Update API route:**
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  // ... validation ...
  
  const msg = {
    to: email,
    from: 'newsletter@betterlifecbo.org',
    subject: 'Welcome to Better Life CBO Newsletter',
    html: '<p>Thank you for subscribing!</p>',
  }
  
  await sgMail.send(msg)
}
```

## Environment Variables

Create a `.env.local` file in your project root:

```env
# Database (if using)
DATABASE_URL=your_database_url

# Mailchimp (if using)
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_LIST_ID=your_list_id

# Email Service (if using)
RESEND_API_KEY=your_resend_api_key
# OR
SENDGRID_API_KEY=your_sendgrid_api_key
```

## Testing the API

You can test the API endpoint using:

1. **Browser DevTools Console:**
```javascript
fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'test@example.com' })
})
  .then(r => r.json())
  .then(console.log)
```

2. **curl:**
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

3. **Postman or Thunder Client** (VS Code extension)

## Current Status

The API is currently set up to:
- ✅ Validate email format
- ✅ Handle errors gracefully
- ✅ Return appropriate HTTP status codes
- ⚠️ Log subscriptions to console (ready for database integration)

## Next Steps

1. Choose your preferred storage/email service
2. Follow the integration guide above
3. Add environment variables to `.env.local`
4. Test the integration
5. Deploy and configure environment variables on your hosting platform

## Security Considerations

- ✅ Email validation is implemented
- ✅ Error messages don't expose sensitive information
- ⚠️ Consider adding rate limiting to prevent abuse
- ⚠️ Consider adding CAPTCHA for production
- ⚠️ Store API keys in environment variables (never commit to git)

