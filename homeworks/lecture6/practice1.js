// TODO 1: 定义一个学生接口
// 要求：
// - name: 字符串
// - age: 数字
// - grade: 只能是 "A" | "B" | "C" | "D" | "F"
// - email: 可选的字符串
// - courses: 字符串数组
// TODO 2: 创建一个学生对象
var vivian = {
    name: "Vivian",
    age: 25,
    grade: "A",
    courses: ["Math", "physics"]
    // name: "Vivian"
    // age: 25
    // grade: "A"
    // courses: ["Math", "Physics"]
    // email 可以不写
};
// TODO 3: 写一个函数，接收学生，返回问候语
// 格式: "Hello, [name]! Your grade is [grade]. You are taking [课程数量] courses."
function greetStudent(student) {
    return "Hello, ".concat(student.name, "! Your grade is ").concat(student.grade, ". You are taking ").concat(student.courses.length, " courses.");
}
// 测试
console.log(greetStudent(vivian));
// 期望输出: "Hello, Vivian! Your grade is A. You are taking 2 courses."
