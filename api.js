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

// See http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/

(function(global) {
  // Maintain a map of already-encountered types for super-fast lookups. This
  // serves the dual purpose of being an object from which to use the function
  // Object.prototype.toString for retrieving an object's [[Class]].
  var types = {};

  // Return a useful value based on a passed object's [[Class]] (when possible).
  Object.toType = function(obj) {
    var key;
    // If the object is null, return "Null" (IE <= 8)
    return obj === null ? "Null"
      // If the object is undefined, return "Undefined" (IE <= 8)
      : obj === undefined ? "Undefined"
      // If the object is the global object, return "Global"
      : obj === global ? "Global"
      // Otherwise return the XXXXX part of the full [object XXXXX] value, from
      // cache if possible.
      : types[key = types.toString.call(obj)] || (types[key] = key.slice(8, -1));
  };
}(this));

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
  var tempId = item["id"];
  console.log('60 PostItem: ' + tempId);
  delete item["id"];
  for (key in item) {
    if (key[0] === ('_') && key != '_id') { delete item[key]; }
  }
  console.log('65 PostItem: ' + JSON.stringify(item));

  req.collection.insert(item, {safe:true, multi:false}, function(e, result){
    if (e) return next(e);
    console.log("result: " + Object.keys(result[0]) + "; tempId: " + tempId);
    if ((Object.toType(result) === "Array") && (result.length === 1)) {
      result[0]["id"] = tempId;
      res.send(result[0]);
     } else {
      res.send({msg: "error " + e});
    }
  });

  return;
  /*req.collection.updateById(req.params.id, {$set:item}, {safe:true, multi:false}, function(e, result){
    if (e) return next(e);
    res.send((result===1)? item : {msg: "error"});
  });*/
})

app.get('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.findById(req.params.id, function(e, result){
        if (e) return next(e);
        result[0].id = result[0]._id;
      res.send(result);
    });
})

// insert OR !!! UPDATE
app.put('/collections/:collectionName/:id', function(req, res, next) {
  console.log('95 req.body: ' + typeof(req.body) + '; ' + JSON.stringify(req.body));
  var item = new Object(req.body);
  item.id = item._id;
  console.log('99 item: ' + JSON.stringify(item));
  rqBody_id = req.body._id;
  rqBodyid = req.body.id;
  delete req.body._id;
  delete req.body.id;
  var paramId = req.params.id;
  if ((paramId.length > 10) && (paramId.slice(0, 10) === "__tempID__")) {
    console.log("Insert: ");
    req.collection.insert(req.body, function(e, results) {
      if (e || (Object.toType(results) !== "Array") && (results.length !== 1)) {
        console.log("e: " + e + "ERR results: " + Object.toType(results) + "; Res: " + results.length +
          " " + results[0] + "; resultsKEYS " + Object.keys(results[0]));
        return next(e);
      } else {
        results[0].id = paramId;
        res.send(results[0]);
      }
    });
  } else {
    console.log("Update: ");
    // test if paramId === req.body._id and req.body.id
    req.collection.updateById(
      paramId, {$set: req.body},
      {safe:true, multi:false, strict:true},
      function(e, results){
        if (e || results !== 1) {
          return next(e);
        }
        console.log("e: " + e + "ERR results: " + Object.toType(results) + ", result " + results);
        req.body._id = paramId;
        req.body.id = paramId;
        console.log("rqBody: " + req.body);
        res.send(req.body);
      });
  }

  console.log('put id '+ req.params.id);
});

app.del('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.removeById(req.params.id, function(e, result){
        if (e) return next(e);
        res.send((result===1)?{msg:'success'}:{msg: "error"});
    })
})

app.use(logger('dev')); 					// log every request to the console
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users

app.listen(3000);
console.log('Magic happens on port 3000'); 			// shoutout to the user

module.exports = app;