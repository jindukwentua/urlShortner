const mongoose = require('mongoose');

// mongoose schema
const urlSchema = new mongoose.Schema(
  {
    urlCode: { type: String, required: true },
    shortUrl: { type: String, required: true },
    longUrl: { type: String, required: true },
    date: { type: String, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Url', urlSchema)