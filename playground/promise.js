// var somePromise=new Promise((resolve,reject)=>{
// // resolve('heyy i am learning');
// reject('trying rejection');
// });
// somePromise.then((message)=>{console.log(message);},(errorMessage)=>{console.log(errorMessage);});
var asyncAdd=(a,b)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(typeof a==='number' && typeof b==='number')
			{
                resolve(a+b);
			}
			else
			{
				reject('arguments must be numbers');
			}
		},1500);
	});
};
//without catch*********************************************************88
// asyncAdd(5,7).then((res)=>
// {
// 	console.log('result after first promise:',res);
// 	return asyncAdd(res,33);
// },
// (errorMessage)=>
// {
//     console.log(errorMessage);
// }).then((res)=>{
// 	console.log("result after 2nd promise",res);},
// (errorMessage)=>{
// 	console.log('error:',errorMessage);
// });
//AFTER USING CATCH*************************************************************88
asyncAdd(5,7).then((res)=>
{
	console.log('result after first promise:',res);
	return asyncAdd(res,33);
}).then((res)=>{
	console.log("result after 2nd promise",res);})
.catch((errorMessage)=>
	{
		console.log(errorMessage);
	});