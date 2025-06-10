const express = require("express")
const ctl = require("../controller/ctl")

const router =  express.Router()

router.post("/Form",ctl.addData)


// router.post("/Form", (req, res) => {
//   // handle data from req.body
//   console.log(req.body);
//   // Save to DB logic here
//   res.status(201).send({ message: "Data received" });
// });



router.get("/viewData",ctl.viewData)
router.delete("/deleteData",ctl.deleteData)
router.put("/updateData",ctl.updateData)



module.exports = router