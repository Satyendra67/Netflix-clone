let buttonBox = document.getElementById("buttonBox");
let slider = document.getElementById("slider");
let next = document.getElementById("next");
let previous = document.getElementById("previous");

let currentIndex = 0;

next.addEventListener("click",()=>{
    if(currentIndex == 0){
        currentIndex = 5;
    } else if(currentIndex = 5){
        currentIndex = 5;
    }else {
        currentIndex = 5;
    }
    updateCard();
})

previous.addEventListener("click",()=>{
    if(currentIndex == 5){
        currentIndex = 0;
    } else if(currentIndex = 0){
        currentIndex = 0;
    }else {
        currentIndex = 0;
    }
    updateCard();
})

function updateCard(){
    let cardWidth = slider.querySelector("div").offsetWidth
    slider.style.transform = `translateX(-${cardWidth*currentIndex}px)`;
}
updateCard();



function faqtoggle(button){
    const answer = button.nextElementSibling;
    const plusIcon = button.querySelector(".plus");
    const crossIcon = button.querySelector(".cross");

    answer.classList.toggle("hidden");
    plusIcon.classList.toggle("hidden");
    crossIcon.classList.toggle("hidden");
}