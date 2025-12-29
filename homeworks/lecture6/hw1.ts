// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T{
  return {
    ...u,
    type: "customer",
  };
}

// modify function return T change it to User 

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number){
  if (typeof a === "string" && typeof b ==="string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b ==="number"){
      return a + b;
    }
    else{
      throw new Error('type wrong');
    }
}




// practice 

function process(x: string | number) {
  if(typeof x === "string"){
    return x.length;
  }else{
    return x * x;
  }
}

// 写一个函数：只有两个参数都是 string 时才拼接
function concat(a: string | number, b: string | number) {
  if(typeof a === "string" && typeof b == "string"){
    return a+b;
  }else{
    throw new Error('Error');
  }
}

// 写一个函数：只接受正数，负数就抛错
function processPositive(n: number) {
  if(n>0){
    return n;
  }else{
    throw new Error('negative number');
  }
}