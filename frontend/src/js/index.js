import { store } from './store';
import { Delph } from './Delph';
//import { Header } from './components/header'
import { routes } from './routes'


export class Index {

  constructor() {
    let path = window.location.pathname.substr(1)
    let config = {
      routes: routes,
      store: store,
      path: path
    }
    //new Header(config)
    new Delph(config)
  }
};
document.addEventListener('DOMContentLoaded', () => {
  new Index()
})