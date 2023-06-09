//Funcionalidad para enviar email una ves se registre un usuario
import nodemailer from "nodemailer"

const emailRegistro =  async (datos) =>{
    const transport = nodemailer.createTransport({
        host:  process.env.EMAIL_HOST,
        port:  process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
  
      //Extrayendo datos 
      const {email, nombre, token} = datos;
      //Enviar el email 
      const info = await transport.sendMail({
        // Quien envía el email 
        from: "AAV - Administrador Alquiler de Vehículos",
        //Aquien se le envia el email 
        to:email,
        subject: 'Comprueba tu cuenta en AAV',
        text: 'Comprueba tu cuenta en Autos V ',
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en Autos V, Administrador Alquiler de Vehiculos. </p>
        
        <p> Tu cuenta esta lista, compruebala en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprar Cuenta </a>

        <p> Si tu no creaste esta cuenta, puedes ignorar este mensaje </p>

        `,
      });

      console.log("Mensaje enviado: %s", info.messageId)

};

export default emailRegistro;