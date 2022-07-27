// Toggle Password feature
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#inputPassword");

togglePassword.addEventListener("click", function () {

  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Toggle the eye icon
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

// //Testimonial Card Toggle

// const testimonial = document.getElementsByClassName(".card-testimonial")

// testimonial.forEach(card => {
//   testimonial.addEventListener("click", e => {
//     console.log(e.target);
//   });
// });