//TODO : implement me 
// this is an implementation of the graph that manage metadata
;(function(){
	
	function extend(obj,source){
		//slice.call(arguments, 1).forEach( function(source) {
		  //    if (source) {
		          for (var prop in source) {
		            obj[prop] = source[prop];
		          }
		    //    }
		      //});
		return obj;
	}
	
	jsObject.demo.impl.exampleOne = function() {
		
		var self;
		var _super = jsObject.demo.abs();
		var initValueFirstImpl;
		//constructor
	    var main = function( ) {
	    	_super.apply(self,arguments);
	    	initValueFirstImpl = 0.2;
		};
		
		//heritance stuff
		//main.prototype = jsObject.demo.abs();//_super;
		//main.prototype = jsObject.demo.abs.prototype;//_super;
		//main.prototype = _super.prototype;//_super;
		main = extend(main,_super);//_super;
		
		main.getInitValueFirstImpl = function(){
			return initValueFirstImpl;
		}
		
		//public
		main.implementationFunc = function(){
			return 100;
		};
		
		//Override and use super
		main.publicOverrideFunc = function(){
			return 100;
		};
		
		//Override and use super
		main.publicOverrideSuperFunc = function(){
			return 100 + _super.publicFunc();
		};
		
		
		self = main;
		return main;
		
	};
	
})();