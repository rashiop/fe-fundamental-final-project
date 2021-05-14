class CocktailDS {
  static searchCocktail(keyword) {
    const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

    return fetch(`${baseUrl}/search.php?s=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`${keyword} is not a function`);
      })
      .catch(() => `${keyword} is not found`);
  }
}

export default CocktailDS;
