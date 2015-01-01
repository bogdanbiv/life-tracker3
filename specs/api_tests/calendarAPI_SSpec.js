/**
 * Created by bogdanbiv on 6/17/14.
 */

//var superagent = require('superagent');
//var expect = require('expect.js');

define([
  //'intern!object',
  //'intern/chai!',
  //'intern/dojo/node!chai-as-promised',
  //'intern/chai!assert',
  'require',
  'dojo/request',
  'dojo/Deferred',
/*  'intern/dojo/node!mongoose',
  'intern/dojo/node!util',*/
  'dojo/date/stamp'
], function (/*registerSuite, chai, chaiAsPromised, assert,*/
             require, request, Deferred, mongoose, util, stamp) {
  //chai.use(chaiAsPromised);
  debugger;
  var progressSpy = sinon.spy();
  var CalItem;
  var testCalItem;
  var beforeEachDfd;
  var afterAll;
  var Schema = mongoose.Schema;

  // 'express rest api server'
  describe('express rest api server', function() {
      before(function() {
        assert.equal(2 + 2, 4, "This had better be true");

        afterAll = new Deferred();
        mongoose.connect('mongodb://localhost:27017/collections/calitems');
        afterAll.then(function(val) {
          console.log('afterAllDfd: ');
          mongoose.connection.close();
        }, function(err) {
          console.log('mongoose connection was not closed due to: ' + err)
        });


        var calItemSchema = new Schema({
          /*_id: {type:Schema.ObjectId},*/
          summary: String,
          startTime: String,
          endTime: String,
          calendar: String,
          allDay: Boolean
        });
        CalItem = mongoose.model('calItem', calItemSchema);
      });

      after(function() {
        afterAll.resolve('specs finished');
      });

      beforeEach(function() {
        var startDate, stopDate;
        beforeEachDfd = new Deferred();

        startDate = new Date((new Date()).setHours(8));
        endDate = new Date((new Date()).setHours(9));

        testCalItem = new CalItem({
          "summary": "New event 8",
          "startTime": stamp.toISOString(startDate),
          "endTime": stamp.toISOString(endDate),
          "calendar": "cal1",
          "allDay":false
        });

        testCalItem.save(function(err, item, numberAffected) {
          if (!err && numberAffected === 1) {
            console.log('testCalItem: ' + JSON.stringify(item));
            beforeEachDfd.resolve(testCalItem);
          } else {
            beforeEachDfd.reject('Err: ' + err + '; Affected: ' + numberAffected + '; ' + JSON.stringify(item));
          }
        });
        // return beforeEachDfd;
      });
      /*'dummy': function (done) {}*/

      it('create object', function (done) {
        return beforeEachDfd.then(function() {
          // var dfd = this.async(1000);
          var startDate, stopDate;
          var newid = new mongoose.Types.ObjectId();

          startDate = new Date((new Date()).setHours(10));
          endDate = new Date((new Date()).setHours(11));


          return request.put('http://localhost:3000/collections/calitems/' + newid, {
            data:{
              "_id": newid,
              "summary":"New event 10",
              "startTime": stamp.toISOString(startDate),
              "endTime": stamp.toISOString(endDate),
              "calendar":"cal1",
              "allDay":false
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            handleAs: 'json',
            sync: false
          }).then(function(text){
              assert.strictEqual(text.summary, 'New event 10', 'checking calItem.summary');
              return text;
  //            expect(res.body.length).to.eql(1);
  //            expect(res.body[0]._id.length).to.eql(24);
  //            _id = res.body[0]._id;
          }, function() {

          });
        });
      });
      it('retrieves an object', function(done) {
        return beforeEachDfd.then(function() {
          request.get('http://localhost:3000/collections/calitems/' + beforeEachDfd._id,
              {sync: false, handleAs: 'json'})
            .then(function(res) {
              console.log('Object GGGGGGG: ' + res + ' retrieved.');
              /*dfd.reject('Error getting object' + err.stack);
              dfd.resolve('Object ' + text1 + ' retrieved.');*/
          },
          function(err) {
            console.log(err);
          });
        });

        /*retrieved = request.get(
          'http://localhost:3000/collections/calitems/' + beforeEachDfd._id,
          {sync: false}).then(function() {
                console.log('Object ' + JSON.stringify(arguments) + ' retrieved.');
        },function(err) {
            console.log(err);
        });

        return retrieved;*/

        /*testObj = request.put('http://localhost:3000/collections/calitems/5',
          {
            data:{"_id":5,"summary":"New event 5","startTime":"2014-07-08T06:00:00.000Z","endTime":"2014-07-08T06:15:00.000Z","calendar":"cal1","allDay":false},
            sync: false,
            handleAs: "json"
          }).then(function(calItem_ids) {
            if (Array.isArray(calItem_ids) && calItem_ids.length > 0) {
              return calItem_ids;
            } else {
              dfd.reject('returned data is of type: ' + typeof(calItem_ids));
            }
          }, function(err) {
            dfd.reject('Error creating test object ' + err.stack);
          }).then(function(calItem_ids1) {
            request.get('http://localhost:3000/collections/calitems/' + calItem_ids1[0]._id, {sync: false}).then(dfd.callback(function(text1) {
                    dfd.resolve('Object ' + text1 + ' retrieved.');
                  }),
                  function(err) {
                    console.log(err);
                    dfd.reject('Error getting object' + err.stack);
                  });
          });*/ // dfd1.reject.bind(dfd1)
      });

    /*it('retrieves an object', function(done){
        superagent.get('http://localhost:3000/collections/test/'+_id)
            .end(function(e, res){
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(typeof res.body).to.eql('object')
                expect(res.body._id.length).to.eql(24)
                expect(res.body._id).to.eql(_id)
                done()
            })
    })

    it('retrieves a collection', function(done){
        superagent.get('http://localhost:3000/collections/test')
            .end(function(e, res){
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(res.body.length).to.be.above(0)
                expect(res.body.map(function (item){return item._id})).to.contain(_id)
                done()
            })
    })

    it('updates an object', function(done){
        superagent.put('http://localhost:3000/collections/test/'+_id)
            .send({name: 'Peter'
                , email: 'peter@yahoo.com'})
            .end(function(e, res){
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(typeof res.body).to.eql('object')
                expect(res.body.msg).to.eql('success')
                done()
            })
    })

    it('checks an updated object', function(done){
        superagent.get('http://localhost:3000/collections/test/'+_id)
            .end(function(e, res){
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(typeof res.body).to.eql('object')
                expect(res.body._id.length).to.eql(24)
                expect(res.body._id).to.eql(_id)
                expect(res.body.name).to.eql('Peter')
                done()
            })
    })
    it('removes an object', function(done){
        superagent.del('http://localhost:3000/collections/test/'+_id)
            .end(function(e, res){
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(typeof res.body).to.eql('object')
                expect(res.body.msg).to.eql('success')
                done()
            })
    })*/
  });
});