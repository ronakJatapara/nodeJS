const schema = require("../model/schema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.register = async (req, res) => {
  try {
    let user = await schema.findOne({ email: req.body.email });
    if (user) {
      return res.status(200).json({ msg: "User already registered" });
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.role = "admin";  

    let createdUser = await schema.create(req.body);
    return res.status(200).json({ msg: "User successfully created!", user: createdUser });
  } catch (error) {
    return res.status(500).json({ msg: "Server error", error });
  }
};
module.exports.login = async (req, res) => {
  let user = await schema.findOne({ email: req.body.email, role: req.body.role });
  
  if (!user) {
    return res.status(200).json({ msg: "User Not Found !", code: 100 });
  }
  
  if (await bcrypt.compare(req.body.password, user.password)) {
    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name },
      "rnw",
      { expiresIn: "1h" }
    );
    
    return res.status(200).json({
      msg: "User Logged In Successfully!",
      code: 200,
      token: token,
      role: user.role
    });
  } else {
    return res.status(200).json({ msg: "Password is incorrect!", code: 102 });
  }
};


module.exports.admin= async(req,res)=>{
 try {
    const admins = await schema.find({});
    // For simplicity, send first admin's name or whatever you want to show
    const adminName = admins.length > 0 ? admins[0].name : "No Admin";

    return res.status(200).json({
      msg: "All Data Is Here",
      data: admins,
      name: adminName,  // send admin name explicitly
    });
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

module.exports.addManager = async (req, res) => {
  let user = await schema.findOne({ email: req.body.email });
  if (user) {
    return res.status(200).json({ msg: "Manager already exists" });
  }
  
  let hashedPassword = await bcrypt.hash(req.body.password, 10);

  await schema.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: "manager"
  }).then((data) => {
    return res.status(200).json({ msg: "Manager added successfully!", user: data });
  });
};
