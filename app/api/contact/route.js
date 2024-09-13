import { NextResponse } from 'next/server';
import sendMail from '@/app/utils/sendEmail';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(req, res) {
  try {
    
    const { name, email, campanhas, consultoria, seo, web } = await req.json();

    const userEmail = email


    const mailOptions = {
      from: userEmail, // USER
      to: process.env.ATENDIMENTO_EMAIL, // SENDER email
      subject: 'Novo formulário de contato',
      text: `Test with data from form:
      Nome: ${name}\nEmail: ${userEmail}\nCampanhas: ${campanhas}\nConsultoria: ${consultoria}\nSEO: ${seo}\nWeb: ${web}`,
    };
  
    console.log(mailOptions)
    await sendMail(mailOptions)
    console.log('mail sent successfully')
  
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error)
  }
}
