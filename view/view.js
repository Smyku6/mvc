/**
 * @class View
 *
 * Visual representation of the model.
 */
import CATEGORIES from '../data.js';

class View {
  constructor() {
    this.app = this.getElement('#root');

    this.logo = this.createElement('div', 'logo');
    this.title = this.createElement('h1');
    this.title.textContent = 'Harry Potter';
    this.logo.append(this.title);

    this.form = this.createElement('form');
    this.input = this.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'What is your name?';
    this.input.name = 'name';
    this.submitButton = this.createElement('button');
    this.submitButton.textContent = 'START THE GAME';
    this.form.append(this.input, this.submitButton);

    this.app.append(this.logo, this.form);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  createButton(innerText, className) {
    const element = document.createElement('button');
    element.innerText = innerText;
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getElementsByTag(tag) {
    const elements = document.getElementsByTagName(tag);
    return elements;
  }

  showCategories() {
    this.categories = this.createElement('main', 'categories');
    const categories = [];
    CATEGORIES.forEach((category) => {
      categories.push(this.createButton(`${category}`, `${category}`));
    });
    // Adding categories div to the #root
    this.app.append(this.categories);
    // Adding buttons to the div
    this.categories.append(...categories);
  }

  hideCategories() {
    this.getElement('.categories').remove();
  }

  saveToLocalStorageButton() {
    this.localstoragebutton = this.createButton('Localstorage', 'localstorage');
    console.log(this.localstoragebutton);
    // Adding categories div to the #root
    this.app.append(this.localstoragebutton);
  }

  bindLocalStorage(handler) {
    const button = document.getElementsByClassName('localstorage')[0];
    console.log(button);
    button.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('You have clicke localstorage button');
      handler();
    });
  }

  bindChooseCategory(handler) {
    const buttons = this.getElementsByTag('button');
    for (const btn of buttons) {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(btn.innerText);
        handler(btn.innerText);
      });
    }
  }
}

export default View;
