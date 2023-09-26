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
    // const { email, password } = req.body;

    Labour.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const isPasswordValid = password === user.password;

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            res.json({ message: 'Login successful' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
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
    
    user.save()
        .then((createdUser) => {
            res.status(201).json({message:"user created successfully",createdUser});
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
    
    // res.json({message:"labour login"})
}

exports.authfun=(req,res)=>{
    console.log("controller")
    res.json({message:"helloo"})
}