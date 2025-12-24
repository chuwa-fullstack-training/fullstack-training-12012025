// TODO: 写 brewCoffee 函数
function brewCoffee(coffeeName) {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`${coffeeName}`+ "准备好了");
        },2000);
    })
}

// TODO: 写 async 函数来调用 brewCoffee
async function makeMyCoffee() {
    try{
        const brewcoffee = await brewCoffee("冷萃咖啡");
        console.log("拿到了:", brewcoffee);
        
    }catch(error){
        console.log("error:", error);
    }
}

// 调用函数
makeMyCoffee();




// 任务：创建一个"煮咖啡"的异步函数
// 要求：

// 写一个 brewCoffee(coffeeName) 函数，返回 Promise
// 模拟煮咖啡需要 2 秒
// 成功时 resolve "咖啡名字 准备好了"
// 使用 async/await 调用这个函数