const mongoose = require('mongoose')
const Tag = require('./tag')
const Schema = mongoose.Schema // Schema - Object Constructor Function

const NoteSchema = new Schema({
  // field : { configuration}
  title: {
    type: String,
    required: true
  },
  body: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  tags: [{
    tag: {
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

// mongoose middleware
NoteSchema.post('save', function (next) {
  const note = this
  // note.tags.forEach(function (tagItem) {
  //     Tag.findById(tagItem.tag)
  //         .then(tag => {
  //             tag.notes.push({ note: note._id })
  //             tag.save()
  //         })
  // })
  //     next()
  console.log(note)
})

// model based on the schema 
const Note = mongoose.model('Note', NoteSchema) // OCF

module.exports = Note