const DrawerInitiator = {
  init({
    button, drawer, content, home, favorite, about,
  }) {
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });

    home.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });

    favorite.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });

    about.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });
  },
  toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
