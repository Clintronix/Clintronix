
 
    //Window.onload helped me fix bug with DOM objects displaying after JavaScript compile
window.onload = function() {

    
    //nav open / close
    const btn = document.getElementById("btn");
    const nav = document.getElementById("nav");

    btn.addEventListener('click', () => {
        nav.classList.toggle("active");
        btn.classList.toggle("active");
        if (btn.innerHTML !== "X") {
            btn.innerHTML = "X";
        } else {
            btn.innerHTML = "☰";
        }
        
        activeAnimation();
    })

    //Falling Hearts 
    function createHeart() {
    const heart = document.createElement('div');

    heart.classList.add('heart');
    heart.innerText = '🦖';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.fontSize = Math.round(Math.random() * 4) + "rem";
    document.getElementById('hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove()}, 4000);
    }  
    
    //turns heart interval on or off
    let interval;

    function activeAnimation() {
        if (!interval) {
            interval = setInterval(createHeart, 100);
        } else {
            clearInterval(interval);
            interval = null;
        }
  }
  document.getElementById("open-contacts").addEventListener('click', () => {
    document.getElementById("contacts").classList.toggle("active");
    console.log("this works")
  })
//   //random colors for BG
//   function randomBg() {
//     let colorHEX = "";
//     return colorHEX = "#" + Math.floor((Math.random() * 1000000));
    
//     }

//     //pie chart create random percentages for tranfrom rotate style
//     document.getElementById('Pcontainer').addEventListener('click', () => {
//     for (let i = 1; i < 7; i++) {
//         let slice = 'pieSlice' + i;
//         let degree = Math.round(Math.random() * 180);
//         document.getElementById(slice).getElementsByClassName('pie')[0].style.transform = "rotate(" + degree + "deg)";


//         document.getElementById('header').style.background = randomBg();
//         }
//     })
        
}
    
 



    // setTimeout(() => {
    //     clearInterval(interval);
    // }, 5000)

    
    
    
    
    






