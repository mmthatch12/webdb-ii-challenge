const express = require('express')

const db = require('../data/db-config')

const router = express.Router()

router.get('/', (req, res) => {
    db('cars2')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load data'})
        })
})

router.post('/', (req, res) => {
    const carBody = req.body;

    if(carBody.vin && carBody.make && carBody.model && carBody.mileage){
        db('cars2')
            .insert(carBody, 'id')
            .then(([id]) => {
                db('cars2')
                .where({ id })
                .first()
                .then(car => {
                    res.status(200).json(car)
                })
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: 'Could not load accounts'})
            })
    } else {
        return res.status(400).json({ message: "Vin, Make, Model, and Mileage are required"})
    }
})

module.exports = router