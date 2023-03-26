document.querySelector(".btn-mobile-nav").addEventListener("click",function(){
    document.querySelector(".header").classList.toggle("nav-open");
});

const allLink = document.querySelectorAll("a:link"); 

allLink.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const href = link.getAttribute("href");
        if(href === "#"){
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
        }
        if(href !== "#" && href.startsWith("#")) {
           const selectEl = document.querySelector(href);
           selectEl.scrollIntoView({
            behavior: "smooth",
           })
        }
    });
}); 

