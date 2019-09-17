const mongoose = require('mongoose')
const Schema = mongoose.Schema


const moviesSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cover: String,
    star: {type: Schema.Types.ObjectId, ref:'Celebrities', },
})

const Movies = mongoose.model('Movies', moviesSchema)

module.exports = Movies