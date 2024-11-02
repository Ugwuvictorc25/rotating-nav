const toggleBar = document.querySelector(".toggle-bar");
const closeBtn = document.querySelector(".Close");
const openBtn = document.querySelector(".open");
const article = document.querySelector(".article");
const content = document.querySelector(".content");
const container = document.querySelector(".container");

openBtn.addEventListener("click", function () {
	container.classList.add("active");
});

closeBtn.addEventListener("click", function () {
	container.classList.remove("active");
});
