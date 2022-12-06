const express=require("express");
const router=express.Router();
const cors=require("cors");
const nodemailer=require("nodemailer");

// server used to send emils
const app=express();
app.use(cors());
app.use(express.json());
app.use("/",router);
app.listen(500,()=>console.log("server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMIL_PASS);


const contactEmail=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"*******@gmail.com",
        pass:""
    },
});

contactEmail.verify(()=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Ready to Send");
    }
}); 
router.post("/contact",(req,res)=>{
    const name=req.body.firstName+req.body.lastName;
    const email=req.body.email;
    const message=req.body.message;
    const mail={
        from:name,
        to:"*******@gmil.com",
        subject:"Contact From Submission - Protfolio",
        html:`
        <p>Name:${nme}</p>
        <p>Email:${emil}</p>
        <p>Phone:${Phone}</p>
        <p>Messge:${message}</p>
        `
    };

    contactEmail.sendMail(mail,(error)=>{
        if(error){
            res.json(error);
        }else{
            res.json({code:200,status:"Message Send"});
        }
    });
});