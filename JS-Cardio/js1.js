var obj = {
  tcId : 1,
  tcName : "Smoke001",
  tcDesc : "Smoke001_PayPalCheckout",
  tcStatus : "Active",
  createdDate : "09-09-2019",
  modifiedDate : "11-09-2019"
}

function hideTaks() {
  let tasks = document.getElementsByClassName("task");
  for (var i = 0; i < tasks.length; i += 1) {
    tasks[i].style.display = "none";
  }
  let inputs = document.getElementsByTagName('input')
  for (var i = 0; i < inputs.length; i += 1) {
    inputs[i].value = ""
  }
  document.getElementById("result").innerHTML = `<h1></h1>`
}


//=======INTERMEDIATE TASKS=========//

function showinttask(task) {
  let id = "inttask" + task;
  hideTaks()
  document.getElementById(id).style.display = "block";
}

//========TASK1=========//
function printAllValues(){
  //let obj = {name: "RajiniKanth", age: 33, "hasPets" : false}
  let result = ""
  for(object in obj){
    result += `<h1>Value of ${object} : ${obj[object]}</h1>`
  }
  document.getElementById("result").innerHTML = `${result}`
}
// {"name": “RajiniKanth”, "age": 33, "hasPets" : false}

//========TASK2=========//
function printAllKeys(){
  //let obj = {name: "RajiniKanth", age: 33, "hasPets" : false}
  let result = `<h1>Keys are : </h1>`
  for(object in obj){
    result += `<h1>${object}</h1>`
  }
  document.getElementById("result").innerHTML = `${result}`
}

//=======BEGINNERS TASKS=========//
function showtask(task) {
  let id = "task" + task;
  hideTaks()
  document.getElementById(id).style.display = "block";
}

//========TASK1=========//
function isEven() {
  let num = document.getElementById("inbox").value;
  let msg = "";
  console.log(typeof num);
  console.log(num);
  if (num == 0) {
    msg = "Number is neither even nor odd";
  } else if (num % 2 == 0) {
    msg = "Number is even";
  } else {
    msg = "Number is odd";
  }
  document.getElementById("result").innerHTML = `<h1>${msg}</h1>`;
  document.getElementById("inbox").value = ""
}
/**
 * == Compares only the value
 * === Compares both the value and the datatype
 */

//========TASK2=========//
function bothAreOdd() {
  let msg = "";
  num1 = document.getElementById("inbox1").value;
  num2 = document.getElementById("inbox2").value;

  if (num1 == 0 || num2 == 0) {
    msg = "Either or both of the numbers are 0";
  } else if (num1 % 2 != 0 && num2 % 2 != 0) {
    msg = "Both the numbers are odd";
  } else {
    msg = "Both or one of the numbers are not odd";
  }

  document.getElementById("result").innerHTML = `<h1>${msg}</h1>`;
}

//========TASK3=========//
function getFullName() {
  let text1 = document.getElementById("firstName").value;
  let text2 = document.getElementById("lastName").value;
  let result = `<h1>Hello ${text1} ${text2} !!</h1>`;

  document.getElementById("result").innerHTML = result;
}

//========TASK4=========//
function getLengthOfWord() {
  let word = document.getElementById("word").value;
  let length = word.length;
  document.getElementById(
    "result"
  ).innerHTML = `<h1>The length of the string: ${word} is ${length}</h1>`;
}

//========TASK5=========//
function isSameLength() {
  let word1 = document.getElementById("word1").value;
  let word2 = document.getElementById("word2").value;
  let length1 = word1.length;
  let length2 = word2.length;
  let result = "";

  if (length1 === length2) {
    result = `Both the texts are of same length : ${length1}`;
  } else {
    result = `Both the texts are of different lengths : ${length1} and ${length2}`;
  }
  document.getElementById("result").innerHTML = `<h1>${result}</h1>`;
}

//========TASK6=========//
function isPallindrome() {
  let word = document.getElementById("palindromtext").value;
  let wordArr = word.split("");
  let revWord = "";
  let result = "";
  for (let i = wordArr.length - 1; i >= 0; i--) {
    revWord += wordArr[i];
  }
  console.log(revWord);
  if (word == revWord) {
    result = word + " is a pallindrome";
  } else {
    result = word + " is not a pallindrome";
  }
  document.getElementById("result").innerHTML = `<h1>!!${result}!!</h1>`;
}

//========TASK7=========//
function getNthElement(){
  let inputarr = document.getElementById('eleArr').value.split(' ')
  let index = document.getElementById('index').value
  let result = inputarr[index]
  if(result===undefined){
    result = "Invalid index"
  }
  document.getElementById("result").innerHTML = `<h1>${result}</h1>`;
}

//========TASK8=========//
function getLastElement(){
  let inputarr = document.getElementById('lastelearr').value.split(' ')
  let result = inputarr[inputarr.length-1]
  console.log(inputarr.length)
  document.getElementById("result").innerHTML = `<h1>${result}</h1>`;
}

//========TASK9=========//
function getProperty(){
  let prop = document.getElementById('prop1').value
  let result = `Value of "${prop}": `+ obj[prop]
  if(obj[prop]===undefined){
    result = `Property "${prop}" does not exist`
  }
  document.getElementById("result").innerHTML = `<h1>${result}</h1>`;
}

//========TASK10=========//
function addProperty(){
  let prop = document.getElementById('prop2').value
  let value = document.getElementById('value2').value
  let result = ""
  if(prop == null||value == null){
    result = "Property name and/or value are missing"
  } else {
    obj[prop]=value
    result = `Property "${prop}" : "${obj[prop]}" added to object`
  }
  document.getElementById("result").innerHTML = `<h1>${result}</h1>`;
}

//========TASK11=========//
function deleteProperty(){
  let prop = document.getElementById('prop3').value
  let result = ""
  if(obj[prop] === undefined){
    result = prop+" does not exist in object"
  } else {
    delete obj[prop]
    if(obj[prop] === undefined){
      result = prop+" was removed from object"
    } else {
      result = prop+" could not be removed from object. Please try again"
    }
  }
  document.getElementById("result").innerHTML = `<h1>${result}</h1>`;
}