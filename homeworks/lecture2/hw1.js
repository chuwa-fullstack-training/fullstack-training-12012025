/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    for(let key of Object.keys(p)){
        o[key] = p[key];
    }
    return o;

}
// test
let obj1 ={name:"A", city:"San Jose"};
let obj2 ={name:"Vivian", age:25};
extend(obj1,obj2);
console.log(obj1);
/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    const obj3 = {};
    for(let key of Object.keys(o)){
        obj3[key] = o[key];
    }  
    for(let key of Object.keys(p)){
        if(key in o){
            continue;
        }
        obj3[key] = p[key];
    }
    return obj3;
}
// test
let b ={name:"B",city:'CT',zip:'12345'};
let c ={name:"Vivian", age:25};
console.log(union(b,c));


/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
   for(let key of Object.keys(o)){
        if(!(key in p)){
          delete o[key];
        }       
   }
   return o;
}
// test 
let o ={name:"B",city:'CT',age:20, zip:'12345'};
let p ={name:"Vivian", age:25, zip:'123'};
restrict(o,p);
console.log(o);


/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    const obj4 = {};
    for(let key of Object.keys(o)){
        if(key in p){
            obj4[key]=o[key];
        }
    }
    return obj4;
}

// test
let g ={name:"B",city:'CT',age:20, zip:'12345'};
let f ={name:"Vivian", zip:'123'};

console.log(intersection(g,f));