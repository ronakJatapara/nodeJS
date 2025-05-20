const passport = require("passport")
const locatSt = require("passport-local").Strategy
const schema = require("../model/firstSchema")

passport.use("local", new locatSt(
    {usernameField:"email"},
    async (email,password,done)=>{
        let admin = await schema.findOne({email:email})

        if(admin)
        {
             if(admin.pass ==  password)
             {
                 done(null,admin)
             }
             else{
                done(null,false)
             }
        }
        else{
            done(null,false)
        }
    }
))

passport.serializeUser((admin,done)=>{
    return done(null,admin.id)
})
passport.deserializeUser(async(adminId,done)=>{
   let admin = await schema.findById(adminId)

   if(admin)
   {
      done(null,admin)
   }
   else{
    done(null,false)
   }
})

passport.checkAuth=(req,res,next)=>{
    if(req.isAuthenticated())
    {
        res.locals.admin = req.user
        next()
    }
    else{
        res.redirect("/")
    }
}


module.exports = passport