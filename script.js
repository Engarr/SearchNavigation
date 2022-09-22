const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');

const search = () => {
	searchInput.classList.toggle('active');
};
searchBtn.addEventListener('click', search);
