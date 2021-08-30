
// const {User} =require('../module/module')
const bcrypt = require('bcryptjs')



const Whoarewe = (req,res)=>{
    if(req.method === 'GET'){
        res.send('this is Whoarewe page')
        console.log(req.body,'Whoarewe')
    }
    if(req.method === 'POST'){}
}


module.exports = (Whoarewe)