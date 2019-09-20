(function () {
  const btnMenu = document.getElementById('btn-menu');
  const menuContainer = document.getElementById('cont-menu');
  let isClosedMenu = true;

  function changeSrc() {
    if (!isClosedMenu) {
      btnMenu.classList.remove('menu-opened');
      btnMenu.classList.add('menu-closed');
    } else {
      btnMenu.classList.remove('menu-closed');
      btnMenu.classList.add('menu-opened');
    }
  }

  function closeMenu() {
    menuContainer.classList.add('show');
    menuContainer.classList.remove('hide');
  }

  function openMenu() {
    menuContainer.classList.add('hide');
    menuContainer.classList.remove('show');
  }

  function menu() {
    console.log('si hizo click')
    if (isClosedMenu) {
      console.log('el menu abierto se cierra');
      closeMenu();
    } else {
      console.log('el menu cerrado se abre');
      openMenu();
    }
    changeSrc();
    isClosedMenu = !isClosedMenu;
  }

  btnMenu.addEventListener('click', menu);
})();
