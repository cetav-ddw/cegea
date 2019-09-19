(function () {
  const btnMenu = document.getElementById('btnMenu-js');
  const imgMenu = document.getElementById('menuImg-js');
  const menuItem = document.getElementById('contMenu-js');
  const mq = window.matchMedia('(min-width: 768px)');
  let status = true;
  let isMediaBreakpoint;

  function widthChange(mediaQuery) {
    if (mediaQuery.matches) {
      menuItem.classList.remove('none');
      isMediaBreakpoint = false;
    } else {

      menuItem.classList.add('none');
      isMediaBreakpoint = true;
    }
  }
  function changeSrc() {
    imgMenu.removeAttribute('src');
    if (!status) {

      imgMenu.setAttribute('src', 'images/icons/menu/menu.svg');
    } else {

      imgMenu.setAttribute('src', 'images/icons/menu/menu-closed.svg');
    }
  }
  function closeMenu() {
    menuItem.classList.add('none');
  }

  function openMenu() {
    menuItem.classList.remove('none');
  }

  function menu(e) {
    if (status) {
      openMenu();
    } else {
      closeMenu();
    }
    changeSrc();
    status = !status;
  }

  btnMenu.addEventListener('touchend', () => { if (!isMediaBreakpoint) menu() });
  btnMenu.addEventListener('click', () => { if (isMediaBreakpoint) menu() });

  mq.addListener(widthChange);

  widthChange(mq);
})();
