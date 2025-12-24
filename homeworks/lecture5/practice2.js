// 已经给你的函数
function cookRice() {
    return new Promise(resolve => {
        setTimeout(() => resolve("🍚 ready"), 2000);
    });
}

function cookVeggies() {
    return new Promise(resolve => {
        setTimeout(() => resolve("🥦 ready"), 1500);
    });
}

// TODO: 方式1 - 用 .then()
function makeLunchWithPromise() {
    console.log("start cooking method 1:...");
    cookRice()
    .then(rice=>{
        console.log("get 🍚");
        return cookVeggies();
    })
    .then(veggies=>{
        console.log("get 🥦");
        console.log("Prepare Lunch finished");
    })
    .catch(error=>{
        console.log("not finish:", error);
    });
 
}

// TODO: 方式2 - 用 async/await
async function makeLunchWithAsync() {
    console.log("start cooking method 2: ...");
    try {
        const rice = await cookRice();
        console.log("get ", rice);

        const veggies = await cookVeggies();
        console.log("get ", veggies);
        console.log("Prepare Lunch finished");



    }catch(error){
        console.log("not finish:", error);
    }
}


// 写一个函数，用两种方式实现：

// 用 Promise + .then()
// 用 Async/Await + try...catch

makeLunchWithPromise() 
makeLunchWithAsync() 