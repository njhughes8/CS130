/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeDesert = () => {
   document.querySelector("body").className = "desert";
}

const changeOcean = () => {
   document.querySelector("body").className = "ocean";
}

const changeContrast = () => {
   document.querySelector("body").className = "high-contrast";
}

const removeTheme = () => { 
   const gone = document.querySelector("body");
   if (gone.classList.contains("ocean")) {
      gone.classList.remove("ocean");
   }
   if (gone.classList.contains("desert")) {
      gone.classList.remove("desert");
   }
   if (gone.classList.contains("high-contrast")) {
      gone.classList.remove("high-contrast");
   }
}

document.querySelector("#default").addEventListener('click', removeTheme);
document.querySelector("#desert").addEventListener('click', changeDesert);
document.querySelector("#ocean").addEventListener('click', changeOcean);
document.querySelector("#high-contrast").addEventListener('click', changeContrast);
