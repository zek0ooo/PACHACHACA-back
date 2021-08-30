

const {User} =require('../module/module')
const bcrypt = require('bcryptjs')
const home = require('./home')
const blog = require('./blog')
const Whoarewe = require('./Whoarewe')
const VisionMission = require('./VisionMission')
const Albums = require('./Albums')
const Newsletter = require('./Newsletter')
const login = require('./login')



const errorFun = (err)=>{  
    return err.errors
} 

 

// const signup = (req,res)=>{
//     if(req.method === 'GET'){
//         res.cookie('testingcookie','true')
//         User.find()
//         .then(result=>{ res.send(result)})
//         .catch(err=>{ console.log(err)})
//     }   
//     if(req.method === 'POST'){  
//         // console.log(req)   
//         User.findOne({user:req.body.user})  
       
//         .then(result=> {
//             if(result !==null){res.send('user is not available') } else {
                
//                 const user = new User(req.body)
//                 user.save()  
//                 .then(result=>{ 
//                     res.cookie('testingcookie','true')
//                     res.send('user saved')})
//                 .catch(err=>{ 
//                     let the_error = errorFun(err)
//                     res.send(the_error)
//                     // console.log(the_error)
//                     console.log(err.message)
//                 })  
//                 // console.log(hash,req.body.pass,'testing')
//             }
                
//         })   
//         .catch(err =>{ console.log(err)  })
//     } 
// } 

module.exports = {
    home,
    blog,
    Whoarewe,
    VisionMission,
    Albums,
    Newsletter,
    login
}
