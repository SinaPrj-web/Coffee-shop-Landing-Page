
document.addEventListener("DOMContentLoaded", function() {
	const navIcons = document.querySelectorAll('#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4');
  
	navIcons.forEach(icon => {
	  icon.addEventListener("click", function() {
		this.classList.toggle("open");
	  });
	});
  });
  