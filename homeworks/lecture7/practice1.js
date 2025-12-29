// TODO: 写一个程序，完成以下任务：

const fs = require('fs').promises;
const path = require('path');

const users = [
    { id: 1, name: "Vivian", age: 25 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Jane", age: 28 }
];


// 4. 读取 users.json 文件
// 5. 打印所有用户的名字

async function fileOperations() {
    try {
    // 1. 创建一个 data 文件夹
        await fs.mkdir('./data', {recursive: true});
    // 2. 在 data 文件夹中创建 users.json 文件 
    // 3. 写入Users数据
    //  we only can store the string into file
        await fs.writeFile('./data/users.json', JSON.stringify(users,null,2));

        // for this we need the object to print
        const contentFile = await fs.readFile('./data/users.json','utf8');
        const obj = JSON.parse(contentFile);
        obj.forEach(user=>console.log(user.name));

    } catch (error) {
        console.error('Error2', error);
    }
}

fileOperations();