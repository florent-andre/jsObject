/**
 * Add a prototypal function to Function for copying function of object
 * Use this for define the heritance of your objects
 */
;(function(){
	
	Function.prototype.xtends = function(source){
		for (var prop in source) {
			this[prop] = source[prop];
	    }
	};
	
})();