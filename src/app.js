import "./app.sass"

console.log("It Works")

document.querySelector(".switch-to-video").addEventListener("click", e=>{
  e.preventDefault();
  document.querySelector(".banner.style--1 .banner__backdrop").innerHTML =  document.getElementById("videoBG").innerHTML;
});

document.querySelector(".switch-to-image").addEventListener("click", e=>{
  e.preventDefault();
  document.querySelector(".banner.style--1 .banner__backdrop").innerHTML = document.getElementById("imageBG").innerHTML;
})
