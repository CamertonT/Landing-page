$(document).ready(function () {
	$('.carousel__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron-left-solid.png" alt="left"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron-right-solid.png" alt="right"></button>'
	});

	const tabs = document.querySelectorAll(".catalog__tab");

	tabs.forEach((item, i) => {
		item.addEventListener("click", () => {
			let currentTab = item;
			let currentTabId = i;

			tabs.forEach((item) => {
				item.classList.remove("catalog__tab_active");
			});

			currentTab.classList.add("catalog__tab_active");

			let tabsContent = document.querySelectorAll(".catalog__content");

			tabsContent.forEach((tabContent, currentTabContentId) => {
				tabContent.classList.remove("catalog__content_active");
			});

			tabsContent[currentTabId].classList.add("catalog__content_active");
		});
	});

	//Modals

	const ConsaltBtn = document.querySelectorAll('[data-modal="consultation"]');
	const OrderBtn = document.querySelectorAll('.button_tab');
	const modalCloseBtn = document.querySelectorAll('.modal__close');
	const modalOverlay = document.querySelector('.overlay');
	const modalWindow = document.querySelector('.modal');

	ConsaltBtn.forEach((item)=>{
		item.addEventListener("click", ()=> {
			openModal('#consultation');
		});
	});

	OrderBtn.forEach((item, position)=>{
		item.addEventListener("click", ()=> {
			
			let catalogItemText = document.querySelectorAll('.catalog-item')[position]
			    .querySelector('.catalog-item__subtitle').textContent;
			document.querySelector('#order .modal__descr').textContent = catalogItemText;

			openModal('#order');
		});
	});

	modalCloseBtn.forEach((item)=>
		item.addEventListener("click", ()=>{
			closeModal();
		}));
	
	modalOverlay.addEventListener('click', (e)=> {
		if (e.target === modalOverlay) {
			closeModal();
		}
	});

	const modalTimerId = setTimeout (() => {
		openModal('#consultation');
	}, 5000); 

	function openModal(selector) {
		document.querySelector('.overlay').classList.add('overlay_active');
		document.querySelector(selector).classList.add('modal_active');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	function closeModal() {
		document.querySelector('.overlay').classList.remove('overlay_active');
		document.querySelectorAll('.modal').forEach((modal)=>{
			modal.classList.remove('modal_active');
			document.body.style.overflow = '';
		});
	}


	// Scroll up

	const scrollUpBtn = document.querySelector('.scroll-up');

	window.addEventListener('scroll', () => {
		if (window.scrollY <= 1100) {
			$(scrollUpBtn).fadeOut(); 
		} else {
			$(scrollUpBtn).fadeIn();
		}

	});

});