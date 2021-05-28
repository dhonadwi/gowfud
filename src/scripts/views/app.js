import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, content, home, favorite, about,
  }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;
    this.home = home;
    this.favorite = favorite;
    this.about = about;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      button: this.button,
      drawer: this.drawer,
      content: this.content,
      home: this.home,
      favorite: this.favorite,
      about: this.about,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
