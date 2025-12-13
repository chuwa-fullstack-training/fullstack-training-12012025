/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 * 
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
    // implement here
    let password;

    this.setPassword=function(pwd){
        if(pwd && pwd.length>=6){
            password = pwd;
        }else{
            throw new Error("Password length must be at least 6");
            
        }
    }
    this.checkPassword=function(pwd){
        return pwd === password;
    }
   
}

const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456'));// true
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined

try{
    user.setPassword('123');
} catch(e){
    console.log("Error");
}// Error
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined