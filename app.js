const closedFace = document.querySelector('.closed');
const openface = document.querySelector('.open');
// add event listener
closedFace.addEventListener('click', () => {
    if (openface.classList.contains('open')) {
        openface.classList.add('active');
        closedFace.classList.remove('active');
    }
});
openface.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openface.classList.remove('active');
    }
});