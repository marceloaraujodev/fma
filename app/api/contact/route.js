import { NextResponse } from 'next/server';
import sendMail from '@/app/utils/sendEmail';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(req, res) {
  try {
    const { name, email, campanhas, consultoria, seo, web, phone } =
      await req.json();

    const userEmail = email;

    const mailOptions = {
      from: userEmail, // USER
      to: process.env.ATENDIMENTO_EMAIL, // SENDER email
      bcc: process.env.EMAILME,
      subject: 'Novo formulário de contato',
      text: `Test with data from form:
      Nome: ${name}\nEmail: ${userEmail}\nPhone:${phone}\nCampanhas: ${campanhas}\nConsultoria: ${consultoria}\nSEO: ${seo}\nWeb: ${web}`,
    };

    // turn email on only when he pays me for brazilianfans
    // await sendMail(mailOptions);


    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}
