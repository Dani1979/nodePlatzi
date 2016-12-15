'use strict'

import mongoose from 'mongoose'

//defined Schema
let voteSchema = new mongoose.Schema({
  showId:{type : Number , required: true, unique:true},
  count:{type : Number, default: 0}
})

//export Schema. First params is thename of schema and the second param is the varible with the schema definition
export default mongoose.model('Vote', voteSchema)
