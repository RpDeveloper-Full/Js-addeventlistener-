const imagen = document.querySelector("#imagen");

imagen.addEventListener("mouseover", () => {
  imagen.style.transform = "scale(1.2)";
  imagen.style.border = "3px solid red";
});

imagen.addEventListener("mouseout", () => {
  imagen.style.transform = "scale(1)";
  imagen.style.border = "2px solid black";
});