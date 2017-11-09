console.log('starting app');
setTimeout(()=>{
console.log('inside of callback');
},2000);
setTimeout(()=>
	{
        console.log('again call');
	},0);
//the error function will be called after 2 seconds
console.log('finishing up');

//async behaviour ka matlab ye hai ki pehle line 1 ka console kaam krega
//fir 3 line ka console kaam krega and fir tmaara function kaam krega
//agar tm 2000 ki jagah 0 ms krdo

//LETS KNOW WHAT IS HAPPENING BEHIND THE SCENE
