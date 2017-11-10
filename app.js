
const yargs=require('yargs');

const geocode=require('./geocode/geocode.js');//you can omit .js extension
const weather=require('./weather/weather.js');
const argv=yargs
   .options({
               a:{
               	demand:true,
               	alias:'address',
               	describe:'address to fetch weather',
               	string:true
               }
            })
   .help()
   .alias('help','h')
   .argv;
geocode.geocodeAddress(argv.address,(errorMessage,results)=>
	{
       if(errorMessage)
       {
       	console.log(errorMessage);
       }
       else
       {
       	console.log(results.address);
       	weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
	if(errorMessage)
	{
       console.log(errorMessage);
	}
	else
	{
       console.log(`it's currently ${weatherResults.temperature}.It feels like ${weatherResults.apparentTemperature}`);
	}
});
       }
	}
);
