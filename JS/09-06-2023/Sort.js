document.write("<h1>Sort-method</h1>");

let fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.sort() + "<br>");


let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
document.write(fruits1 + "<br>");

let numbers = [1,2,3,4,5,6,7,9,22,45,36,52,75];
let ans = numbers.sort((a,b) => a-b); 
// let ans = numbers.sort((a,b) => b-a); 
document.write(ans + "<br>");

let numbers1 = [1,2,3,4,5,6,7,9,22,45,36,52,75];
let ans1 = numbers1.sort((a,b) => a-b); 
document.write(ans1[2] + "<br>")




document.write("<h1>evry-method</h1>");

let age = [20,45,16,36,22];
let age1 = age.every((age)=>{
    return age >16
});
document.write(age1 +"<br   >");





document.write("<h1>join-method</h1>");

let joins = ["Rushabh","Yash","Chirag","Jay"];
let joins1 = joins.join(" & ");
document.write(joins1 +"<br >");