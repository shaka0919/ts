let a = [];
const names = ["Alice", "Bob", "Eve"];


for (let i = 0; i < 10; i++) {
    a.push(i);
    console.log(i);
    
}
console.log(names);

let b = a.filter(x => x > 2);
console.log("done.");
console.log("end");