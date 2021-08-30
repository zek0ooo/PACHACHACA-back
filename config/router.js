const home = require('../controllers/home')

// const express = require('express');
// const router = express.Router()

const { Router } = require('express');
const router = Router()



const cors = require('cors')
const control = require('../controllers/controller')
const cookieparser = require('cookie-parser')



router.use(cookieparser())
router.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))



// router.all('/login',control.login)
router.all('/blog',control.blog)
router.all('/Whoarewe',control.Whoarewe)
router.all('/VisionMission',control.VisionMission)
router.all('/Newsletter',control.Newsletter)
router.all('/Albums',control.Albums)



router.all('/',control.home)



module.exports = router