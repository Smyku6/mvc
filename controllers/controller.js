class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.showCategories();
    this.view.bindChooseCategory(this.handleChooseCategory);
  }

  handleChooseCategory = (category) => {
    this.model.category = category;
    this.model._saveCategoryInLocalStorage(category);
    this.view.hideCategories();
  };
}
export default Controller;
