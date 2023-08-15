/*creating mobile navbar*/

    var togglebutton = document.querySelector(".togglebutton");
    var nav = document.querySelector(".navlinks");
    var links = document.querySelector(".navlinks li");

    togglebutton.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
    })


/* accordion*/
const accordion = document.getElementsByClassName
('contentBox');

for(i=0; i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}