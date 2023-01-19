let menuOpen = false;
let navMenu =document.getElementById('nav-menu');
let logo = document.getElementById('logo');
let menuButton = document.getElementById('menu-button');
 function displayMenu(){

     if(menuOpen){
         navMenu.style= "display:none; transition-property: all; transition-duration:1.1s;";
        
         menuButton.innerText = "Menu";

         menuOpen = false;
     }else{
        navMenu.style= "display:block; ";
        menuButton.innerText = "< Back";
         menuOpen = true;
     }
 }
