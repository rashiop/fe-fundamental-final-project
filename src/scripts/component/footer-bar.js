class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer
      class="
        bg-blue-500
        flex
        justify-center
        px-4
        py-4
        text-center
      "
      >
        <p class="font-sm">Copyright © xxxx - 2021 Poppy</p>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
