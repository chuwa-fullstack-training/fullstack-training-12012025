// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

  // answer: 1,2

// // 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });
  // answer: 1,3
//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}
// micro task

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}
// micro task

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));
// micro task

// [runAsync(1), runReject(4), runAsync(3), runReject(2)]
// resolve 1000 runAsync(1)
// reject 4000 runReject(4)
// resolve 1000 runAsync(3)
// reject 2000 runReject(2)

//answer: Error: 2
