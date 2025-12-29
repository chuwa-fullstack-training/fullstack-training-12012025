
// TODO 1: 定义一个泛型接口 Result
// 用途：表示操作结果（成功或失败）
// - success: 布尔值
// - data: 类型为 T（成功时有值）
// - error: 字符串（失败时有值，可选）

interface Result<T> {
    // 你的代码...
    success: boolean;
    data: T;
    error?: string
}

// TODO 2: 定义 User 类型
interface User {
    id: number;
    name: string;
    email: string;
}


// TODO 3: 写一个函数，模拟获取用户
// 成功返回用户数据，失败返回错误
function getUser(id: number): Result<User> {
    // 你的代码...
    // 如果 id > 0，返回成功结果
    // 否则返回失败结果
    if(id>0){
        return {
            success: true,
            data: {
                id: id,
                name: "Vivian",
                email: "vivian@gmail.com"

            },
            error:""
        }
        
        }else{
            return{
                success: false,
                data:{
                    id:0,
                    name:"",
                    email:""

                },
                error:"invalid id"
            };
        };

}
 

// TODO 4: 写一个函数，处理 Result
function handleResult<T>(result: Result<T>): void {
    // 你的代码...
    // 如果成功，打印 data
    // 如果失败，打印 error
    if(result.success){
        console.log(result.data);
    }else{
        console.log(result.error)
    }
    
}

// 测试
const successResult = getUser(1);
const failResult = getUser(-1);

handleResult(successResult);
handleResult(failResult);