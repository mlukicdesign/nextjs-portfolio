import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Utilising Nodemailer for form submissions

export async function POST(request) {

    {/* Grab the email and password from the environment variables */}
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;



    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')


    // create transporter object
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use false for STARTTLS; true for SSL on port 465
        auth: {
          user: username,
          pass: password,
        }
      });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: 'mlukicdesign@gmail.com',
            replyTo: email,
            subject: `Website activity`,
            html: `<p>New Form Submission from Portfolio Website</p> 
            <br>
            <p>Name: ${name}</p> <br>
            <p>Email: ${email}</p> <br>
            <p>Message: ${message}</p> <br>`,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}