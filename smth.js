
let fair = document.querySelector(".fair");
let add = document.querySelector(".buttonC");
var icon = document.querySelector("#myicon");
var fair2 = document.querySelector("#fair22");
let ButtonB = document.querySelector(".buttonB");
let myInput = document.querySelector("input");
let myText = document.querySelector(".textul");
let myDiv = document.getElementById("textdiv");
var count = -1;
let arr = [];

var myArr = localStorage.getItem("array").split(",");
arr= myArr
console.log(myArr)
myArr.forEach((item, index) => {
  if(myArr[index] != ""){
myText.innerHTML += `<img id="clear${index}" src ="./src/3.png"/><li>${item}</li>`
  }});

ButtonB.addEventListener("click", () => {
 
  if (myInput.value) {count++;
    myDiv.style.display = "block"; arr.push(myInput.value);
    myText.innerHTML += `<img id="clear${count}" src ="./src/3.png"/><li>${myInput.value}</li>`;
    localStorage.setItem("array", arr);}
});

document.addEventListener("keypress", function (e) { if (myInput.value) { if (e.key === "Enter") {  count++;
     myDiv.style.display = "block"; arr.push(myInput.value);
      myText.innerHTML += `<img id="clear${count}" src ="./src/3.png"/><li>${myInput.value}</li>`;
      localStorage.setItem("array", arr); } }
});

fair.addEventListener("click", () => {myInput.style.display = "none";
  myInput.value = "";clear.style.display = "none";
});

add.addEventListener("click", () => {
  myInput.style.display = "block";
  clear.style.display = "block";
});



myText.addEventListener("click", (e) => {
  if (e.target.id) {
    console.log(e.target.id[e.target.id.length - 1]);
    delete arr[e.target.id[e.target.id.length - 1]]
    myText.innerHTML = "";
    arr.forEach((item, index) => {
      myText.innerHTML += `<img id="clear${index}" src ="./src/3.png"/><li>${item}</li>`;
    });
    if (myText.innerHTML == "") {
      myDiv.style.display = "none";
    }
    const results = arr.filter(element => {
      return element !== '';
    });
    localStorage.setItem("array", results);
  }
});
icon.addEventListener("click", (e) => {
    var src = e.target.src.split("/");
  
    if (src[src.length - 1] == "2.png") {
      icon.src = "./src/4.png";
      arr.sort();
      myText.innerHTML = "";
      arr.forEach((item, index) => {
        myText.innerHTML += `<img id="clear${index}" src ="./src/3.png"/><li>${item}</li>`;
      });
      localStorage.setItem("array", arr); } else { icon.src = "./src/2.png";
      arr.reverse();
      myText.innerHTML = "";
      arr.forEach((item, index) => {
        myText.innerHTML += `<img id="clear${index}" src ="./src/3.png"/><li>${item}</li>`;
        
      });
      localStorage.setItem("array", arr);}
  });