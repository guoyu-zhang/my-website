class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const path = this.getAttribute("path");
    const text = this.getAttribute("text");

    this.innerHTML = `
<nav class="navbar">
  <a class="navbar__item"    
  href="${path}"
  >${text}</a>
</nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);
