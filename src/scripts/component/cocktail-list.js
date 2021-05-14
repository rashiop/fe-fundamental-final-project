import './cocktail-item';

class CocktailList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set drinks(drinks) {
    this._drinks = drinks;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        cocktail-list {
          display: flex;
          flex-wrap: wrap;
          flex-direction: col;
          margin-top: 32px;
          width: 100%;
          padding: 16px;
        }

        @media (min-width: 768px) {
          cocktail-list {
            display: flex;
            flex-direction: row;
          }
        }

        cocktail-list > .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML = '';
    this._drinks.forEach((drink) => {
      const CocktailElement = document.createElement('cocktail-item');
      CocktailElement.drink = drink;
      this.shadowDOM.appendChild(CocktailElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = '';
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('cocktail-list', CocktailList);
