(function () {
  const btnMenu = document.getElementById('btn-menu');

  function toggleMenu() {
    const body = document.getElementsByTagName('body')[0];

    body.classList.toggle('menu-open');
  }

  btnMenu.addEventListener('click', toggleMenu);
})();
