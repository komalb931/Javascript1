// console.log("Start");

// setTimeout(() => {
//   console.log("End");
// }, 0);

// console.log("Finish");

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});