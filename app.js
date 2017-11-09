
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
geocode.getcodeAddress(argv.address,(errorMessage,results)=>
	{
       if(errorMessage)
       {
       	console.log(errorMessage);
       }
       else
       {
       	console.log(JSON.stringify(results,undefined,2));
       }
	}
});
