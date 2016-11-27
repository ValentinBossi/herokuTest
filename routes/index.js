var express = require('express');
var router = express.Router();

var db = require('../queries');

function getAllPuppies(req, res, next) {
    db.any('select * from pups')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL puppies'
                });
            console.log(data[0]);
        })
        .catch(function(err) {
            return next(err);
        });
}


router.get('/api/puppies', getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;