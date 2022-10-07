import html from "html-literal";

export default state =>
  html`
    <div class="rankContent">
      <div class="dropTarget" id="rankSpace">
        <!-- <div id="div1"></div>
        <div id="div1"></div>
        <div id="div1"></div> -->
      </div>
      <div class="dropTarget" id="playerSpace">
        <input type="text" id="rankSearch" placeholder="Search for player" />
        <ul>
          <li>
            <img
              id="lebron"
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
              draggable="true"
              class="playerDrag"
              title="lebron James"
            />
          </li>
          <li>
            <img
              id="kevin"
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png"
              draggable="true"
              class="playerDrag"
            />
          </li>
          <li>
            <img
              id="stephen"
              src="https://cdn-qa.nba.com/headshots/nba/latest/1040x760/201939.png"
              draggable="true"
              class="playerDrag"
            />
          </li>
          <li>
            <img
              id="drag1"
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
              draggable="true"
              class="playerDrag"
              title="lebron James"
            />
          </li>
          <li>
            <img
              id="drag2"
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png"
              draggable="true"
              class="playerDrag"
            />
          </li>
          <li>
            <img
              id="drag3"
              src="https://cdn-qa.nba.com/headshots/nba/latest/1040x760/201939.png"
              draggable="true"
              class="playerDrag"
            />
          </li>
          <li>
            <img
              id="drag1"
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
              draggable="true"
              class="playerDrag"
              title="lebron James"
            />
          </li>
          <li>
            <img
              id="drag2"
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png"
              draggable="true"
              class="playerDrag"
            />
          </li>
          <li>
            <img
              id="drag3"
              src="https://cdn-qa.nba.com/headshots/nba/latest/1040x760/201939.png"
              draggable="true"
              class="playerDrag"
            />
          </li>
          <li>
            <img
              id="drag1"
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
              draggable="true"
              class="playerDrag"
              title="lebron James"
            />
          </li>
          <li>
            <img
              id="drag2"
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png"
              draggable="true"
              class="playerDrag"
            />
          </li>
          <li>
            <img
              id="drag3"
              src="https://cdn-qa.nba.com/headshots/nba/latest/1040x760/201939.png"
              draggable="true"
              class="playerDrag"
            />
          </li>
        </ul>
      </div>
    </div>
  `;
