'use strict'
import express from 'express'
import Vote from 'src/server/models'
var router = express.Router()

const votes = {}

router.get('/votes',(req,res)=>{
  // el segundo parametro de find es un callback. el primero es un err y el siguiente un response con el doc.
  console.log('get /votes')
  Vote.find({},(err,docs)=>{
    if(err){
      return res.sendStatus(500).json(err)
    }
      res.json(docs)
  })
})

router.post('/vote/:id',(req,res)=>{

  //nos creamos una funcion mpara modularizar el callback del save

  var onSave = function(vote){
    return function (err){
      if(err){
        return res.sendStatus(500).json(err)
      }
      res.json(vote)
    }
  }

  // con let el ambito de la variable es valido solo en el metodo, funcion o if que se declara
  let id=req.params.id

  Vote.findOne({showId: id},(err,res)=>{
    let vote = new Vote()
    if(err){
      res.sendStatus(500).json(err)
    }
    if(res){
      //actualizo
      res.count ++
      res.save(onSave(res))
    }
    else{
      //si no existe se crea
      vote.showId = id
      vote.count=1
      vote.save(onSave(vote))
    }
  })
})




export default router
