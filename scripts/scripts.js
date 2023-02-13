const menuIcon = document.getElementById("navOne");
const menu = document.getElementById("navThree");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});
