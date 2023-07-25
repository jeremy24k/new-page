const buttomModal = document.getElementById('buttom-modal');
const modalWindown = document.getElementById('modal-windown')
const backgroundModal = document.getElementById('background-modal')

buttomModal.addEventListener('click', ()=> {
    modalWindown.classList.add('open-modal')
})

backgroundModal.addEventListener('click', ()=> {
    modalWindown.classList.remove('open-modal')
})