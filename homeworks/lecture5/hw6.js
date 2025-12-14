/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework

    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here
    return fetchOne(urls[0])
      .then(()=>fetchOne(urls[1]))
      .then(()=>fetchOne(urls[2]))
      .then(()=> results);

  
}

// option 1
function getJSON(url) {
  // this is from hw5
    return new Promise((resolve, reject)=>{
    fetch(url)
      .then(response=>{ 
        return response.json();
      })
      .then(data=>{
        resolve(data);
      })
      .catch((err)=>{
        reject(err);
      })
  })
}

// option 2
// function getJSON(url) {
//     return fetch(url).then(res => res.json());
// }

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

sequencePromise(urls)
  .then(results=>console.log(results))
  .catch(err=>console.log(err))