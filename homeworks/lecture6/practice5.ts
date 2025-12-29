
// TODO: 创建一个图书馆系统

// 1️⃣ 定义 Book 接口
interface Book {
    // 你的代码...
    id: number;
    title: string;
    author: string;
    isAvailable: boolean;
    // id: number
    // title: string
    // author: string
    // isAvailable: boolean
}

// 2️⃣ 定义 Library 类
class Library<T extends Book> {
    private books: T[] = [];
    
    // TODO: 添加书籍
    addBook(book: T): void {
        this.books.push(book);
    }
    
    // TODO: 根据 id 查找书籍
    findBookById(id: number): T | undefined {
        // 你的代码...
        return this.books.find(book=>book.id===id);
    }
    
    // TODO: 借书（设置 isAvailable 为 false）
    borrowBook(id: number): Result<T> {
        // 你的代码...
        // 如果找到且可借，返回成功
        // 否则返回失败
        const book = this.findBookById(id);
        // no book
        if(!book){
            return {
                    success: false,
                    error:"book not found"
            };
        }
        // have book,not available 
        if(!book.isAvailable){
               return  {
                    success: false,
                    error:"book is already borrowed"
            };
        }
        // have book, available      
    
        book.isAvailable = false;
        return {
                success: true,
                data:book
        };
  
    }
    
    // TODO: 还书（设置 isAvailable 为 true）
    returnBook(id: number): Result<T> {
        // 你的代码...
        const book = this.findBookById(id);
        if(!book){
            return {
                    success: false,
                    error:"book not found"
            };
        }
                // have book,available 
        if(book.isAvailable){
               return  {
                    success: false,
                    error:"book is not borrow yet"
            };
        }
        // have book,not available ,return       
    
        book.isAvailable=true;
        return {
                success: true,
                data:book
        };


    }
    
    // TODO: 获取所有可借的书
    getAvailableBooks(): T[] {
        // 你的代码...
        // const list = [];
        // for(let book of this.books){
        //     if(book.isAvailable){
        //         list.push(book);
        //     }
        // }
        // return list;
        return this.books.filter(book=>book.isAvailable);

    }
}

// 3️⃣ Result 接口（复用练习4的）
interface Result<T> {
    success: boolean;
    data?: T;
    error?: string;
}

// 4️⃣ 测试
const library = new Library<Book>();

library.addBook({ id: 1, title: "TypeScript Guide", author: "John", isAvailable: true });
library.addBook({ id: 2, title: "React Basics", author: "Jane", isAvailable: true });
library.addBook({ id: 3, title: "Node.js Pro", author: "Bob", isAvailable: false });

console.log(library.getAvailableBooks());  // 应该有2本书

const borrowResult = library.borrowBook(1);
console.log(borrowResult);  // 成功

const borrowAgain = library.borrowBook(1);
console.log(borrowAgain);   // 失败（已被借走）

const returnResult = library.returnBook(1);
console.log(returnResult);  // 成功