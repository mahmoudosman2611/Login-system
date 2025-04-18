var welcome = document.querySelector("#welcome");
var btnLogOut = document.querySelector("#btnLogOut");
welcome.innerHTML = localStorage.getItem("username");

btnLogOut.addEventListener("click", function () {
  localStorage.removeItem("username");
  window.location.href = "../index.html";
});
