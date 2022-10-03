class Summary extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const link = this.getAttribute("link");
    const abbreviation = this.getAttribute("abbreviation");

    let images = this.getAttribute("images");
    images = images.split(";");
    let imagesHTML = "";
    for (let i = 0; i < images.length; i++) {
      imagesHTML += `<img class="summary__images__image" src="${images[i]}" />`;
    }

    this.innerHTML = `
    <div class="summary">
            <div class="summary__title"><a 
              class="summary__title__link summary__title__link--${abbreviation}"
              href="${link}"
              target="_blank"
              >${title}</a></div>
            <p class="summary__description">
             ${description}
            </p>
            <div class="summary__images">
            ${imagesHTML}
            </div>
            </div>
        </div>
    `;
  }
}

customElements.define("summary-component", Summary);
