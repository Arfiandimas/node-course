const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'arfiandimas1929@gmail.com',
    from: 'arfian.1018@students.amikom.ac.id',
    subject: 'Nama saya Arfian Dimas Andi Permana!',
    text: 'Saya berharap nama kamu sama denganku.'
})