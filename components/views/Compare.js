import html from "html-literal";

export default state =>
  html`
    <h1>compare</h1>
    <div>
      <input type="text" id="search1" placeholder="Player 1" />
    </div>
    <div>
      <input type="text" id="search2" placeholder="Player 2" />
    </div>
  `;
