//TODO : implement me 
// this is an implementation of the graph that manage metadata
;(function(){
	
//	Function.prototype.xtends = function(obj,source){
//		//slice.call(arguments, 1).forEach( function(source) {
//		  //    if (source) {
//		          for (var prop in source) {
//		            obj[prop] = source[prop];
//		          }
//		    //    }
//		      //});
//		return obj;
//	}
	
	Function.prototype.xtends = function(source){
		//slice.call(arguments, 1).forEach( function(source) {
		  //    if (source) {
		          for (var prop in source) {
		            this[prop] = source[prop];
		          }
		    //    }
		      //});
//		return this;
	}
	
	jsObject.demo.impl.secondHeritanceLevel = function() {
		
		var self;
		var _super = jsObject.demo.impl.exampleOne();
		
		//constructor
	    var main = function( ) {
	    	_super.apply(self,arguments);
		};
		
		//heritance stuff
		//main.prototype = jsObject.demo.impl.exampleOne();//_super;
		//main = extend(main,_super);
		//extend(main,_super);
//		main.xtends(main, _super);
		main.xtends(_super);
		
		//public
		main.implementationFunc = function(){
			return 200;
		};
		
		//Override and use super
//		main.publicOverrideFunc = function(){
//			return 100;
//		};
//		
//		//Override and use super
//		main.publicOverrideSuperFunc = function(){
//			return 100 + _super.publicFunc();
//		};
		
		
		self = main;
		return main;
		
	};
	
})();