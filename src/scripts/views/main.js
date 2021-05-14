import '../component/cocktail-list';
import '../component/hero-landing';

import DataSource from '../data/cocktail-datasource';

const main = () => {
  const heroLandingElement = document.querySelector('hero-landing');
  const cocktailListElement = document.querySelector('cocktail-list');

  const fallbackResult = (message) => {
    cocktailListElement.renderError(message);
  };

  const renderResult = (results) => {
    cocktailListElement.drinks = results;
  };

  const onButtonSearchClicked = async () => {
    try {
      const filteredDrink = await DataSource.searchCocktail(
        heroLandingElement.value
      );
      renderResult(filteredDrink);
    } catch (ex) {
      fallbackResult(ex);
    }
  };
  heroLandingElement.clickEvent = onButtonSearchClicked;
};

export default main;
