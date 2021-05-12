class Footer extends HTMLElement {
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
        <footer>copyright 2021 by poppy</footer>
      </style>
    `;
  }
}

customElements.define('footer-bar', Footer);
