



const moon = require('mongoose');
const Schema = moon.Schema;
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    user:{
        type: String,
        required: [true,'inter name'],
        // validate: [isEmail,'validate 1111111111111111']
    },
    pass:{
        type: String, 
        required: [true,'inter password'],
        minlength: [8,'inter minlength'],
    }
}, {timestamps: true}) 
  
userSchema.pre('save',async function(next){ 
    // const sult = await bcrypt.genSalt()
    // this.pass = await bcrypt.hash(this.pass,sult) 
    this.pass = await bcrypt.hash(this.pass,10) 
    next()   
}) 
const home_post = moon.model('post',userSchema )


const login = (req,res)=>{
    // if(req.method === 'GET'){
    //     home_post.find()
    //     .then(result=>{ res.send(result)})
    //     .catch(err=>{ console.log(err)})
    //     // console.log(req.body,'test')
    // }
    // if(req.method === 'POST'){
        home_post.save()
    // }
}

module.exports = (login)