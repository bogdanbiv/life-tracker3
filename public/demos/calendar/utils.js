define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/fx",
	"dojo/store/Memory", 
    "dojo/store/JsonRest",
    "dojo/store/Observable",
    "dojo/store/Cache",
		"dojo/_base/Deferred"
], function(
	declare,
	lang,
	fx,
	Memory,
  JsonRest,
	Observable,
  Cache,
	Deferred
){

	var utils = lang.getObject("demo.utils", true);
  // console.log("utils7777777: " + Object.keys(utils) + "; type: " + typeof(utils));
	utils.id = 1;

	utils.initHints = function(node){
		// Display different hint every 10 seconds 
		var hints = [
			"Hint: Create an event by clicking and dragging on the grid while maintaining the control key",
			"Hint: Move an event by clicking on it and dragging it",
			"Hint: Resize an event by clicking on one of its ends and dragging it"
		];
		
		var hintIdx = 0;
		node.innerHTML = hints[0];
								
		setInterval(function(){
			fx.fadeOut({node: node, 
				onEnd: function(){
					hintIdx = hintIdx+1>hints.length-1 ? 0 : hintIdx+1;
					node.innerHTML = hints[hintIdx];
					fx.fadeIn({node: node}).play(500); 									
				}
			}).play(500);
		}, 10000);
	};
	
	utils.getStartOfCurrentWeek = function(calendar){
		return calendar.floorToWeek(new calendar.dateClassObj());
	};
	
	utils.createDefaultStore = function(calendar){
		var modelBase = [
			{day: 1, start: [10,0], duration: 1400},
			{day: 2, start: [10,30], duration: 120},
			{day: 2, start: [12,0], duration: 240},
			{day: 3, start: [6,0], duration: 180},
			{day: 3, start: [0,0], duration: 2880, allDay: true}
		];
		
		var someData = [];
								
		var startOfWeek = utils.getStartOfCurrentWeek(calendar);
		var memory, cache;
		for (var id=0; id<modelBase.length; id++) {
			var newObj = {
				id: id,
				summary: "New Event " + id,
				startTime: new calendar.dateClassObj(startOfWeek.getTime()),
				endTime: new calendar.dateClassObj(startOfWeek.getTime()),
				calendar: id%2 == 0 ? "cal1" : "cal2",
				allDay: modelBase[id].allDay
			};

			newObj.startTime = calendar.dateModule.add(newObj.startTime, "day", modelBase[id].day);
			newObj.startTime.setHours(modelBase[id].start[0]);
			newObj.startTime.setMinutes(modelBase[id].start[1]);

			newObj.endTime = calendar.dateModule.add(newObj.startTime, "minute", modelBase[id].duration);

			someData.push(newObj);
		}
		
		//this.id = id;

		var ExtJsonStore = declare(JsonRest, {
			/*add: function(object, options) {
				console.log("ExtJSON: " + Object.keys(this));
				var tempId = options && options.temporaryId;
				console.log("addItemtemporaryId: " + item["temporaryId"] + "; " + item["id"] + "; " + item["_id"]);
				var def = new Deferred();
				Deferred.when(this.inherited(arguments), function(item){
					item.temporaryId = tempId;
					console.log("addItemtemporaryId: " + item["temporaryId"] + "; " + item["id"] + "; " + item["_id"]);
					def.resolve(item);
				});
				return def;
			}*/
		});

		console.log("JsonStore: " + Object.keys(JsonRest) + "; type: " + typeof(JsonRest));

    var calendarItemStore = new ExtJsonStore({
			target:"/collections/calitems/", idProperty: 'id', syncMode: false
		});
    /* calendarItemStore.get().then(function(bill){
        // called once Bill was retrieved
    });*/
    memory = new Memory({data: someData});
		cache = new Cache(calendarItemStore, memory);
		var obsStore = new Observable(memory);
		return new Observable(calendarItemStore);
	};
	
	utils.configureInteractiveItemCreation = function(calendar) {
		// Enable creation of event interactively by ctrl clicking grid.
		var createItem = function(view, d, e) {
			console.log("createItem 106");
			// create item by maintaining control key
			if(!e.ctrlKey || e.shiftKey || e.altKey){
				return null;
			}
		
			// create a new event
			var start, end;
			var colView = calendar.columnView;
			var cal = calendar.dateModule;
			
			if(view == colView){
				start = calendar.floorDate(d, "minute", colView.timeSlotDuration);
				end = cal.add(start, "minute", colView.timeSlotDuration); 
			}else{
				start = calendar.floorToDay(d);
				end = cal.add(start, "day", 1);
			}
			
			var item = {
				id: "__tempID__" + utils.id,
				summary: "New event " + utils.id,
				startTime: start,
				endTime: end,
				calendar: "cal1",
				allDay: view.viewKind == "matrix"
			};
			
			utils.id++;

			// console.log("AddFn: " + calendar.store.add);
			// console.log("item: " + Object.keys(calendar.store.add(item)));
			console.log("item: " + Object.keys(item));
			console.log("item: " + item["id"]);
			return item;							
		};
		
		calendar.set("createOnGridClick", true);
		calendar.set("createItemFunc", createItem);
	};
					
	return utils;
});

