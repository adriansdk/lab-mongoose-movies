require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebritiesData = [
    {
        name: "Tom Holland",
        occupation: "Spider-Man",
        catchPhrase: "Web web bitch",
    },
    {
        name: "Robert Downey Jr",
        occupation: "Iron Man",
        catchPhrase: "I am Iron Man",
    },
    {
        name: "Steve Carell",
        occupation: "Regional Manager",
        catchPhrase: "That's what she Said",
    },
    {
        name:"Adrian Visnieski",
        occupation:"Fullstack",
        catchPhrase:"I think I'm in love",
    },
    {
        name:"Alejandro Gomez",
        occupation:"Help me I don't know back-end",
        catchPhrase:"You're an idiot",
    }
 ]  

//  const moviesData = [
//    {
//     title:"Harry Potter",
//     genre:"Fantasy",
//     plot: "A crazy boy that lives under the stairs starts hallucinating magic and stuff",
//    },
//    {
//     title: "Ratatouile",
//     genre: "Horror",
//     plot: "A rat bullies a cooks apprentice",
//    },
//    {
//      title: "Naruto",
//      genre: "Adult"
//    }
// ]

// Celebrity.create(celebritiesData)