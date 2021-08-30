


// const {User} =require('../module/module')
const bcrypt = require('bcryptjs')



const Newsletter = (req,res)=>{
    if(req.method === 'GET'){
        res.send('this is Newsletter page')
        console.log(req.body,'Newsletter')
    }
    if(req.method === 'POST'){}
}


module.exports = (Newsletter) 