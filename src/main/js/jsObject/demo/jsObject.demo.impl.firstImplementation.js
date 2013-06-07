//TODO : implement me 
// this is an implementation of the graph that manage metadata
;(function(){
	
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
		main.xtends(_super);
		
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