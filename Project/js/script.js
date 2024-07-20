let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onload = () =>{
   if(window.scrollY >0){
    document.querySelector('.header').classList.add('active');
   }else{
    document.querySelector('.header').classList.remove('active');
   }
}