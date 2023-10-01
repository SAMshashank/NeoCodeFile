// const jsonFile = [
// //   { name: "samTeen", age: 12 },
// //   { name: "shashank", age: 22 },
// //   { name: "Ravi", age: 44 },
// // ];

// // const html = document.getElementById("app");

// // const result = jsonFile.filter((result) => {
// //   return result.age < 30;
// // });

// // result.forEach(myFunc);

// // function myFunc(val) {
// //   const element=document.createElement('p');
// //   element.textContent=`${val.name} : ${val.age}`;
// //   html.appendChild(element);

// // }

// // console.log(result);


const testPromise=new Promise((res,rej)=>{
    let value=-5;
    if(value>=4){
        res('you are good to go')
    }else{
        rej('there is some error')
    }
});

testPromise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err)
})