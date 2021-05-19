import './cocktail-item';

/*
NOTES: tailwind styles didnt affect shadow dom
I'll just use plain css in cocktail item and cocktail list
*/

class CocktailList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set drinks(drinks) {
    this._drinks = drinks;
    if (Array.isArray(this._drinks)) {
      this.render();
    }
  }

  render() {
    this.innerHTML = `
      <style>
        cocktail-list {
          display: flex;
          flex-wrap: wrap;
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
    this.innerHTML = ''; // clear render style
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          text-align: center;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  renderLoading() {
    this.shadowDOM.innerHTML = `
      <style>
        .loading {
          width: 100%;
          text-align: center;
          padding: 30px 0;
        }

        .loading__image {
          width: 45px;
          height: 45px;
          object-fit: cover;
        }
      </style>
      <div class="loading">
      <img src="./images/design/loading.gif" alt="loading" class="loading__image" />
      </div>
    `;
  }
}

customElements.define('cocktail-list', CocktailList);
