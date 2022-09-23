import html from "html-literal";

export default links => {
  return html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;


// <!-- <div class="headerBar"> -->
// <!-- <div id="headText">
//   <h1>Goat Takes</h1>
// </div>
//   <nav id="nav-bar">
//     <i class="fas fa-light fa-basketball fa-2xl"></i>
//     <ul id="navigation" class="hidden--mobile">
//     ${links
//     .map(
//       link =>
//         `<li><a href="/${link.title}" title="${link.title}" data-navigo${link.text}</a></li>`
//     ).join("")}
//     </ul>
//   </nav> -->
