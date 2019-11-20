"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var HappyMeals=function(){function a(e,t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];_classCallCheck(this,a),this.days=7,this.nameDays=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],this.reco=e,this.pattern=t,this.uptake=i,this.totalsWeek={},this.weekMap=this.weekMap()}return _createClass(a,[{key:"createMeal",value:function(i,e,t){for(var a=this,r=e.portions,o=0,s=[],n=function(){var t=a.randomEntry(a.reco);if(a.checkMax(t,i,s)){var e=s.findIndex(function(e){return e.id==t.id});0<=e?s[e].portions=s[e].portions+1:s.push({id:t.id,name:t.name,portions:1}),o++}};o<r;)n();this.weekMap[i].proposals[t]=s,this.incrementTotals(i,s)}},{key:"checkCumul",value:function(e,t){if(e.cumulative)return!0;var i=0;return void 0!==this.totalsWeek[e.id]&&void 0!==this.totalsWeek[e.id][t]&&(i=this.totalsWeek[e.id][t]),!(1<=i)}},{key:"checkMax",value:function(t,e,i){var a=this.reco.find(function(e){return e.id==t.id}).max;if(void 0===a)return!0;if(void 0!==i.find(function(e){return e.id==t.id})&&!(a-=i.find(function(e){return e.id==t.id}).portions))return!1;var r=this.reco.find(function(e){return e.id==t.id}).period,o=void 0;return"day"==r&&void 0!==this.totalsWeek[t.id]&&void 0!==this.totalsWeek[t.id][e]&&(o=this.totalsWeek[t.id][e]),"week"==r&&void 0!==this.totalsWeek[t.id]&&void 0!==this.totalsWeek[t.id].week&&(o=this.totalsWeek[t.id].week),void 0===o&&(o=0),o<a}},{key:"incrementTotals",value:function(e,t){for(var i=0;i<t.length;i++)void 0===this.totalsWeek[t[i].id]&&(this.totalsWeek[t[i].id]={}),void 0===this.totalsWeek[t[i].id][e]&&(this.totalsWeek[t[i].id][e]=0),this.totalsWeek[t[i].id][e]=this.totalsWeek[t[i].id][e]+t[i].portions,void 0===this.totalsWeek[t[i].id].week&&(this.totalsWeek[t[i].id].week=0),this.totalsWeek[t[i].id].week=this.totalsWeek[t[i].id].week+t[i].portions}},{key:"randomEntry",value:function(e){if("Array"===e.constructor.name)return e[Math.floor(Math.random()*e.length)];if("Object"===e.constructor.name){var t=Object.keys(e);return e[t[Math.floor(Math.random()*t.length)]]}}},{key:"weekMap",value:function(){for(var e={},t=0;t<7;t++){var i=this.nameDays[t];if(e[i]={proposals:{},pattern:this.pattern},void 0!==this.uptake[i])for(var a in this.uptake[i])e[i].proposals[a]=this.uptake[i][a],this.incrementTotals(i,this.uptake[i][a])}return e}},{key:"debug",value:function(){for(var e in this.provideMeals.weekMap);}},{key:"provideMeals",get:function(){for(var e in this.weekMap)for(var t=0;t<this.weekMap[e].pattern.length;t++)void 0===this.weekMap[e].proposals[t]&&this.createMeal(e,this.weekMap[e].pattern[t],t);return{weekMap:this.weekMap,totalsWeek:this.totalsWeek}}}]),a}();