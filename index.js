window.onload = function() {
  scrollToY(0,0);
};

//3d Background
import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';
import Scene from './app.js'; // Replace with the path to your app.js file

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

ReactDOM.render(<App />, document.getElementsByClassName('main'));

//3d Background Over
//RIPPLE START
const rippleContainer = document.querySelector('.ripple-container');

rippleContainer.addEventListener('mousemove', function (event) {
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = `${event.clientX + scrollX}px`;
  ripple.style.top = `${event.clientY + scrollY}px`;
  rippleContainer.appendChild(ripple);
  setTimeout(function () {
    ripple.remove();
  }, 1000);
});

rippleContainer.addEventListener('click', function (event) {

  if (event.target.tagName.toLowerCase() !== 'button') {
    changeColor();
  }

 
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  const centerX = event.clientX + scrollX;
  const centerY = event.clientY + scrollY;
  const radius = 70;
  const numParticles = 100;
  const angleIncrement = (2 * Math.PI) / numParticles;

  for (let i = 0; i < numParticles; i++) {
    const angle = i * angleIncrement;
    const distanceFromCenter = Math.random() * radius;
    const x = centerX + Math.cos(angle) * distanceFromCenter;
    const y = centerY + Math.sin(angle) * distanceFromCenter;

    const particle = document.createElement('div');
    particle.className = 'ripple';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    rippleContainer.appendChild(particle);

    setTimeout(function () {
      particle.remove();
    }, 1000);

  }
});

//RIPPLE OVER

//COLORCHANGE START
var colorIndex = 0
function changeColor(){
  var list_bg_color =["rgb(0, 147, 155)","#52734D","#648f84","#421c9b","#1e1e1e"];
  var list_text_color =["#393E46","#d2d3bb","#C9F658","#D7BBF5","#79a4b3"];
  const root = document.documentElement;

  colorIndex = (colorIndex + 1) % list_bg_color.length;

  root.style.setProperty('--page_1_bg', list_bg_color[colorIndex]);

  root.style.setProperty('--text_color', list_text_color[colorIndex]);
}

//COLORCHANGE OVER


//IDE

require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' } });
require(['vs/editor/editor.main'], function () {
  var editor = monaco.editor.create(document.querySelector('.page-2'), {
    value: '\n\n//ABOUT ME \n\n\nclass Arnav_Gupta{\n\n\tSkills() {\n\n\t\tvar PYTHON = ["Selenium web crawler" ,"App Development via Kivy","Desktop Automation Libraries"];\n\t\t\n\n\t\tfunction  WEBSITE_DEVELOPMENT() {\n\t\t\tvar Frontend = ["JAVASCRIPT" ,"HTML" , "CSS" ,"Bootstrap/Tailwind"];\n\t\t\tvar Backend = ["Node.js","Express.js"];\n\t\t\tvar Database = ["MangoDB" ,"Mongoose"];\n\n\t\t\treturn Frontend,Backend,Database;\n\t\t} \n\t\tWEBSITE_DEVELOPMENT();\n\t\treturn PYTHON;\n\t}\n\n\tInformation(){\n\t\tvar Name = "Arnav Gupta";\n\t\tvar Contact = "arnavguptagg@gmail.com";\n\n\t\treturn Name, Contact;\n\t}\n\n}',
    language: 'javascript',
    theme: 'vs-dark', // Specify the desired theme here
    fontSize: 16, // Set the font size
    lineNumbers: 'off', // Show line numbers
    minimap: {
      enabled: false // Disable the minimap
    }
  });

  // You can also further customize the editor by accessing its API
  editor.updateOptions({
    fontFamily: 'Courier New', // Set the font family
    wordWrap: 'on' // Disable word wrapping
  });
});

//IDE OVER


//h1 changing
var run_c = true;
function myFunction() {
  window.addEventListener("scroll", function () {

  });

  var list_words = ["PROGRAMMER.", "DESIGNER.", "WEBDEV."];
  var currentIndex = 0;

  function changeText() {
    if (run_c) {
      document.querySelector('.text-3').innerHTML = list_words[currentIndex];
      currentIndex = (currentIndex + 1) % list_words.length;
      setTimeout(changeText, 2000); // Change text every 2 second
    }
  }

  changeText();
}

window.addEventListener("load", function () {
  myFunction();
});



//h1 changing over

//SCROLL START
function scrollToY(h,b) {
  window.scrollTo({
    top: h,
    left:b,
    behavior: 'smooth'
  });
}

function disableXScroll() {
  document.documentElement.style.overflowX = 'hidden';
}

disableXScroll();

//SCROLL OVER

//BUTTON ANIM START

function button_animator() {
  for (let di = 0; di < document.querySelectorAll(".button").length; di++) {
    let index = di; // Capture the current value of di in a separate variable
    document.querySelectorAll(".button")[index].addEventListener("click", function () {
      document.querySelectorAll(".button")[index].classList.add("clicked");
      setTimeout(function () {
        document.querySelectorAll(".button")[index].classList.remove("clicked");
      }, 500);
    });
  }
}
button_animator();

//BUTTON ANIM OVER