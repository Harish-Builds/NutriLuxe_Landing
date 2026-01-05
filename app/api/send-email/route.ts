import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend("re_7u4LSC2f_9hAwv6x6EDZvNhDZq7bDjUKo")

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json()

    const data = await resend.emails.send({
      from: "Nutri Luxe <onboarding@resend.dev>",
      to: "harishkannan.unique@gmail.com",
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
