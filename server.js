

const expre = require('express')
const  router  = require('./config/router')
require('./config/mongoose')

 
const app = expre()
app.use(expre.urlencoded({extended: true}))
app.use(router)
app.set('view engine','ejs')
 

app.listen(9000,()=>{console.log('server has started')})