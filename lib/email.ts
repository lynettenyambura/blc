import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_123')

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Better Life CBO <onboarding@resend.dev>'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@betterlifecbo.org'

export async function sendConfirmationEmail(to: string) {
  console.log('📧 Attempting to send confirmation email to:', to)

  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️ RESEND_API_KEY not set, skipping confirmation email')
    return
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
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
                <a href="mailto:${ADMIN_EMAIL}" style="color: #320258;">${ADMIN_EMAIL}</a>
              </p>
              <p style="font-size: 14px; color: #666; margin-top: 20px;">
                Best regards,<br>
                <strong>The Better Life CBO Team</strong><br>
                <span style="color: #666;">P.O. Box 13768-00100 GPO Nairobi</span><br>
                <span style="color: #666;">Kahawa West, Roysambu Subcounty</span><br>
                <span style="color: #666;">Phone: +254 708 326278</span>
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
    }
  } catch (error: any) {
    console.error('❌ Error sending confirmation email:', error)
  }
}

export async function sendNotificationEmail(subscriberEmail: string) {
  if (!process.env.RESEND_API_KEY) return

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: 'New Newsletter Subscription - Better Life CBO',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #320258;">New Newsletter Subscription</h2>
          <p>You have a new newsletter subscriber!</p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            <p><strong>Email:</strong> ${subscriberEmail}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    })
  } catch (error) {
    console.error('Error sending notification email:', error)
  }
}

export async function sendNewVolunteerNotification(volunteer: any) {
  if (!process.env.RESEND_API_KEY) return

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Volunteer Application: ${volunteer.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #320258;">New Volunteer Application</h2>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            <p><strong>Name:</strong> ${volunteer.name}</p>
            <p><strong>Email:</strong> ${volunteer.email}</p>
            <p><strong>Phone:</strong> ${volunteer.phone}</p>
            <p><strong>Area:</strong> ${volunteer.area || 'Not provided'}</p>
            <p><strong>Interests:</strong> ${volunteer.interests || 'None selected'}</p>
            <p><strong>Message:</strong><br>${volunteer.message || 'No message'}</p>
          </div>
        </div>
      `,
    })
    console.log('Volunteer notification sent to admin')
  } catch (error) {
    console.error('Error sending volunteer notification:', error)
  }
}

