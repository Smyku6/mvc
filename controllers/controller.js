class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.showCategories();

    this.view.bindChooseCategory(this.handleChooseCategory);

    this.view.saveToLocalStorageButton();
    this.view.bindLocalStorage(this.handleLocalStorage);
  }

  handleChooseCategory = (category) => {
    this.model.category = category;
    this.model._saveCategoryInLocalStorage();
    this.view.hideCategories();
  };

  handleLocalStorage = () => {
    this.model._saveGameHistoryInLocalStorage();
  };
}
export default Controller;
