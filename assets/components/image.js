class Image extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const src = this.getAttribute("src");
    const text = this.getAttribute("text");
    const text2 = this.getAttribute("text2");

    const moreText = text2
      ? `<figcaption class="postImg__text">${text2}</figcaption>`
      : "";

    this.innerHTML = `
    <div class="postImg">
        <img class="postImg__image" src="${src}" />
        <figcaption class="postImg__text">${text}</figcaption>
        ${moreText}
        </div>
      `;
  }
}

customElements.define("image-component", Image);
