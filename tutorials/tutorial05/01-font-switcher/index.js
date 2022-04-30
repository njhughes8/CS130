const makeBigger = () => {
   var headersize = document.querySelector("h1").style.fontSize;
   var bodysize = document.querySelector("p").style.fontSize;
   if (!headersize) {
      document.querySelector("h1").style.fontSize = "2.1em";
      document.querySelector("p").style.fontSize = "1.5em";
   }
   else {
      document.querySelector("h1").style.fontSize = parseFloat(headersize) + .05 + "em";
      document.querySelector("p").style.fontSize = parseFloat(bodysize) + .05 + "em";
   }
   
};

const makeSmaller = () => {
   var headersize = document.querySelector("h1").style.fontSize;
   var bodysize = document.querySelector("p").style.fontSize;
   if (!headersize) {
      document.querySelector("h1").style.fontSize = "1.9em";
      document.querySelector("p").style.fontSize = "1.3em";
   }
   else {
      document.querySelector("h1").style.fontSize = parseFloat(headersize) - .05 + "em";
      document.querySelector("p").style.fontSize = parseFloat(bodysize) - .05 + "em";
   }
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

