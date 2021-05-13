class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="sticky w-full z-50 px-4 bg-purple-700">
        <div class="container mx-auto py-5">
          <div
            class="flex flex-stretch items-center justify-center md:justify-start"
          >
            <div class="w-10">
              <img
                src="images/design/logo.png"
                alt="Cocktail 101's logo'"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
            <div class="mx-5">
              <h1 class="text-2xl font-light">Cocktail 101</h1>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
