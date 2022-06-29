let menu = document.getElementById("menu");

//dectectar scroll o movimiento en la ventana 
window.addEventListener("scroll",function() {

    if(document.documentElement.scrollTop >= 100){

        menu.classList.add("menu2");
        menu.classList.remove("menu");

    }else{

        menu.classList.remove("menu2");
        menu.classList.add("menu");

    }

});