/**
 * Abstract definition of the graph object
 */
;(function(){
	
	jsObject.demo.abs = function() {
		
		var self;
		var attribute;
	    var initValue;
		
		//constructor
	    var main = function( ) {
	    	initValue = 0.1;
		};
		
		//public
		
		main.getInitValue = function(){
			return initValue;
		}
		
		// Get/set for private attribute
	    main.attribute = function(_){
			if (!arguments.length) return attribute;
			attribute = _;
		    return graph;
		};
		
		main.publicFunc = function(){
			return 10;
		}
		
		
	    main.publicOverrideFunc = function(){
	    	return 10;
	    };
	    
	    main.publicOverrideSuperFunc = function(){
	    	return 10;
	    };
		
		//protected
		
		// Define the url where to load the graph data
		//simplest implementation return the uri defined for the object
		main._protectedFunc = function(){
	    	return 10;
	    };
	    
	    
		//private
	    var privateFunc = function(){
	    	return 10;
	    }
	    
        
		self = main;
		return main;
		
	};
	
})();
