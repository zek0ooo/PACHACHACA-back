


const moon = require('mongoose');
const Schema = moon.Schema;
// const {isEmail} = require('validator');
const bcrypt = require('bcryptjs');

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



module.exports = {
    User,
};


const registerSchema = new Schema({
    email:{
        type: String,
        required: [true,'inter email'],
        unique: [true,'inter'],
        lowercase: [true,'inter lowercase'],
        validate: [(val)=>{console.log('i validator')},'inter validate'],
    },
    name:{
        type: String,
        required: [true,'inter name'],
    },
    password:{
        type: String, 
        required: [true,'inter password'],
        minlength: [8,'inter minlength'],
        maxlength: [18,'inter maxlength'],
    }  
}, {timestamps: true})

