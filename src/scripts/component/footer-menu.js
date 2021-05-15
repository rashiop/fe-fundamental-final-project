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
                      <a href="${link}" class="hover:underline py-0.25 block">
                      ${text}
                      </a>
                  </li>`
          )
          .join('');

        return `<div class="w-full px-10 md:px-0 md:w-3/12 mb-2 md:mb-0">
                <h5 class="text-lg font-semibold mb-2 relative">${section}</h5>
                <ul class="h-auto overflow-hidden">
                  ${menu}
                </ul>
              </div>`;
      })
      .join('');
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
