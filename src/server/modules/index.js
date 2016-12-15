'use strict'
import express from 'express'
var router = express.Router()

const votes = {}

router.get('/votes',(req,res)=>{
  res.json(votes)
})

router.post('/vote/:id',(req,res)=>{
  // con let el ambito de la variable es valido solo en el metodo, funcion o if que se declara
  let id=req.params.id
  if(votes[id] === undefined){
    votes[id] = 1
    res.json(votes[id])
  }
  else{
    votes[id] ++
    res.json(votes[id])
  }

})




export default router
