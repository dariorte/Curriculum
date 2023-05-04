// declaramos 2 variables
let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let icon_hamburguer = true;

// vamos a trabajar sobre un evento hamburguer
 document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){ //se le agrega un evento de escucha con un click
    if(icon_hamburguer){
         document.querySelectorAll(".hamburguer")[0].style.color = "#d03d3d";  // si le doy click se pone rojo
        icon_hamburguer = false;
    }
    else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000"; // si le doy click se pone de color negro
        icon_hamburguer = true;
    }
    enlaces_header.classList.toggle("hamburgueropen");
})
// ahora vamos a trabajar sobre enlaces header
document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";

} )