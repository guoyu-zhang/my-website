class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<nav class="navbar">
    <ul class="navbar__menu">
      <li>
        <a class="navbar__menu__item ${
          window.location.pathname === "/index.html"
            ? "navbar__menu__item--selected"
            : ""
        }"
          href="index.html"
          >Home</a>
      </li>
      <li>
        <a class="navbar__menu__item ${
          window.location.pathname === "/projects.html"
            ? "navbar__menu__item--selected"
            : ""
        }"    
        href="projects.html"
        >Projects</a>
      </li>
      <li>
        <a class="navbar__menu__item ${
          window.location.pathname === "/blog.html"
            ? "navbar__menu__item--selected"
            : ""
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
