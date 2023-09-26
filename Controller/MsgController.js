const Message=require("../Model/Emergencymsg")

exports.getAllMessages = (req, res) => {
    Message.find()
        .then((messages) => {
            res.status(200).json(messages); 
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving messages' });
        });
};
exports.deletemsg=(req,res)=>{
    const {name}=req.params;
    console.log(name)
   
    Message.deleteOne({labourName:name}).then(()=>{res.json({msg:"deleted sucessfully"})}).catch((e)=>{
        res.status(401).json({message:e})
    })
}
exports.CreateMsg = (req, res) => {
    const { labourName, message, levelOfDanger } = req.body;

    const newMessage = new Message({
        labourName,
        message,
        levelOfDanger
    });

    newMessage.save()
        .then((createdMessage) => {
            res.status(201).json(createdMessage); 
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error creating message' });
        });
};
