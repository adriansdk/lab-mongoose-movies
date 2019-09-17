const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movies')


/* GET home page */

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            console.log(movies)
            res.render('movie-list', { allMovies: movies })
        })
})

router.get('/new-movie', (req, res, next) => {
    Celebrity.find()
        .then((AllCelebrities) => {
            res.render('new-movie', { AllCelebrities: AllCelebrities })
        })
})

router.get('/movies/details/:id', (req, res, next) => {
    let id = req.params.id
    Movie.findById(id).populate('star')
        .then((movies) => {
            res.render('movie-details', { movies: movies })
        })
})

router.post('/new-movie/creation', (req, res, next) => {
    let title = req.body.movieTitle
    let genre = req.body.movieGenre
    let plot = req.body.moviePlot
    let star = req.body.movieStar

    Movie.create({
        title: title,
        genre: genre,
        plot: plot,
        star: star,
    })
        .then((movies) => {
            res.redirect('/movies')
        })
})


module.exports = router;
