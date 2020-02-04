const express = require('express');

const router = express.Router()

const Map = require('../models/map');
const Mapp = require('../models/Mapp');

router.get('/', (req,res,next)=>{
    res.render('home')
})

router.get('/data', (req,res,next)=>{
    res.render('data')
})

router.post('/data', (req,res,next)=>{
    
     const lat = req.body.lat;
     const lng = req.body.lng;

     const map =new Map({
         lat:lat,
         lng:lng,
         mapp:[]
     })

     map.save()
     .then(result=>{
         res.redirect('/');
     })
     .catch(err=>{
         console.log(err)
     })
})

router.get('/newdata', (req,res,next)=>{
    res.render('newdata')
})

router.post('/newdata', async (req,res,next)=>{
    const lat = req.body.lat;
     const lng = req.body.lng;
     const accident = req.body.accident;

     const mapp= new Mapp({
        lat:lat,
        lng:lng,
        accident:accident
     })

     try {
         let maps = await mapp.save()
         res.redirect('/newdata')
     } catch (error) {
       console.log(error)  
     }
})


//router.get('/map',(req,res,next)=>{
   // Map.find()
   // .then(doc=>{
      // res.send(doc)
    //})
   // .catch(err=>{
       // console.log(err)
    //})

//})

router.get('/map', async (req,res,next)=>{
    try {
        let map = await Map.find()
        res.status(201).send(map)
    } catch (error) {
        console.log(error)
     }
})
router.get('/mapp', async (req,res,next)=>{
    try {
       var mapp = await Mapp.find()
       var d = []
       mapp.forEach(option=>{
           if( option.accident>5){
           d.push(option)
           }
       })
       res.status(201).send(d)

    } catch (error) {
        console.log(error)
    }
})



module.exports = router;