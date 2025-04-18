var welcome = document.querySelector("#welcome");
var btnLogOut = document.querySelector("#btnLogOut");

welcome.innerHTML = localStorage.getItem("username");

btnLogOut.addEventListener("click", function () {
  localStorage.removeItem("username");

  if (location.hostname === "mahmoudosman2611.github.io") {
    window.location.href = "/Login-system/index.html";
  } else {
    window.location.href = "../index.html";
  }
});
