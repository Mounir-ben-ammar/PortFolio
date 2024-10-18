// change color link nav-bar

function mouseOver(id) {
    document.querySelector(id).style.color = "#DF6062";
    document.querySelector(id).style.fontSize = "larger";
}

function mouseOut(id) {
    document.querySelector(id).style.color = "black";
    document.querySelector(id).style.fontSize = "13px";
}

// ---------------------------------------------------
// change color link footer

function mouseOverF(id) {
    document.querySelector(id).style.color = "black";
    document.querySelector(id).style.fontSize = "larger";
}

function mouseOutF(id) {
    document.querySelector(id).style.color = "white";
    document.querySelector(id).style.fontSize = "13px";
}
// ------------------------------------------------
// typeWriter functions for text in home page


var i = 0;
var txt = 'Hello,';
var speed = 100;

 document.addEventListener("DOMContentLoaded", function typeWriter() {
    if (i < txt.length) {
    document.querySelector('#hello').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  })

  


var i2 = 0;
var txt2 = "My name is Mounir and I'm a";
var speed2 = 30;

document.addEventListener("DOMContentLoaded", function typeWriter2() {
    if (i2 < txt2.length) {
    document.querySelector('#myName').innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout
    setTimeout(typeWriter2, speed2);
  }
  })
  


  var i3 = 0;
  var txt3 = "WEB DEVELOPER";
  var speed3 = 120;
  document.addEventListener("DOMContentLoaded", function typeWriter3() {  

      if (i3 < txt3.length) {
      document.querySelector('#webdeveloper').innerHTML += txt3.charAt(i3);
      i3++;
      setTimeout(typeWriter3, speed3);
      

    }
    })

// function hoverPlay video eduction section

 
    
    function play(element){
        video.play
    }
    
    function pause(element){
        video.pause
    }