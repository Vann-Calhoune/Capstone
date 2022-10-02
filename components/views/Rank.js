import html from "html-literal";

export default state =>
  html`
    <div class="rankContent">
      <div class="rankSpace">
        <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <img
          id="drag1"
          src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          draggable="true"
          ondragstart="drag(event)"
        />
        <div></div>
        <div><span>2</span></div>
        <div><span>3</span></div>
        <div><span>4</span></div>
        <div><span>5</span></div>
        <div><span>6</span></div>
        <div><span>7</span></div>
        <div><span>8</span></div>
        <div><span>9</span></div>
        <div><span>10</span></div>
      </div>
    </div>
  `;
