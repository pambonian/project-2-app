const express = require('express');
const router = express.Router();
const { Airplane } = require('../models');

router.get('/', function(req, res) {
    //get all AIRPLANES
    Airplane.findAll()
    .then(function(airplaneList){
        console.log('FOUND ALL AIRPLANES', airplaneList);
        //res.json({ airplanes: airplaneList});
        res.render('airplanes/index', { airplanes: airplaneList});

    })
    .catch(function(err){
        console.log("ERROR", err);
        res.json({ message: 'Error occured, Try again'});
    })
})

router.get('/new', function(req, res) {
    res.render('airplanes/new'); 
});


router.post('/', function(req, res) {
    console.log('SUBMITTED FORM', req.body);
    Airplane.create({
        modelName: req.body.modelName,
        manufacturer: req.body.manufacturer,
        price: req.body.price,
        maxRange: parseInt(req.body.maxRange),
        maxOccupants: parseInt(req.body.maxOccupants),
        maxSpeed: parseInt(req.body.maxSpeed),
        usefulLoad: parseInt(req.body.usefulLoad),
        takeoffLength: parseInt(req.body.takeoffLength),
        fuelCapacity: parseInt(req.body.fuelCapacity),
        wikiLink: req.body.wikiLink,
        imageLink: req.body.imageLink,
        videoLink: req.body.videoLink
    })
    .then(function(newAirplane) {
        console.log('NEW AIRPLANE', newAirplane.toJSON());
        newAirplane = newAirplane.toJSON();
        res.redirect(`/airplanes/${newAirplane.id}`);
    })
    .catch(function(error) {
        console.log('ERROR', error);
        res.render('404', { message: 'Airplane was not added please try again...' });
    });
    // res.redirect()
});

router.put('/:id', function(req, res) {
    console.log('EDIT FORM DATA THAT WAS SUBMITTED', req.body);
    Airplane.update({
        modelName: req.body.modelName,
        manufacturer: req.body.manufacturer,
        wikiLink: req.body.wikiLink,
        imageLink: req.body.imageLink,
        videoLink: req.body.videoLink
    }, {where: {id: Number(req.params.id)}})
    .then(function(response){
        console.log(response);
        res.redirect(`/airplanes`);
    })
    .catch(function(err){
        console.log('ERROR', err);
        res.render('404', { message: 'Update was not succesful, try again.'})
    })
})

router.delete('/:id', function(req,res){ 
    console.log('ID', req.params.id);
    Airplane.destroy({ where: { id: Number(req.params.id)}})
    .then(function(response) {
        console.log('AIRPLANE DELETED', response);
        res.redirect('/airplanes');
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'Airplane was not deleted, try again.'})
    })
})


router.get('/edit/:id', function(req, res) {
    let airplaneIndex = Number(req.params.id);
    Airplane.findByPk(airplaneIndex)
    .then(function(airplane) {
        if (airplane) {
            airplane = airplane.toJSON();
            res.render('airplanes/edit', { airplane });
        } else {
            console.log('This airplane does not exist');
            // render a 404 page
            res.render('404', { message: 'Airplane does not exist' });
        }
    })
    .catch(function(error) {
        console.log('ERROR', error);
    });
    
})

router.get('/:id', function(req, res) {
    console.log(req.params.id);
    Airplane.findByPk(Number(req.params.id))
    .then(function(airplane){
        if (airplane){
            airplane = airplane.toJSON();
            res.render('airplanes/show', {airplane});
        }else{
            res.render('404', {message: 'Airplane does not exist' })
        }
    })
    .catch(function(err){
        console.log("ERROR", err);
        res.json({ message: 'This airplane does not exist, Try again'});
        
    })
})


module.exports = router;