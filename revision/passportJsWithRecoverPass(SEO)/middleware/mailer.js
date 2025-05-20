const nodeMailer = require("nodemailer")

const transport = nodeMailer.createTransport({
    service :"gmail",
    auth:{
        user:"ronakjatapara76@gmail.com",
         pass : "wvngirkhdihfimas"
    }
})

module.exports.sendOtp=(to,otp)=>{
    let mailOptions = {
        to : to,
        from:"ronakjatapara76@gmail.com",
        subject:"PASSSWORD RESET OTP",
        text : `your password reset otp is ${otp}`

    }
     transport.sendMail(mailOptions)
}