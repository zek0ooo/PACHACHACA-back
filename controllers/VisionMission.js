
// const {User} =require('../module/module')
const bcrypt = require('bcryptjs')



const VisionMission = (req,res)=>{
    if(req.method === 'GET'){
        res.send('this is VisionMission page')
        console.log(req.body,'VisionMission')
    }
    if(req.method === 'POST'){}
}


module.exports = (VisionMission)