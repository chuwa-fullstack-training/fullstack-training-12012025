// 1. use `promise` to print 1, 2, 3 in every 1 second

const { resolveModuleName } = require("typescript");

// practice 2 methods:
// method 1
// function print() {
//   return new Promise((resolve)=>{
//       setTimeout(()=>{
//         console.log(1);
//         resolve();
//       },1000);
//   })
//     .then(()=>{
//      return new Promise((resolve)=>{
//        setTimeout(()=>{
//         console.log(2);
//         resolve();
//       },1000);
//      })
//     })
//     .then(()=>{
//       return new Promise((resolve)=>{
//         setTimeout(()=>{
//         console.log(3);
//         resolve();
// },1000)
//       })
//     })
// }
//     print();
// method 2
function delay(ms){
  return new Promise((resolve)=>{
    return setTimeout(resolve,ms)
  });
}
async function print1() {
  
      await delay(1000);
      console.log(1);
      await delay(1000);
      console.log(2);
      await delay(1000);
      console.log(3);
}
print1();




// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

async function printList(nums, ms) {
  for(let num of nums){
    await new Promise(resolve=>setTimeout(resolve, ms));
    console.log(num);
  }
  
}
printList([3, 1, 6, 9, 2],1000)

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  const lights = ["red", "green", "yellow"];
  while(true){
      for(let light of lights){
        await new Promise(resolve=>setTimeout(resolve,1000));
        console.log(light);
  }
  }

}

trafficLight();