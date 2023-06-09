const a = ["1", "2", "3", "4", "5","58","56"," ","45",5,4,3,1];
const left = a.reduce((prev, cur) =>{

    return prev + cur
});
const right = a.reduceRight((prev, cur) => {
    return prev + cur

});

console.log(right);
console.log(left);

document.write("<h1>reduce-method</h1>")
document.write(right + "<br>");
document.write(left);








document.write("<h1>filter-method</h1>")

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result2 = words.filter((words) =>{
   return words.length > 6
});

document.write(result2);









document.write("<h1>from-method</h1>")

let numbers = [1,1,2,3,5,2,1,5,6,8,9,4,8,0];

let num = Array.from(new Set(numbers));

document.write(num + "<br>");


let str = "111123654789";

let str1 = Array.from(str , mapfn);

function mapfn(y) {
    return Number(y);
}
document.write(str1 + "<br>");


let result = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let result1 = Array.from(result , abc);

function abc(x){
    return  x + 2;
}
document.write(result1 + "<br>");


let tex = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";

let type = Array.from(tex);

document.write(type);