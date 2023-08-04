const buttomModal = document.getElementById('buttom-modal');
const modalWindown = document.getElementById('modal-windown')
const backgroundModal = document.getElementById('background-modal')
const buttomClose = document.getElementById(`buttom-close`)

buttomModal.addEventListener('click', ()=> {
    modalWindown.classList.add('open-modal')
})

backgroundModal.addEventListener('click', ()=> {
    modalWindown.classList.remove('open-modal')
})

buttomClose.addEventListener(`click`, ()=> {
    modalWindown.classList.remove('open-modal')
})