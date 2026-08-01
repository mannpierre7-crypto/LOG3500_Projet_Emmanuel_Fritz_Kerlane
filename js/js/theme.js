console.log("theme.js chargé");


const button = document.getElementById("themeButton");


button.addEventListener("click", function(){


document.body.classList.toggle("dark-mode");



if(document.body.classList.contains("dark-mode")){


button.textContent="Mode clair";


}

else{


button.textContent="Mode sombre";


}


});