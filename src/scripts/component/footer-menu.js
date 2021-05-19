class FooterMenu extends HTMLElement {
  constructor() {
    super();
    this._menu = {
      Overview: [{ text: 'Subscription', link: '#' }],
      Company: [
        { text: 'About', link: '#' },
        { text: 'Career', link: '#' },
        { text: 'About Us', link: '#' },
      ],
      Explore: [
        { text: 'Terms and Conditions', link: '#' },
        { text: 'Privacy Policy', link: '#' },
        { text: 'For Developer', link: '#' },
      ],
    };
  }

  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  renderMenuItem({ link, text }) {
    return `<li>
            <a href="${link}" class="hover:underline py-0.25 block">
              ${text}
            </a>
          </li>`;
  }

  renderMenu() {
    const menu = Object.entries(this._menu)
      .map(
        ([
          section,
          values,
        ]) => `<div class="w-full px-10 md:px-0 md:w-3/12 mb-2 md:mb-0">
                <h5 class="text-lg font-semibold mb-2 relative">${section}</h5>
                <ul class="h-auto overflow-hidden">
                  ${values.map(this.renderMenuItem).join('')}
                </ul>
              </div>`
      )
      .join('');

    return menu;
  }

  render() {
    this.innerHTML = `
      <section class="bg-blue-200">
        <div class="div border-t border-b border-gray-100 py-12 px-4">
          <aside class="container mx-auto">
            <div class="flex flex-wrap md:space-x-4 justify-center">
             ${this.renderMenu()}
            </div>
          </aside>
        </div>
      </section>
    `;
  }
}

customElements.define('footer-menu', FooterMenu);
