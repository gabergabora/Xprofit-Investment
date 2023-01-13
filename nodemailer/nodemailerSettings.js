const nodemailer = require('nodemailer');

//nodemailer stuff
const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
        user: "admin@xprofitinvestment.ltd",
        pass: "ashmoney10$"
    }
});

module.exports = transporter;