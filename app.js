const request=require('request');
const yargs=require('yargs');

const geocode=require('./geocode/geocode.js');//you can omit .js extension
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
geocode.getcodeAddress(argv.address);
request({
	url:`http://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}`,
	json:true
},(error,response,body)=>{
	if(error)
	{
		console.log('unable to connect google server');
	}
	else if(body.status=='ZERO_RESULTS')
	{
		console.log('unable to find the address');
	}
	else
	{
	   console.log(`latitude is ${body.results[0].geometry.location.lat} and longitude is ${body.results[0].geometry.location.lng}`);	
	}
	
});