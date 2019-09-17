const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');


/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((allThecelebrities) => {
        console.log(allThecelebrities)
        res.render('celebrity-list', {allCelebrities : allThecelebrities,});
    })
});

router.get('/new-celeb', (req,res,next) =>{
    res.render('new-celeb')
})

router.get('/celebrities/details/:id', (req,res,next) =>{
    // res.render('celebrities-details')
    let id = req.params.id
    Celebrity.findById(id)
    .then((celebritiesObject) =>{
        console.log(celebritiesObject)
        res.render('celebrities-details', {celebsDetails: celebritiesObject})
    }).catch
})

router.get('/new-celeb', (req,res,next) =>{
    res.render('new-celeb')
})

router.post('/new-celeb/creation', (req,res,next)=>{
    let name = req.body.celebName
    let occupation = req.body.celebOccupation
    let catchPhrase = req.body.celebCatchPhrase

    Celebrity.create({
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase,
    })
    .then((Celebrities)=> {
        res.redirect('/celebrities')
    })
})
  

router.get('/celebrities/edit/:id', (req,res,next) =>{
    let id = req.params.id
    Celebrity.findById(id)
    .then((theCelebrity)=>{
        res.render('edit', {currentCelebrity : theCelebrity})
    })
})

router.post('/celebrities/update/:id', (req,res,next)=>{
    let id = req.params.id
    Celebrity.findByIdAndUpdate(id, {
        name: req.body.newName,
        occupation: req.body.newOccupation,
        catchPhrase: req.body.newCatchPhrase,
    })
    .then(()=>{
        res.redirect(`/celebrities/details/${id}`)
    })
    .catch((err) =>{
        next(err);
      })
})

// router.post('/books/update/:id', (req,res,next) =>{
//     let id = req.params.id;
  
//     Book.findByIdAndUpdate(id, {
//       title: req.body.theTitle,
//       author: req.body.theAuthor,
//       image: req.body.image,
//     })
//     .then((result) =>{
//       res.redirect('/books/details/'+id)
//     })
//     .catch((err) =>{
//       next(err);
//     })
//   })


module.exports = router;
