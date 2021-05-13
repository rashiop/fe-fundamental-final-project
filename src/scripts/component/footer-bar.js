class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer
      class="
        bg-blue-100
        flex
        justify-center
        px-4
        py-4
        text-center
        font-semibold
      "
      >
        <p class="font-sm">Copyright 2021 • Poppy</p>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
