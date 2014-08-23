/**
 * Created by bogdanbiv on 6/17/14.
 */
var express = require('express')
    , mongoskin = require('mongoskin')
    , bodyParser = require('body-parser');

var logger = require('morgan');
var util = require("util");

var app = express();
app.use(bodyParser());

var db = mongoskin.db('mongodb://localhost:27017/collections/calitems'/*, {safe:true}*/);

app.param('collectionName', function(req, res, next, collectionName){
    req.collection = db.collection(collectionName);
    return next();
});

app.get('/', function(req, res, next) {
    res.send('please select a collection, e.g., /collections/messages');
});

app.get('/collections/:collectionName', function(req, res, next) {
    req.collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
        if (e) return next(e);
        results = results.map(function(item){item.id=item._id; return item;});
        res.send(results);
    });
})

app.post('/collections/:collectionName', function(req, res, next) {
  /*console.log('req.body: ' + JSON.stringify(req.body));*/
  var item = new Object(req.body);
  item.id = item._id;
  for (key in item) {
    if (key[0] === ('_') && key != '_id') { delete item[key]; }
  }
  console.log('40 item: ' + JSON.stringify(item));

  req.collection.updateById(req.params.id, {$set:item}, {safe:true, multi:false}, function(e, result){
    if (e) return next(e);
    res.send((result===1)? item : {msg: "error"});
  });
})

app.get('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.findById(req.params.id, function(e, result){
        if (e) return next(e);
        res.send(result);
    });
})

// insert OR !!! UPDATE
app.put('/collections/:collectionName/:id', function(req, res, next) {
  /*console.log('57 req.body: ' + typeof(req.body) + '; ' + JSON.stringify(req.body));
  var item = new Object(req.body);
  item = JSON.parse(req.body);
  item.id = item._id;
  console.log('40 item: ' + JSON.stringify(item));*/
  delete req.body._id;
  console.log('put id '+ req.params.id);
  req.collection.updateById(req.params.id, {$set: req.body}, {safe:true, multi:false, upsert:true},
    function(e, results){
    if (e || results !== 1) {
      console.log('update affected no rows, result: ' + results + '; t: ' + typeof(results));
      return next(e);
    }
    req.body._id = req.params.id;
    res.send(req.body);
  });
})

app.del('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.removeById(req.params.id, function(e, result){
        if (e) return next(e);
        res.send((result===1)?{msg:'success'}:{msg: "error"});
    })
})

app.use(logger('dev')); 					// log every request to the console
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users

app.listen(3000);
console.log('MagicCC happens on port 3000'); 			// shoutout to the user
