const express = require('express');
const router = express.Router();
const interndb = require('./models/intern');

// get data from database
router.get('/intern/:name' ,function(req,res){

    res.send("hello " + req.params.name);

});
// add data to database
router.post('/intern/:name' ,function(req,res){

        res.send('hello ' + req.params.name);
});
// // udpdate
// router.put('/intern/:id' ,function(req,res){

//     res.send({type: 'PUT'});

// });

// //delete
// router.delete('/intern/:id' ,function(req,res){

//     res.send({type: 'DELETE'});

// });

//exporting
module.exports= router;