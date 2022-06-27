var elOpenBtn = document.querySelector(".js-modal-open");
var elCloseBtn = document.querySelector(".modal-checkout");
var elModalBtn = document.querySelector(".modal");

elOpenBtn.addEventListener("click", function(){
    elModalBtn.classList.add("modal-active")
});

elCloseBtn.addEventListener("click", function(){
    elModalBtn.classList.remove("modal-active")
});