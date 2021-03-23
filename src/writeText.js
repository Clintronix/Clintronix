const text = 'Clintronix';
let index = 0; 

function writeText() {
  let writeTitle = document.getElementById("writeTitle");
  writeTitle.innerText = text.slice(0, index);
  index++;
  
  // if (index < 8) {
  //   document.body.style.color = "red";
  // } else if (index < 16){
  //   document.body.style.color = "green";
  // } else {
  //   document.body.style.color = "blue";
  // }
  
  // if (index > text.length) {
  //   index = 0; 
  // }
}
setInterval(writeText, 300);