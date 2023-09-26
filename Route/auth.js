const express=require("express")
const router=express.Router()

const {alllabour, LabourLogin, LabourRegister}=require("../Controller/authcontroller.js")

router.get("/alllabour",alllabour)
router.post("/labourlogin",LabourLogin)
router.post("/labourregister",LabourRegister)
    

module.exports=router