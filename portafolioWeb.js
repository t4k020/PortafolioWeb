document.querySelectorAll(".foto").forEach(img => {
  const strength = 15; // intensidad del movimiento/inclinación

  img.addEventListener("mousemove", e => {
    let rect = img.getBoundingClientRect();
    let x = e.clientX - rect.left; // cursor X dentro de la imagen
    let y = e.clientY - rect.top;  // cursor Y dentro de la imagen

    let rotateX = ((y / rect.height) - 0.5) * -strength * 2;
    let rotateY = ((x / rect.width) - 0.5) * strength * 2;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

document.querySelectorAll(".proyecto").forEach(proyecto => {
  let fotoDiv = proyecto.querySelector(".divFoto img"); // imagen dentro del proyecto
  let descripcion = proyecto.querySelector(".Descripcion"); // texto español
  let descripcionEng = proyecto.querySelector(".DescripcionIngles"); // texto inglés
  let panelIzq = proyecto.querySelector(".panel-izquierdo");  
  let panelImg = proyecto.querySelector(".imgPanel");
  let panelDer = proyecto.querySelector(".panel-derecho");

  fotoDiv.addEventListener("click", () => {
    let src = fotoDiv.getAttribute("src");

    // activar paneles con la imagen
    panelImg.setAttribute("src", src);
    panelIzq.classList.add("active");
    panelDer.classList.add("active");

    // mostrar descripción de este proyecto
    //descripcion.style.display = "block";
   
  });

  proyecto.querySelector(".cerrar")?.addEventListener("click", () => {
    panelIzq.classList.remove("active");
    panelDer.classList.remove("active");
    panelImg.setAttribute("src", "");

    /*
    descripcion.style.display = "none";
    descripcionEng.style.display = "none";
    */
  });
});

function cambiarIdioma() {

  document.querySelectorAll(".introduccion").forEach(el => {
    el.classList.toggle("oculto");
    el.classList.toggle("mostrar");
  });

  document.querySelectorAll(".introduccion-ingles").forEach(el => {
    el.classList.toggle("oculto");
  });

  document.querySelectorAll(".Descripcion").forEach(el => {

    el.classList.toggle("oculto");
    el.classList.toggle("mostrar");
    
    
  });

  document.querySelectorAll(".DescripcionIngles").forEach(el => {
    el.classList.toggle("oculto");
    el.classList.toggle("mostrar");
    
  });

  const flag = document.querySelector("#idioma .fi");

  if (flag.classList.contains("fi-ar")) {
    flag.classList.replace("fi-ar", "fi-us");
  } else {
    flag.classList.replace("fi-us", "fi-ar");
  }

} 


