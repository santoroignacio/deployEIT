import nodemailer from "nodemailer" ;
import dotenv from 'dotenv';
dotenv.config()

const USER = process.env.USER
const MAIL = process.env.MAIL

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      //user: "santoroignacio76@gmail.com", //desde donde se desea enviar el email
      //pass: "kgvp oeig pazn dzvs",//clave de contraseña de aplicaciones de google
    user: USER, 
    pass: MAIL
    },
  });

  async function enviarEmail(mail, nombre) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Empresa X 👻"', // sender address
      to: mail, // list of receivers
      subject: "Hola desde la empresa ✔", // Subject line
      text: `Binvenido ${nombre} a la App`, // plain text body
      html: `<h1>Sale por el mes de Mayo!!</h1><br>
             <p>Puedes comprar mas productos en nuestro sitio:
             <a href='https://www.educacionit.com/' target= '_blank'>Comprar</a>
             </p>`, // html body
    });
  
  }

  export default enviarEmail