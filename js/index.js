//*******************/// part2///************
toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// part1****************
function myfunction() {
  element = document.getElementById("body");
  console.log(element.classList);
  element.classList.toggle("dark-mode");
}
// ******************second way to toggle********************
// element = document.getElementById("btn");
// element.addEventListener("click", () => {
//   document.getElementById("body").classList.toggle("dark-mode");
// });
