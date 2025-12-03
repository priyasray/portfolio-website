const sideMenu = document.querySelector("#sidemenu");
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")

function openMenu(){
    sideMenu.style.transform = "translate(-16rem)";

}

function closeMenu(){
    sideMenu.style.transform = "translate(16rem)";

}

window.addEventListener('scroll', function(){
        if(scrollY > 50){
            navBar.classList.add("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm")
        }else{
            navBar.classList.remove("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm")
        }
})

window.addEventListener("scroll", function(){
    if(scrollY > 50){
        navLinks.classList.remove("shadow-sm")
    }else{
        navLinks.classList.add("shadow-sm")
    }
})
