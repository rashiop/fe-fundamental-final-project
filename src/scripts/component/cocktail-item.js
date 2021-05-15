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

  render() {
    const {
      strDrinkThumb,
      strImageAttribution,
      strDrink,
      strAlcoholic,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
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
        
        .card--image {
          width: 100%;
          display: block;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
      
        .card--info {
          padding: 2em;
        }
      
        .card--info > h2 {
          font-weight: lighter;
        }
      
        .card--info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
        }

        .card--info ul {
          list-style-position: inside;
        }

        .card--info--tag {
          padding: 0 8px;
          width: fit-content;
          background: gray;
          color: white;
          border-radius: 2px;
        }
      </style>

  
      <img
        class="card--image"
        src="${strDrinkThumb || './images/content/landing-page.webp'}"
        alt="${strImageAttribution}"
      >
      <div class="card--info">
        <h2>${strDrink}</h2>
        <h4 class="card--info--tag">${strAlcoholic}</h4>
        <p>${strInstructions}</p>
        <p>
          Ingredients:
          <ul>
            ${strIngredient1 ? `<li>${strIngredient1}</li>` : ''}
            ${strIngredient2 ? `<li>${strIngredient2}</li>` : ''}
            ${strIngredient3 ? `<li>${strIngredient3}</li>` : ''}
            <li>secrets</li>
          </ul>
        </p>
      </div>
    `;
  }
}

customElements.define('cocktail-item', CocktailItem);
