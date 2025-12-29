// TODO 4: 创建两个咖啡对象
var latte = {
    // 你的代码...
    name: "latte",
    size: "small",
    temperature: "hot",
    price: 4.5,
    toppings: ["cream", "soymilk"]
};
var icedAmericano = {
    // 你的代码...
    name: "Americano",
    size: "medium",
    temperature: "iced",
    price: 5.5
};
// TODO 5: 写一个函数，计算咖啡价格
// 规则：
// - large 咖啡 +1 元
// - 每个 topping +0.5 元
function calculatePrice(coffee) {
    // 你的代码...
    var calPrice = coffee.price;
    if (coffee.size === "large") {
        calPrice += 1;
    }
    if (coffee.toppings) {
        calPrice += coffee.toppings.length * 0.5;
    }
    return calPrice;
}
// 测试
console.log(calculatePrice(latte));
console.log(calculatePrice(icedAmericano));
