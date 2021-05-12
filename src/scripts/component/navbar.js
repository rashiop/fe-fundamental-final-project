class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      </style>
      <h1>Cocktail 101</h1>
    `;
  }
}

customElements.define('nav-bar', NavBar);
