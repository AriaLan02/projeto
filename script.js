function toggleMode(){
const html = document.documentElement 
html.classList.toggle('light')/*documento todo; arquivo*/ 
/*if (html.classList.contains('light')){
html.classList.remove('light')
}
else{
  html.classList.add('light')
}*/

/* pegar a imagem e substituir a outra */
const img = document.querySelector("#profile img") /*pesquisa pelo seletor */
if (html.classList.contains('light')){
/* se tiver light mode, add img light */
img.setAttribut('src', './assets/avatar-light.png')
}
else{
  /*sem light mode */
img.setAttribut('src', './assets/avatar.png')
}
}