class Project extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const image = this.getAttribute("image");
    const description = this.getAttribute("description");
    this.innerHTML = `
    <div><div>${title}</div>
    </div>
    `;
  }
}

customElements.define("project-component", Project);
