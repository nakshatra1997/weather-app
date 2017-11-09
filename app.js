const request=require('request');
request({
	url:'http://maps.googleapis.com/maps/api/geocode/json?address=Ghaziabad',
	json:true
},(error,response,body)=>{
	console.log(`latitude is ${body.results[0].geometry.location.lat} and longitude is ${body.results[0].geometry.location.lng}`);
});