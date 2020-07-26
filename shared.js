const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button')
const modalNoButton = document.querySelector('modal__action--negative');

//console.dir(backdrop);

/* for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
} */

for (let item of selectPlanButtons) {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener("click", closeModal);
modalNoButton.addEventListener("click", closeModal);

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}


