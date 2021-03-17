const cursor = document.querySelector('.cursor');
const cursorText = document.querySelector('.cursor-text');

function cursorEffect(e){
    /*Move the cursor div according to the mouse x and y coordinates */
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

function cursorHighlight(e){
    if (e.target.classList.contains('details')){
        cursor.classList.add('cursor-active');
        cursorText.innerText = 'Click';
    } else {
        cursor.classList.remove('cursor-active');
        cursorText.innerText = '';
    }
}

/*Add eventListener to the entire browser window*/
window.addEventListener('mousemove', cursorEffect);

window.addEventListener('mouseover', cursorHighlight);

