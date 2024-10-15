/*Seleciona o botão e o elemento body*/
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

/*Adiociona um evento de clique ao botão para alternar entre os temas*/
themeToggleBtn.addEventListener("click", function() {
 /*Alterna entre as clases "ligth-theme" e "drak-theme" no body*/
 body.classList.toggle("dark-theme");


 /*Alterna o texto do botão com base no tema atual*/
 if(body.classList.contains("dark-theme"))  {
    themeToggleBtn.textContent= 'Mudar para tema Tema Claro';
 }else {
    themeToggleBtn.textContent = 'Mudar para Tema Escuro';

 }

});