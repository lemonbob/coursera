/*
My script for module
Copyright M Livesey 2018
*/

function setactive(){
  var nav = document.getElementById("nav-list");
  var el = nav.getElementsByTagName("li");
  var current = nav.getElementsByClassName("active");
  for (var i = 0; i < el.length; i++){
    el[i].addEventListener("click", function(){current[0].classList.remove("active");this.classList.add("active");});}
  }
