class rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
    }
}
const rect = new rectangle(5, 10);
console.log(rect.getArea());

function setTimeoutPromisified(){
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}
function main(){
  console.log("My name is sachin Paudel");
}

setTimeoutPromisified().then(main);
