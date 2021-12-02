class Model {
  constructor() {
    this.name = JSON.parse(localStorage.getItem('nickname')) || [];

    this.category = JSON.parse(localStorage.getItem('category')) || [];
    this.gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || {
      mode1: {
        name: this.name,
        score: 45,
      },
      mode2: {
        name: this.name,
        score: 95,
      },
      mode3: {
        name: this.name,
        score: 17,
      },
    };
  }

  chooseCategory() {
    this.category = 'Characters';
  }

  info() {
    console.log(`Now your category is: ${this.category}`);
  }

  _saveCategoryInLocalStorage() {
    localStorage.setItem('category', JSON.stringify(this.category));
  }

  _saveNameInLocalStorage() {
    localStorage.setItem('name', JSON.stringify(this.name));
  }

  _saveGameHistoryInLocalStorage() {
    console.log('Game history has been saved');
    localStorage.setItem('points', JSON.stringify(this.gameHistory));
  }
}

export default Model;

// Funkcja pozwalająca zapisać nick gracza i jego punktację w LocalStorage przeglądarki.
//
//   Funkcja pozwalająca odczytać z local storage ranking dla danego trybu gry.
//
//   Ranking powinien nie być globalny, ale oddzielny dla każdego trybu gry.
//
//   Działanie komponentu pokryte testami jednostkowymi.
