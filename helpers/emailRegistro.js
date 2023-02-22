import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
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
        from: 'AP - Administrador de Pacientes <apv@correo.com>',
        to: email,
        subject: 'Comprueba tu cuenta en AP',
        text:'Comprueba tu cuenta en AP',
        html: `<p>Hola ${nombre}, comprueba tu cuenta en AP.</p>
               <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
               <a href="${process.env.FRONTEND_URL}/confirmar-cuenta/${token}">Comprobar cuenta</a> </p>
               
               <p>Si tu no creaste esta cuenta, ignora este mensaje</p>
        `
    })

    console.log('MENSAJE ENVIADO');
}

export default emailRegistro