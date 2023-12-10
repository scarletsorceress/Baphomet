var elemento = document.querySelector('.myHeader');
var ultimoScroll = 0;

window.addEventListener('scroll', function() {
  var atualScroll = window.scrollY;

  if (atualScroll > ultimoScroll) {
    elemento.style.display = 'block';
  } else {
    elemento.style.display = 'none';
  }

  ultimoScroll = atualScroll;
});