let i = 0;
let j = 4;

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

const next = () => {
  document.querySelector(`#content${i + 1}`).classList.remove("active");
  i = (j + i + 1) % j;
  document.querySelector(`#content${i + 1}`).classList.add("active");

  indicator(i + 1);
};

const prev = () => {
  document.querySelector(`#content${i + 1}`).classList.remove("active");
  i = (j + i - 1) % j;
  document.querySelector(`#content${i + 1}`).classList.add("active");

  indicator(i + 1);
};

const indicator = (num) => {
  dots.forEach((dot) => {
    dot.style.backgroundColor = "transparent";
  });

  document.querySelector(
    ".dot-container button:nth-child(" + num + ")"
  ).style.backgroundColor = "#8052ec";
};

const dotNavigation = (index) => {
  images.forEach((image) => {
    image.classList.remove("active");
  });

  document.querySelector(`#content${index}`).classList.add("active");
  i = index - 1;
  indicator(index);
};

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    console.log("Clicked", dot, +dot.dataset.dot);
    dotNavigation(+dot.dataset.dot);
  });
});
