const pro1= Promise.reject(3);
const pro2=42;
const pro3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'resolved promise3')
})
Promise.all([pro1,pro2,pro3]).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})
//allsetteled static method -- it returns or settles 
const prom1= Promise.reject(3);
const prom2=42;
const prom3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'resolved promise3')
})
Promise.allSettled([prom1,prom2,prom3]).then((val)=>{console.log(val)})
//
const p1 =Promise.reject(0);
const p2 =new Promise((res)=>{
    setTimeout(res,100,"quick")
})
const p3= new Promise((res)=>{
    setTimeout(res,500,"slow")

})
promisearr =[p1,p2,p3]
Promise.any(promisearr).then((val)=>{console.log(val)})
