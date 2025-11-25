import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_123')

export async function sendConfirmationEmail(to: string) {
  console.log('📧 Attempting to send confirmation email to:', to)

  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️ RESEND_API_KEY not set, skipping confirmation email')
    console.warn('Please add RESEND_API_KEY to your .env.local file')
    return
  }

  console.log('✅ RESEND_API_KEY is set')
  console.log('📤 From email:', process.env.RESEND_FROM_EMAIL || 'Better Life CBO <onboarding@resend.dev>')

  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Better Life CBO <onboarding@resend.dev>',
      to: to,
      subject: 'Welcome to Better Life CBO Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #320258 0%, #fe330a 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Better Life CBO!</h1>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Thank you for subscribing to our newsletter!</p>
              <p style="font-size: 16px; margin-bottom: 20px;">
                You will now receive updates on our programs and community initiatives that empower lives for a better tomorrow.
              </p>
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #fe330a;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  <strong>What to expect:</strong><br>
                  • Updates on our community programs<br>
                  • News about our impact and initiatives<br>
                  • Opportunities to get involved<br>
                  • Stories from our community
                </p>
              </div>
              <p style="font-size: 14px; color: #666; margin-top: 30px;">
                If you have any questions, feel free to reach out to us at 
                <a href="mailto:cbobetterlife@gmail.com" style="color: #320258;">cbobetterlife@gmail.com</a>
              </p>
              <p style="font-size: 14px; color: #666; margin-top: 20px;">
                Best regards,<br>
                <strong>The Better Life CBO Team</strong><br>
                <span style="color: #666;">Kahawa West, Roysambu Subcounty, Nairobi</span>
              </p>
            </div>
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #999; font-size: 12px;">
              <p>© ${new Date().getFullYear()} Better Life CBO. All rights reserved.</p>
              <p style="margin-top: 10px;">
                <a href="https://www.betterlifecbo.org" style="color: #320258; text-decoration: none;">Visit our website</a>
              </p>
            </div>
          </body>
        </html>
      `,
    })

    if (result.error) {
      console.error('Resend API Error:', result.error)
      throw new Error(`Failed to send email: ${JSON.stringify(result.error)}`)
    }

    console.log('✅ Confirmation email sent successfully to:', to)
    console.log('Email ID:', result.data?.id)
  } catch (error: any) {
    console.error('❌ Error sending confirmation email:', error)
    console.error('Error details:', {
      message: error?.message,
      name: error?.name,
      stack: error?.stack,
    })
    // Don't throw - email failure shouldn't break subscription
  }
}

export async function sendNotificationEmail(subscriberEmail: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set, skipping notification email')
    return
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'cbobetterlife@gmail.com'

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Better Life CBO <onboarding@resend.dev>',
      to: adminEmail,
      subject: 'New Newsletter Subscription - Better Life CBO',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #320258 0%, #fe330a 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">New Newsletter Subscription</h1>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <p style="font-size: 16px; margin-bottom: 20px;">You have a new newsletter subscriber!</p>
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5c9204;">
                <p style="margin: 0; font-size: 16px;">
                  <strong>Subscriber Email:</strong><br>
                  <a href="mailto:${subscriberEmail}" style="color: #320258; text-decoration: none;">${subscriberEmail}</a>
                </p>
                <p style="margin: 15px 0 0 0; font-size: 14px; color: #666;">
                  <strong>Subscribed At:</strong><br>
                  ${new Date().toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
        timeZone: 'Africa/Nairobi'
      })}
                </p>
              </div>
              <p style="font-size: 14px; color: #666; margin-top: 20px;">
                You can view all subscribers in your database or through Prisma Studio.
              </p>
            </div>
          </body>
        </html>
      `,
    })
    console.log('Notification email sent to admin:', adminEmail)
  } catch (error) {
    console.error('Error sending notification email:', error)
    // Don't throw - email failure shouldn't break subscription
  }
}

