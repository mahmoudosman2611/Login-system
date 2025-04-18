// *HTML elements
var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPass = document.querySelector("#userPass");
var ErrorMsg = document.querySelector("#ErrorMsg");
var signUp = document.querySelector("#signUp");
var togglePass = document.querySelector("#togglePass");

var userNameRegex = /^[A-Z][a-z]{3,}$/;
var userEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var userPassRegex = /^[a-zA-Z0-9@$!%*?&]{6,}$/;

// ^app variables
var dataList = JSON.parse(localStorage.getItem("userdata")) || [];
// &Functions

function add() {
  if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
    ErrorMsg.innerHTML = `<p>All inputs is required</p>`;
  } else {
    if (
      validate(userNameRegex, userName) &&
      validate(userEmailRegex, userEmail) &&
      validate(userPassRegex, userPass)
    ) {
      var userData = {
        name: userName.value,
        email: userEmail.value,
        password: userPass.value,
      };

      var isExist = dataList.some(function (user) {
        return user.email === userEmail.value;
      });
      
      if (isExist) {
        Swal.fire({
          icon: "warning",
          title: "Already registered",
          text: "This email is already registered. Please log in.",
          confirmButtonColor: "#f0ad4e",
        });
        return;
      }
      
      dataList.push(userData);
      location.href = `../index.html`;
      localStorage.setItem("userdata", JSON.stringify(dataList));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter valid name, email, and password.",
        confirmButtonColor: "#d33",
      });
    }
  }
}

function validate(regex, element) {
  if (element.value === "") {
    element.classList.remove("is-valid", "is-invalid");
    return false;
  } else if (regex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}

// &Event

signUp.addEventListener("click", add);

togglePass.addEventListener("click", function () {
  if (userPass.type === "password") {
    userPass.type = "text";
    togglePass.classList.remove("fa-eye");
    togglePass.classList.add("fa-eye-slash");
  } else {
    userPass.type = "password";
    togglePass.classList.remove("fa-eye-slash");
    togglePass.classList.add("fa-eye");
  }
});
