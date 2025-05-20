    const nodemailer = require("nodemailer")

const trasport = nodemailer.createTransport({
    service:"gmail",
    auth : {
        user :"ronakjatapara76@gmail.com",
        pass : "wvngirkhdihfimas"
    }
})

module.exports.sendOTP=(to,otp)=>{
    let mailOptions = 
    {
        to : to,
        from : "ronakjatapara76@gmail.com",
        subject : "PASSWORD RESET OTP",
        text : `your password reset otp is ${otp}`
    }
    trasport.sendMail(mailOptions)
}