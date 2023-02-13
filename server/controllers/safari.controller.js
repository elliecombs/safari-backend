//Import models
const { find } = require("../models/safari.model");
const Safari = require("../models/safari.model");
//Send from Express with function

//Server Test Route
module.exports.index = (req, res) => {
    res.json({ message: "Hello there!" })
}

//GET/FIND ALL 
module.exports.getAllSafari = (req, res) => {
//Promise function/Route capability 
    Safari.find()
        //then success: get all safaris
        .then((allSafari) => res.json(allSafari))
        //catch errors 
        .catch((err) => {
            res.status(400).json({ message: 'There is an error finding all', error: err})
});}

//CREATE NEW
module.exports.createNewSafari = (req, res) => {
    //const {name} = req.body
    console.log(req.body)
    Safari.create(req.body)
    .then(brandNewSafari => res.json(brandNewSafari))
    .catch((err) => {
        res.status(400).json({ message: 'There is an error creating a new Safari', error: err})
});}

//GET ONE/BY ID
module.exports.findOneSafari = (req, res) => {
    Safari.findOne({_id: req.params.id}) 
    .then(findOneSafari => {
        console.log(findOneSafari)
        if (!findOneSafari) {
            res.status(400).json({ message: 'Find one Safari came back as null'})
        }
        else{ res.json(findOneSafari)
        }
    })
    .catch((err) => {
        console.log("I messed up")
        res.status(400).json({ message: 'There is an error finding one', error: err})
});}

//UPDATE
module.exports.updateOneSafari = (req, res) => {
    Safari.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateSafari => {
            res.json({ safari: updateSafari, message:'Safari updated successfully' })
        })
        .catch((err) => {
            res.status(400).json({ message: 'There is an error updating this Safari', error: err })
        });}

//DELETE
module.exports.deleteOneSafari = (req, res) => {
    Safari.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result})
    })
    .catch((err) => {
        res.status(400).json({ message: 'There is an error in the deleting of this Safari', error: err})
    });}