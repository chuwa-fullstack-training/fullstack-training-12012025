
// TODO 1: 用 Type 定义咖啡大小（字面量类型）
type CoffeeSize = "small"|"medium"|"large";

// TODO 2: 用 Type 定义温度选项
type Temperature = "hot"|"iced";

// TODO 3: 用 Interface 定义咖啡
interface Coffee {
    // 你的代码...
    name: string;
    size: CoffeeSize;
    temperature: Temperature;
    price: number;
    toppings?: string[];
    // name: string
    // size: CoffeeSize
    // temperature: Temperature
    // price: number
    // toppings?: string[] (可选)
}

// TODO 4: 创建两个咖啡对象
const latte: Coffee = {
    // 你的代码...
    name: "latte",
    size: "small",
    temperature: "hot",
    price: 4.5,
    toppings:["cream", "soymilk"]
};

const icedAmericano: Coffee = {
    // 你的代码...
    name:"Americano",
    size: "medium",
    temperature: "iced",
    price: 5.5
};

// TODO 5: 写一个函数，计算咖啡价格
// 规则：
// - large 咖啡 +1 元
// - 每个 topping +0.5 元
function calculatePrice(coffee: Coffee): number {
    // 你的代码...
    let calPrice = coffee.price;
    if(coffee.size==="large"){
        calPrice +=1;
    }
    if(coffee.toppings){
        calPrice += coffee.toppings.length * 0.5;
    }
    return calPrice;

// better express
    // const basePrice = coffee.price;
    // const sizeUpcharge = coffee.size === "large" ? 1 : 0;
    // const toppingsCost = (coffee.toppings?.length ?? 0) * 0.5;
    
    // return basePrice + sizeUpcharge + toppingsCost;
}

// 测试
console.log(calculatePrice(latte));
console.log(calculatePrice(icedAmericano));