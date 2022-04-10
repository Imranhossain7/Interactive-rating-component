let info = document.querySelector(".info");
let thanks = document.querySelector(".thanks");
let span = document.getElementById("ratings");
let rating = document.querySelectorAll(".rating-circle");

let btn = document.querySelector(".btn");

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", () => {
    let ratings = rating[i].innerHTML;

    for (let i = 0; i < rating.length; i++) {
      rating[i].classList.contains("selected");
      rating[i].classList.remove("selected");
    }
    rating[i].classList.add("selected");

    btn.addEventListener("click", () => {
      info.style.display = "none";
      thanks.style.display = "block";
      span.innerHTML = ratings;
    });
  });
}
