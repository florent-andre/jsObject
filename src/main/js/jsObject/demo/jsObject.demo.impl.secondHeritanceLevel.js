//TODO : implement me 
// this is an implementation of the graph that manage metadata
;(function(){
	
	jsObject.demo.impl.secondHeritanceLevel = function() {
		
		var self;
		var _super = jsObject.demo.impl.exampleOne();
		
		//constructor
	    var main = function( ) {
	    	_super.apply(self,arguments);
		};
		
		//heritance stuff
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