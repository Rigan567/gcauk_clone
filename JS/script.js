const line_btn = document.querySelector(".three_line_btn");
const navbar = document.querySelector(".navbar");

line_btn.addEventListener("click", () => {
  console.log("clicked");

  if (navbar.classList.contains("nav_return")) {
    navbar.classList.remove("nav_return");
    navbar.setAttribute("class", "nav_gone");
  } else {
    navbar.setAttribute("class", "nav_return");
  }
});
