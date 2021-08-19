//JavaScript for navigation bar effect on scroll 
window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle('sticky',this.window.scrollY > 0);
})