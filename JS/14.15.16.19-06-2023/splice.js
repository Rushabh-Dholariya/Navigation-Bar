// splice method
document.write("<h1>splice-method</h1>");

const mycar = ["odi", "bugardi", "ambesiter", "marsidiz", "jeguar"];
const removedcar = mycar.splice(2, 1, "hundai");
document.write(mycar + "<br>");
document.write(removedcar + "<br>");

const mycar1 = ["odi", "bugardi", "ambesiter", "marsidiz", "jeguar"];
const removedcar1 = mycar1.splice(2, 0, "hundai");
document.write(mycar1 + "<br>");
document.write(removedcar1 + "<br>");




// concate method
document.write("<h1>concat-method</h1>");

let names = ["yash", "chirag"];
let names1 = ["rushabh", "jay"];

let con = names.concat(names1);
document.write(con + "<br>");

let num = [1, 2, 3, 4];
let num1 = [5, 6, 7, 8, 9];

let numb = num.concat(num1);
document.write(numb + "<br>");




// key method
document.write("<h1>key-method</h1>");

let named = {
  name: "yash",
  age: 21,
  surname: "vaghasiya",
};
let name1 = Object.keys(named);
document.write(name1 + "<br>");

let numbers = [1, 2, 3, 5, 8];
let number2 = Object.keys(numbers);
document.write(number2 + "<br>");




// tostring method
document.write("<h1>tostring-method</h1>");

const namesd = ["yash", "jay", "rushabh", "chirag"];
namesd.toString();
document.write(namesd + "<br>");

let bas = 10;
let bas1 = bas.toString();
document.write(typeof bas1);




// fill(value, start, end);
document.write("<h1>fill-method</h1>");

const frute = ["banana", "grapes", "apple", "orange"];
const ans = frute.fill("mango", 0, 2);
document.write(ans + "<br>");

let number = [1, 2, 3, 5, 6, 7, 8];
let number1 = number.fill(22, 0, 3);
document.write(number1);




// lastindexof
document.write("<h1>lastindexof-method</h1>");

let fname = ["yash", "jay", "deep", "jevin", "rushabh"];
let lname = fname.lastIndexOf("deep");
document.write(lname + "<br>");

let ank = [1, 2, 5, 4, 3, 5, 4, 6, 7];
let ank1 = ank.lastIndexOf(5);
document.write(ank1);




// unshift method
document.write("<h1>unshift-method</h1>");

let vihical = ["bulle0t", "bike", "car", "honda", "ktm"];
vihical.unshift("r15");
document.write(vihical);




// find method
document.write("<h1>find-method</h1>");

let nums = [1, 2, 8, 5, 7, 9, 10, 12, 15];
let nums1 = nums.find((nums) => {
  return nums > 10;
});
document.write(nums1);




// length
document.write("<h1>length-method</h1>");

let val = "i am using javascript in file";

document.write(val.length);




// valueof method
document.write("<h1>valueOf-method</h1>");

let xyz = "hello javascript";
document.write(xyz.valueOf());




// find index
document.write("<h1>find index-method</h1>");

const ages = [3, 5, 4, 20, 30, 33];
const ages1 = ages.findIndex((valu) => valu > 20);
document.write(ages1 + "<br>");

const nam = ["gopal", "mohan", "ram", "lakhan"];
const nam1 = nam.findIndex((nams) => nams == "mohan");
document.write(nam1);





// split method
document.write("<h1>split-method</h1>");

let text = "welcome to my website javascript";
let text1 = text.split("t");
document.write(text1[1]);
