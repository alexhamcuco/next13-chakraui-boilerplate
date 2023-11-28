import connectMongoDB from "@/libs/mongodb";
import UserEmail from "@/models/userEmail";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export const GET = async () => {
  return NextResponse.json("users");
};

export const POST = async (req) => {
   await connectMongoDB();

  const { email } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    ignoreTLS: true, // Agrega esta línea para ignorar problemas de validación TLS

    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Suscription",
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

               /* Estilos específicos para el primer párrafo */
        p.first-paragraph {
          background-color: #666; /* Gris oscuro */
          color: #fff; /* Blanco */
          padding: 10px; /* Espaciado interno */
          border-radius: 5px; /* Bordes redondeados */
        }

            </style>
          </head>
          <body>
                <img src="https://www.spanishwithalex.com/images/cards/pedirPerdon.jpg" alt="Bienvenido" >

            <h1>¡Hey!😊 ¡Te has suscrito!</h1>
            <p>¡Bienvenido, 😃!</p>
            <p class="first-paragraph">Y antes de nada, decir que yo no soy filólogo ni lingüista, pero conozco mi lengua materna bien y, lo más importante, creo que soy bueno enseñándola.</p>
<p>Soy licenciado en pedagogía y tengo un Máster de enseñanza de español.</p>

<!-- botón personalizado -->

          <button style="ml: 4px; border: 2px solid red; color: red; width: auto; cursor: pointer; background-color: white; padding: 8px 16px; border-radius: 4px;">
            <a href="https://www.spanishwithalex.com/" style="text-decoration: none; color: red;">
              Confirma tu correo
            </a>
          </button>

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

 const user =   await UserEmail.findOne({email})
    if (!user ) {
       await UserEmail.create({
         email,
       });

       return NextResponse.json({ message: "email sent" });

    }
    else {
             return NextResponse.json({ message: "email ya registrado" });


    }
 
  } catch (error) {
    console.log("error", error);
    return NextResponse.json("no se pudo enviar");
  }
};
