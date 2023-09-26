const express=require("express")
const { CreateMsg, deletemsg,getAllMessages } = require("../Controller/MsgController")
const router=express.Router()

router.post("/labourmessage",CreateMsg)
router.get("/labourmessage",getAllMessages)
router.delete("/labourmessage/:name",deletemsg)

module.exports=router;