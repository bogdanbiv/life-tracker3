/**
 * Created by bogdanbiv on 6/17/14.
 */
var express = require('express')
    , mongoskin = require('mongoskin')
    , bodyParser = require('body-parser');

var logger = require('morgan');


var app = express()
app.use(bodyParser())

var db = mongoskin.db('mongodb://@localhost:27017/test', {safe:true})

app.param('collectionName', function(req, res, next, collectionName){
    req.collection = db.collection(collectionName)
    return next()
})

app.get('/', function(req, res, next) {
    res.send('please select a collection, e.g., /collections/messages')
})

app.get('/collections/:collectionName', function(req, res, next) {
    req.collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
        if (e) return next(e)
        res.send(results)
    })
})

app.post('/collections/:collectionName', function(req, res, next) {
    req.collection.insert(req.body, {}, function(e, results){
        if (e) return next(e)
        res.send(results)
    })
})

app.get('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.findById(req.params.id, function(e, result){
        if (e) return next(e)
        res.send(result)
    })
})

app.put('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.updateById(req.params.id, {$set:req.body}, {safe:true, multi:false}, function(e, result){
        if (e) return next(e)
        res.send((result===1)?{msg:'success'}:{msg: "error"})
    })
})

app.del('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.removeById(req.params.id, function(e, result){
        if (e) return next(e)
        res.send((result===1)?{msg:'success'}:{msg: "error"})
    })
})

app.use(logger('dev')); 					// log every request to the console
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users


app.use(bodyParser()); 						// pull information from html in POST

app.listen(3000);
console.log('Magic happens on port 3000'); 			// shoutout to the user