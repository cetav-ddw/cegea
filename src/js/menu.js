(function menu() {
  const btnMenu = document.getElementById('btn-menu');
  const subMenu = document.getElementById('js-sub-menu');

  function toggleMenu() {
    const body = document.getElementsByTagName('body')[0];

    body.classList.toggle('menu-open');
  }

  function toggleSubMenu() {
    const container = document.getElementById('cont-sub-menu')[0];

    container.classList.toggle('menu-open');
  }

  btnMenu.addEventListener('click', toggleMenu);
  subMenu.addEventListener('click', toggleSubMenu);
}());
