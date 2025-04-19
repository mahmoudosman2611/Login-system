var welcome = document.querySelector("#welcome");
var btnLogOut = document.querySelector("#btnLogOut");

var username = localStorage.getItem("username") || sessionStorage.getItem("username");
welcome.innerHTML = username;


btnLogOut.addEventListener("click", function () {
  localStorage.removeItem("username");

  if (location.hostname === "mahmoudosman2611.github.io") {
    window.location.href = "/Login-system/index.html";
  } else {
    window.location.href = "index.html";
  }
});
