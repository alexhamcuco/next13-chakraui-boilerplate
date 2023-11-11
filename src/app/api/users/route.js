import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export const GET = async () => {
  return NextResponse.json("users");
};

export const POST = async (req) => {
  const { userEmail } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: userEmail,
      subject: "Prueba",
      html: `
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenid@ a este Newsletter</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 20px;
                color: #333;
              }

              h1 {
                color: #3498db;
              }

              p {
                margin-bottom: 15px;
              }

              .highlight {
                color: #e67e22;
              }

              .signature {
                font-style: italic;
                margin-top: 20px;
                color: #7f8c8d;
              }
            </style>
          </head>
          <body>
            <h1>¡Hey! ¡Te has suscrito!</h1>
            <p>¡Bienvenido, 😃!</p>
            <p>Y antes de nada, decir que yo no soy filólogo ni lingüista, pero conozco mi lengua materna bien y, lo más importante, creo que soy bueno enseñándola.</p>
<p>Soy licenciado en pedagogía y tengo un Máster de enseñanza de español.</p>

<p>¿Qué significa esta titulitis…? Poco, la verdad. Para decirte la verdad, aprendí más de la educación fuera de la carrera. Cualifican que estoy cualificado* (con tono divertido).</p>

<p>También, para tener clases juntos, es importante que te caiga un mínimo de bien. :) Y tienes que conocerme. Porque vamos a hablar, y hablar mucho. Y si posiblemente que cuente un poco de mi vida :)</p>

<p>Bueno…o .mucho…jajaj me encanta…las graciosas. (Tirado en la cama, de k hablo con.., ejercicios corregidos…clase. Cambia) Siempre hago clases más amenas.</p>

<p>Si quieres clases para tu hijo, tengo experiencia previa con muy buenos resultados. Mi máster fueron mis trabajos anteriores y mis hobbies un poco reflejan mi manera de enseñanza.</p>

<ul>
  <li>Entrenador - Push the student as much as you can.</li>
  <li>Croupiers</li>
  <li>Customer service - Pleasant, patient, easy</li>
  <li>Pedagogo - Estructurar contenido y transmitir significativamente.</li>
  <li>Transcripción de la clase con notas.</li>
</ul>

<p class="signature" >Hobbies:</p>
<ul>
  <li>Fotografías</li>
  <li>Comics</li>
  <li>Art</li>
  <li>Filosofía</li>
  <li>Espacio</li>
  <li>Sports</li>
  <li>Nature</li>
  <li>Literatura</li>
  <li>Cinema</li>
  <li>Animals</li>
  <li>Future</li>
  <li>Past</li>
  <li>Rutinas</li>
  <li>Política</li>
  <li>Robot</li>
  <li>Computer</li>
  <li>Boardgames</li>
  <li>Gay friendly</li>
  <li>Freedom</li>
  <li>Non violencia</li>
  <li>Values</

            <p><strong>P. D. 1:</strong> Hoy fui yo, mañana quizás tú. Pronto te volveré a escribir. Seguro. Y preguntarte unas cosillas. :)</p>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ message: "email sent" });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json("no se pudo enviar");
  }
};
