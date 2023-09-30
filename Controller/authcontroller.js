const Labour=require("../Model/LabourModel")


exports.alllabour=(req,res)=>{
    Labour.find().then((labours)=>{
        res.status(201).json({labours})
    }).catch((e)=>{
        res.status(401).json({message:"error vanthuruchu"})
    })
}
exports.LabourLogin=(req,res)=>{
    // console.log(req.body)
    const { email, password } = req.body;
    console.log(req.body)
    console.log(email,password)
    // const { email, password } = req.body;

    Labour.findOne({ email })
        .then(user => {
            if (!user) {
                return res.json({ message: 'usernotfound' });
            }

            const isPasswordValid = password === user.password;

            if (!isPasswordValid) {
                return res.json({ message: 'password' });
            }

            res.json({ message: 'success',data:user });
        })
        .catch(error => {
            console.error(error);
            res.json({ message: 'Server error' });
        });
    
}
exports.LabourRegister=(req,res)=>{
    console.log(req.body)
    const user = new Labour({
        name: req.body.name,
        age: req.body.age,
        qualification: req.body.qualification,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        bloodGroup: req.body.bloodGroup,
        skills: req.body.skills,
        aadharCard: req.body.aadharCard,
        panCardNumber: req.body.panCardNumber,
        password: req.body.password
    });
    console.log(req.body)
    
    user.save()
        .then((createdUser) => {
            res.status(201).json({message:"success"});
        })
        .catch((error) => {
            res.status(500).json({ message:"error" });
        });
    
    // res.json({message:"labour login"})
}

exports.authfun=(req,res)=>{
    console.log("controller")
    res.json({message:"helloo"})
}