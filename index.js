// class rectangle {

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//     }
// }
// const rect = new rectangle(5, 10);
// console.log(rect.getArea());

// --------------------------------------------------------------------------------

// function setTimeoutPromisified(){
//   return new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });
// }
// function main(){
//   console.log("My name is sachin Paudel");
// }

// setTimeoutPromisified().then(main);



// function random(){

// }

// let p = new Promise(random);
// console.log(p);

// ---------------------------------------------------------



// function random(resolve){
//   setTimeout(resolve, 3000);
// }

// const p = new Promise(random);

// function callback(){
//   console.log("Promise succeded");
// }

// p.then(callback);

// ------------------------------------------------------------------------------------------
function setTimeoutPromisified(duration){
  return new Promise(function(reolve){
    setTimeout(resolve, duration);
  });
}

async function solve(){
  await setTimeoutPromisified(1000);
  console.log("hi");
  await setTimeoutPromisified(2000);
  console.log("hello");
await setTimeoutPromisified(3000);
console.log("bye");
}

solve();
