document.getElementById("hamburger").addEventListener("click", function () {
	this.classList.toggle("active"); 
	document.querySelector("#nav-links").classList.toggle("nav-active");
});

const menuItems = document.querySelectorAll("#nav-links a");
menuItems.forEach((item) => {
	item.addEventListener("click", function () {
		document.getElementById("hamburger").classList.remove("active");
		document.querySelector("#nav-links").classList.remove("nav-active");
	});
});
