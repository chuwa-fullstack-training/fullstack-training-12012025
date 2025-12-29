// TODO 1: 定义一个学生接口
// 要求：
// - name: 字符串
// - age: 数字
// - grade: 只能是 "A" | "B" | "C" | "D" | "F"
// - email: 可选的字符串
// - courses: 字符串数组

interface Student {
    name: string;
    age: number;
    grade:  "A" | "B" | "C" | "D" | "F";
    email?:string;
    courses: string[];
}

// TODO 2: 创建一个学生对象
const vivian: Student = {
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
function greetStudent(student: Student): string {
    return `Hello, ${student.name}! Your grade is ${student.grade}. You are taking ${student.courses.length} courses.`
}

// 测试
console.log(greetStudent(vivian));
// 期望输出: "Hello, Vivian! Your grade is A. You are taking 2 courses."