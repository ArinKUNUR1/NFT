const bars = document.querySelector(".bars");
const caTegory = document.querySelector(".category");

bars.addEventListener("click", () => {
    caTegory.classList.add("toggle");
    console.log(caTegory);
});