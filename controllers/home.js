


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
const User = moon.model('user',userSchema )




const home = (req,res)=>{
    if(req.method === 'GET'){
        User.find()
            .then(result =>{res.send(result )})
            .catch( err => console.log(err))
    }
    if(req.method === 'POST'){}
}


module.exports = (home)
    
