// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    const cache = new Map();

    const clone = (obj) => {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        if (cache.has(obj)) {
            return cache.get(obj);
        }

        let cloneObj;
        if (Array.isArray(obj)) {
            cloneObj = [];
        } else {
            cloneObj = Object.create(Object.getPrototypeOf(obj));
        }

        cache.set(obj, cloneObj);

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloneObj[key] = clone(obj[key]);
            }
        }

        return cloneObj;
    };

    return clone(obj);
}