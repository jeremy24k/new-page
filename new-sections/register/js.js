const buttomModal = document.getElementById('buttom-modal');
const modalWindown = document.getElementById('modal-windown')
const backgroundModal = document.getElementById('background-modal')
const modalContainer = document.getElementById('modal-conatiner')

buttomModal.addEventListener('click', ()=> {
    modalWindown.classList.add('open-modal')
    modalContainer.classList.add('transition')
})

backgroundModal.addEventListener('click', ()=> {
    modalWindown.classList.remove('open-modal')
    modalContainer.classList.remove('transition')
})