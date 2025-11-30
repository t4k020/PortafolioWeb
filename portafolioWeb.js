document.querySelectorAll(".foto").forEach(img => {
  const strength = 15; 

  img.addEventListener("mousemove", e => {
    let rect = img.getBoundingClientRect();
    let x = e.clientX - rect.left; 
    let y = e.clientY - rect.top;  

    let rotateX = ((y / rect.height) - 0.5) * -strength * 2;
    let rotateY = ((x / rect.width) - 0.5) * strength * 2;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

document.querySelectorAll(".proyecto").forEach(proyecto => {
  let fotoDiv = proyecto.querySelector(".divFoto img"); 
  let descripcion = proyecto.querySelector(".Descripcion"); 
  let descripcionEng = proyecto.querySelector(".DescripcionIngles"); 
  let panelIzq = proyecto.querySelector(".panel-izquierdo");  
  let panelImg = proyecto.querySelector(".imgPanel");
  let panelDer = proyecto.querySelector(".panel-derecho");

  fotoDiv.addEventListener("click", () => {
    let src = fotoDiv.getAttribute("src");

    panelImg.setAttribute("src", src);
    panelIzq.classList.add("active");
    panelDer.classList.add("active");

   
  });

  proyecto.querySelector(".cerrar")?.addEventListener("click", () => {
    panelIzq.classList.remove("active");
    panelDer.classList.remove("active");
    panelImg.setAttribute("src", "");


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


