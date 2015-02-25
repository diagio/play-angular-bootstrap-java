
//Remove element from array by key name and value
Array.prototype.removeValue = function(name, value){
	try
	{
   var array = $.map(this, function(v,i){
      return v[name] === value ? null : v;
   });
   this.length = 0; //clear original array
   this.push.apply(this, array); //push all elements except the one we want to delete
	}
	catch(e)
	{
		alert(e);
	}
}
