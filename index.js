// eslint-disable-next-line import/extensions
import Controller from './controllers/controller.js';
// eslint-disable-next-line import/extensions
import Model from './model/model.js';
// eslint-disable-next-line import/extensions
import View from './view/view.js';

// const app = new Controller(new Model(), new View());

window.app = new Controller(new Model(), new View());
