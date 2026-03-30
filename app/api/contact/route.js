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
      subject: 'Novo formulário de contato',
      text: `Formulário de contato recebido:\n
      Nome: ${name}\nEmail: ${userEmail}\nPhone:${phone}\nCampanhas: ${campanhas}\nConsultoria: ${consultoria}\nSEO: ${seo}\nWeb: ${web}`,
    };

    await sendMail(mailOptions);


    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}
