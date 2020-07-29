const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button')
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');


for (let item of selectPlanButtons) {
    item.addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
    });
}

backdrop.addEventListener("click", () => {
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 200);
}

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
});

ctaButton.addEventListener('animationstart', (e) => {
    console.log('Animation started', e);
})

ctaButton.addEventListener('animationend', (e) => {
    console.log('Animation ended', e);
})

ctaButton.addEventListener('animationiteration', (e) => {
    console.log('Animation iteration', e);
})

