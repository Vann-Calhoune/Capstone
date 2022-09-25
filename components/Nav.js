import html from "html-literal";

export default links => html`
  <nav id="nav-bar" class="headerBar">
    <i class="fas fa-light fa-basketball fa-2xl"></i>
    <div id="navigation" class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
        )
        .join("")}
    </div>
  </nav>
`;
