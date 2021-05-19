/*
NOTES: tailwind styles didnt affect shadow dom
I'll just use plain css in cocktail item and cocktail list
*/

class CocktailItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  renderIngredient() {
    const { strIngredient1, strIngredient2, strIngredient3 } = this._drink;
    const ingredients = [strIngredient1, strIngredient2, strIngredient3]
      .filter(Boolean)
      .map((ingredient) => `<li>${ingredient}</li>`);
    if (ingredients.length) {
      return `
        <p>
          Ingredients:
          <ul>
            ${ingredients.join('')}
            <li>secrets</li>
          </ul>
        </p>
      `;
    }

    return '';
  }

  render() {
    const {
      strDrinkThumb,
      strImageAttribution,
      strDrink,
      strAlcoholic,
      strInstructions,
    } = this._drink || {};

    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          margin: 0.75em 0;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          overflow: hidden;
          background-color: white;
        }

        @media (min-width: 768px) {
          :host {
            max-width: 31%;
            margin: 0.75em;
          }
        }
        
        .card__image {
          width: 100%;
          display: block;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
      
        .card__info {
          padding: 2em;
        }
      
        .card__info > h2 {
          font-weight: lighter;
        }
      
        .card__info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
        }

        .card__info ul {
          list-style-position: inside;
        }

        .card__info__tag {
          padding: 0 8px;
          width: fit-content;
          background: gray;
          color: white;
          border-radius: 2px;
        }
      </style>

  
      <img
        class="card__image"
        src="${strDrinkThumb || './images/content/landing-page.webp'}"
        alt="${strImageAttribution}"
      >
      <div class="card__info">
        <h2>${strDrink}</h2>
        <h4 class="card__info__tag">${strAlcoholic}</h4>
        <p>${strInstructions}</p>
       ${this.renderIngredient()}
      </div>
    `;
  }
}

customElements.define('cocktail-item', CocktailItem);
