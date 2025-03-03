import mongoose from 'mongoose'

// Schema
const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answers: [Number],
  explanation: String,
  history: {
    type: [{
      _id: false, // Prevent mongoose from automatically creating ids for subdocuments
      givenAnswer: String,
      wasCorrect: Boolean,
    }],
    select: false,
  },
  stats: {
    totalAnswers: Number, // Should equal history.length
    totalCorrect: Number, // Should equal history.filter(q => wasCorrect).length
  },
})

export default mongoose.model('Question', questionSchema)
