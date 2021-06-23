const menuBars = document.getElementById('menu-bars');
const overlay= document.getElementById('overlay');
const nav1= document.getElementById('nav-1');
const nav2= document.getElementById('nav-2');
const nav3= document.getElementById('nav-3');
const nav4= document.getElementById('nav-4');
const buttonAtEndPage = document.getElementById('but-contact');
const contactDetails = document.getElementById('contact-details')
const navItems=[nav1, nav2, nav3, nav4];


// control nav animation
function navAnimation(direction1, direction2){
    navItems.forEach((nav, i)=>{
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
    })
}

function toggleNav(){
    // bar open/close
    menuBars.classList.toggle('change');
    // menu active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // animate in-overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // animate-in nav
        navAnimation('out', 'in')
    } else{
        //animate out-overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // animate-out nav
        navAnimation('in', 'out')
    }
}

function hide() {
    buttonAtEndPage.style.display = 'none';
    contactDetails.hidden = false
}

setTimeout(function(){ toggleNav(); }, 2000); 

//Event Listners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav)=>{
    nav.addEventListener('click', toggleNav)
})
buttonAtEndPage.addEventListener('click', hide);

