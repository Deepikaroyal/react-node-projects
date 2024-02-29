const mongoose =  require('mongoose')
var Transcation
const TranscationSchema = new mongoose.Schema({
    senderAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
      },
      receiverAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
});

Transcation = module.exports = mongoose.model('Transcation',TranscationSchema)
