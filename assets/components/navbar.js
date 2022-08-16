class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const path = this.getAttribute("path");
    this.innerHTML = `
<nav class="navbar">
    <ul class="navbar__menu">
      <li>
        <a class="navbar__menu__item ${
          path === "index" ? "navbar__menu__item--selected" : ""
        }"
          href="index.html"
          >Home</a>
      </li>
      <li>
        <a class="navbar__menu__item ${
          path === "projects" ? "navbar__menu__item--selected" : ""
        }"    
        href="projects.html"
        >Projects</a>
      </li>
      <li>
        <a class="navbar__menu__item ${
          path === "blog" ? "navbar__menu__item--selected" : ""
        }" 
        href="blog.html"
        >Blog</a>
      </li>
    </ul>
</nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);
