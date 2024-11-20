document.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('nav'); // Select the nav element
	const navHeight = window.innerHeight - 120;
  
	window.addEventListener('scroll', () => {
	  if (window.scrollY > navHeight) {
		nav.classList.add('fixed');
	  } else {
		nav.classList.remove('fixed');
	  }
	});
  });
  