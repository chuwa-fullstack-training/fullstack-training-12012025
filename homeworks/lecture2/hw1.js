/*1
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/

function intersection(o, p) {
    let r = {};
    for (let prop in o) {
        if (o.hasOwnProperty(prop)) {
            if (prop in p) {
                r[prop] = o[prop]; // 值来自 o
            }
        }
    }
    return r;
}


/*2
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
}
function union(o, p) {
    let r = {};
    extend(r, p);  
    extend(r, o);  
    return r;
}


/*3
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
}
function restrict(o, p) {
    for (let prop in o) {
        if (o.hasOwnProperty(prop)) {
            if (!(prop in p)) {
                delete o[prop];
            }
        }
    }
    return o;
}

/*4
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
}

function intersection(o, p) {
    let r = {};

    for (let prop in o) {
        if (o.hasOwnProperty(prop)) {
            if (prop in p) {
                r[prop] = o[prop];
            }
        }
    }
}