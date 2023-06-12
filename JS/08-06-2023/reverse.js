// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.

document.write("<h1>reverse-method</h1>");

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
document.write(fruits + "<br>");




document.write("<h1>push-method</h1>");

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.push("kiwi");
document.write(fruits1 + "<br>");




document.write("<h1>includes-method</h1>");

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits2.includes("Mango") + "<br>");

let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits3.includes("mango") + "<br>");

let list = "This is a JavaScript";
let ans = list.includes("JavaScript", 10) + "<br>";
document.write(ans + "<br>" + "<br>");




document.write("<h1>shift-unshift-method</h1>");

let car = ["Maruti", "Ford", "MG", "KIA"];
document.write(car + "<br>");
let ans1 = car.shift();
document.write(car + "<br>");
document.write(ans1 + "<br>");




document.write("<h1>unshift-method</h1>");
let cars = ["Maruti", "Ford", "MG", "KIA"];
document.write(cars + "<br>");
let ans2 = cars.unshift("Tata");
document.write(cars + "<br>");
document.write(ans2 + "<br>");



document.write("<h1>POP-method</h1>");

let carsn = ["Maruti", "Ford", "MG", "KIA"];
document.write(carsn + "<br>");
let anss1 = carsn.pop();
document.write(carsn + "<br>");
document.write(anss1 + "<br>");




document.write("<h1> indexOf-method</h1>");

let number = [1, 2, 3, 4, 5, 6];
let index = number.indexOf(5);
document.write(index + "<br>");




document.write("<h1>  slice-method</h1>");

let carsname = ["Maruti", "Ford", "MG", "KIA"];
document.write(carsname + "<br>");
let anss2 = carsname.slice(0, 2);
document.write(carsname + "<br>");
document.write(anss2 + "<br>");




document.write("<h1>  some-method</h1>");

let arr = [1, 5, 9, 14, 18, 27, 39];
let arr1 = arr.some((val) => val > 39);
document.write(arr1 + "<br>");




document.write("<h1>  isArray-method</h1>");

let value = ["Apple", "Banana", "Kiwi"];
document.write(Array.isArray(value) + "<br>");

let value2 = "Apple";
document.write(Array.isArray(value2) + "<br>");
