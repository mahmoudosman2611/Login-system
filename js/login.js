// *HTML elements
var signinEmail = document.querySelector("#signinEmail");
var signinpass = document.querySelector("#signinpass");
var login = document.querySelector("#login");
var ErrorMsg = document.querySelector("#ErrorMsg");
var togglePass = document.querySelector("#togglePass");
var passInput = document.querySelector("#signinpass");

// ^App variables
var dataList = JSON.parse(localStorage.getItem("userdata")) || [];

// &Functions
function Login() {
  if (signinEmail.value === "" || signinpass.value === "") {
    ErrorMsg.innerHTML = `<p style="color:red; font-weight:bold;">All inputs are required</p>`;
  } else {
    checkUser();
  }
}

function checkUser() {
  for (var i = 0; i < dataList.length; i++) {
    if (
      signinEmail.value === dataList[i].email &&
      signinpass.value === dataList[i].password
    ) {
      var userWelcomeName = dataList[i].name;
      localStorage.setItem("username", userWelcomeName);

      if (location.hostname === "mahmoudosman2611.github.io") {
        location.href = "/Login-system/home.html";
      } else {
        location.href = "home.html";
      }
      return;
    }
  }

  Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "This email is not registered or the password is incorrect.",
    confirmButtonColor: "#d33",
  });
}


// &Events
login.addEventListener("click", Login);

togglePass.addEventListener("click", function () {
  if (passInput.type === "password") {
    passInput.type = "text";
    togglePass.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passInput.type = "password";
    togglePass.classList.replace("fa-eye-slash", "fa-eye");
  }
});
