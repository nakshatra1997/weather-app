 const request=require('request');

 var getWeather=(lat,lng,callback)=>{
 	request({
	url:`https://api.darksky.net/forecast/feed5993443eab5ef3dade40d931af6f/${lat},${lng}`,
	json:true
},(error,response,body)=>{
	if(!error&&response.statusCode===200)
	{
		callback(undefined,{
			temperature:body.currently.temperature,
			apparentTemperature:body.currently.apparentTemperature});
	}
	else
	{
		callback('unable to fetch weather');
	}
	
});
 };
 module.exports.getWeather=getWeather;
