document.addEventListener("DOMContentLoaded", function() {

// Zadanie 1 dropdown menu

var firstMenuItem = document.querySelector("ul li:first-of-type a");

firstMenuItem.addEventListener("click", function() {
  var mydropdown = document.querySelector(".dropdown-content");
  mydropdown.classList.toggle("show");
});

// Zadanie 2 ukrywanie tekstu na zdjęciach

var imgages = document.querySelectorAll(".img");
for (var i = 0; i < imgages.length; i++) {
  imgages[i].addEventListener("mouseover", function() {
    var textToHide = this.querySelectorAll(".text_to_hide");
    for (var i = 0; i < textToHide.length; i++) {
      textToHide[i].style.display = "none";
    }
  });
}
for (var i = 0; i < imgages.length; i++) {
  imgages[i].addEventListener("mouseout", function() {
    var textToHide = this.querySelectorAll(".text_to_hide");
    for (var i = 0; i < textToHide.length; i++) {
      textToHide[i].style.display = "block";
    }
  });
}

});
