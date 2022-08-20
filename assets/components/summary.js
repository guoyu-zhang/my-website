class Summary extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    this.innerHTML = `
    <div class="summary">
            <div class="summary__title"><a 
              class="summary__title__link summary__title__link--M2M"
              href="https://marktomarket.io"
              target="_blank"
              >${title}</a></div>
            <p class="summary__description">
             ${description}
            </p>
            </div>
        </div>
    `;
  }
}

customElements.define("summary-component", Summary);
