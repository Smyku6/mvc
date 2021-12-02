class Model {
  constructor() {
    this.name = JSON.parse(localStorage.getItem('nickname')) || [];
    this.result = JSON.parse(localStorage.getItem('result')) || [];
    this.category = JSON.parse(localStorage.getItem('category')) || [];
  }

  chooseCategory() {
    this.category = 'Characters';
  }

  info() {
    console.log(`Now your category is: ${this.category}`);
  }

  _saveCategoryInLocalStorage(category) {
    localStorage.setItem('category', JSON.stringify(category));
  }

  _saveNameInLocalStorage(name) {
    localStorage.setItem('name', JSON.stringify(name));
  }

  _savePointsInLocalStorage(category) {
    localStorage.setItem('points', JSON.stringify(points));
  }
}

export default Model;
