class HeroLanding extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#input--search-cocktail').value;
  }

  render() {
    this.innerHTML = `
      <section class="flex flex-col md:flex-row w-full">
        <!-- START: landing left -->
        <div class="container pt-8 pb-8 md:pb-0 md:pt-10 md:w-1/2">
          <div class="flex flex-col px-10 md:px-12 h-1/3 md:h-1/4">
            <hgroup>
              <h1 class="text-blue-900 text-5xl">Cocktail 101</h1>
              <h5 class="text-lg md:text-2xl mt-2 mb-1 leading-tight">
                Have you ever been stuck on what drink you should order?
              </h5>
              <h5 class="text-lg md:text-2xl leading-tight">
                Find the cocktail you should be sippin' on
              </h5>
            </hgroup>
            <div class="mt-8 md:mt-20"></div>
            <label for="input--search-cocktail text-xs md:text-lg">
              Cocktail name
            </label>
            <!-- START: search bar -->
            <div class="flex flex-row w-full my-1 mr-6">
              <input
                id="input--search-cocktail"
                name="input--search-cocktail"
                type="text"
                class="rounded-bl-lg rounded-tl-lg p-2 flex-grow"
                placeholder="Type your cocktail name"
              />
              <button
                id="btn--search-cocktail"
                class="
                  rounded-br-lg rounded-tr-lg
                  bg-purple-700
                  text-yellow-100
                  w-1/3
                  md:w-20
                "
              >
                search
              </button>
            </div>
            <!-- END: search bar -->
          </div>
        </div>
        <!-- END: landing left -->
        <!-- START: landing right -->
        <div class="invisible md:visible md:relative md:w-1/2 h-0 md:h-full">
          <img
            src="./images/content/landing-page.webp"
            alt=""
            class="w-full h-full inset-0 object-cover"
          />
        </div>
        <!-- END: landing right -->
      </section>
    `;

    this.querySelector('#btn--search-cocktail').onclick = this._clickEvent;
  }
}

customElements.define('hero-landing', HeroLanding);
