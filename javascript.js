var count = 9;
var countElement = document.querySelector("#count1")
function countUp() {
    count++;
    console.log(count)  
    countElement.innerText = count + " like(s)";
    console.log(count)
}

var count2 = 12;
var countElement2 = document.querySelector("#count2")
function countUpMid() {
    count2++;
    console.log(count)  
    countElement2.innerText = count2 + " like(s)";
    console.log(count)
}

var count3 = 9;
var countElement3 = document.querySelector("#count3")
function countUpBot() {
    count3++;
    console.log(count)  
    countElement3.innerText = count3 + " like(s)";
    console.log(count)
}