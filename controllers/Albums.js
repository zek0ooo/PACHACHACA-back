

// const {User} =require('../module/module')
const bcrypt = require('bcryptjs')



const Albums = (req,res)=>{
    if(req.method === 'GET'){
        res.send('this is Albums page')
        console.log(req.body,'Albums')
    }
    if(req.method === 'POST'){}
}


module.exports = (Albums)