class FooterMenu extends HTMLElement {
  constructor() {
    super();
    this.menu = {
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

  renderMenu() {
    return Object.entries(this.menu)
      .map(([section, values]) => {
        const menu = values
          .map(
            ({ link, text }) => `<li>
                      <a href="${link}" class="hover:underline py-0.5 block">
                      ${text}
                      </a>
                  </li>`
          )
          .join('');

        return `<div class="w-full md:w-3/12 mb-4 md:mb-0 accordion">
                <h5 class="text-lg font-semibold mb-2 relative">${section}</h5>
                <ul class="h-0 invisible md:h-auto md:visible overflow-hidden">
                  ${menu}
                </ul>
              </div>`;
      })
      .join('');
  }

  render() {
    this.innerHTML = `
      <section class="bg-purple-700">
        <div class="div border-t border-b border-gray-100 py-12 mt-16 px-4">
          <div class="flex justify-center text-center mb-8">
            <h1 class="text-2xl font-light drop-shadow-lg">
              Cocktail 101
            </h1>
          </div>
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
