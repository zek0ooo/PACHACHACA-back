

// const {User} =require('../module/module')
const bcrypt = require('bcryptjs')



const blog = (req,res)=>{
    if(req.method === 'GET'){
        res.send('this is blog page')
        console.log(req.body,'test')
    }
    if(req.method === 'POST'){}
    if(req.method === 'UPDATE'){}
    if(req.method === 'DELETE'){}
}


module.exports = (blog)
    