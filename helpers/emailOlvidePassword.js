
import nodemailer from 'nodemailer'

const emailRecuperarPassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const {email, nombre, token} = datos;

    const info = await transporter.sendMail({
        from: 'AP - Administrador de Pacientes',
        to: email,
        subject: 'Recupera tu contraseña en AP',
        text:'Recupera tu contraseña en AP',
        html: `<p>Hola ${nombre}, has solicitado restablecer tu password</p>
               <p>Sigue el siguiente enlace para generar un nuevo password:
               <a href="${process.env.FRONTEND_URL}/recuperar-password/${token}">Recuperar Password</a> </p>
               
               <p>Si tu no creaste esta cuenta, ignora este mensaje</p>
        `
    })

    console.log('MENSAJE ENVIADO');
}

export default emailRecuperarPassword