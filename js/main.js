// get the modal element
let modal = document.querySelector("#simpleModal");
// get open modal button
let modalBtn = document.querySelector("#modalBtn");
// get close button
let closeBtn = document.querySelector(".closeBtn");

// listen for click
modalBtn.addEventListener('click', openModal);

// function to open modal
function openModal(){
    modal.style.display = 'block';
}

// listen for close click
closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}

// listen for outside click
window.addEventListener('click', clickOutside);

// function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}