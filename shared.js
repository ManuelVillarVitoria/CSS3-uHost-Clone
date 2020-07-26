const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button')
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav')


for (let item of selectPlanButtons) {
    item.addEventListener('click', () => {
        //modal.className = 'open';//This will actually overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
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
}

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});


