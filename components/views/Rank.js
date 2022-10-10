import html from "html-literal";
import michael from "../../assets/images/mjHeads.png";
import larry from "../../assets/images/larry33.png";
import kareem from "../../assets/images/kareem.png";
import wilt from "../../assets/images/wilt.png";
import gia from "../../assets/images/giaHead.png";
import kevin from "../../assets/images/kevinHead.png";
import kobe from "../../assets/images/kobeHead.png";
import lebron from "../../assets/images/lebronHead.png";
import magic from "../../assets/images/magicHead.png";
import steph from "../../assets/images/stephHead.png";
import tim from "../../assets/images/timHead.png";
import wade from "../../assets/images/wadeHead.png";

export default state =>
  html`
    <div class="rankInstructions">
      <h1>Rank the NBA Greats!</h1>
      <ul>
        <li>
          Drag and drop the players on the right to the spaces on the left.
        </li>
        <li>Search players by first name in the search box.</li>
        <li>Refresh the page to clear the ranking board.</li>
      </ul>
    </div>
    <div class="rankContent">
      <div class="rankZones">
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>GOAT</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>2</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>3</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>4</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>5</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>6</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>7</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>8</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>9</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>10</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>11</h3>
        </div>
        <div>
          <div class="dropTarget" id="rankSpace"></div>
          <h3>12</h3>
        </div>
      </div>
      <div class="dropTarget" id="playerSpace">
        <input type="text" id="rankSearch" placeholder="Search for player" />
        <div class="playerIcons">
          <img
            id="lebron"
            src="${lebron}"
            draggable="true"
            class="playerDrag"
            title="Lebron James"
          />

          <img
            id="kevin"
            src="${kevin}"
            draggable="true"
            class="playerDrag"
            title="Kevin Durant"
          />

          <img
            id="stephen"
            src="${steph}"
            draggable="true"
            class="playerDrag"
            title="Stephen Curry"
          />

          <img
            id="michael"
            src="${michael}"
            draggable="true"
            class="playerDrag"
            title="Michael Jordan"
          />

          <img
            id="larry"
            src="${larry}"
            draggable="true"
            class="playerDrag"
            title="Larry Bird"
          />

          <img
            id="kareem"
            src="${kareem}"
            draggable="true"
            class="playerDrag"
            title="Kareem Abdul-Jabbar"
          />

          <img
            id="wilt"
            src="${wilt}"
            draggable="true"
            class="playerDrag"
            title="Wilt Chamberlain"
          />

          <img
            id="magic"
            src="${magic}"
            draggable="true"
            class="playerDrag"
            title="Magic Johnson"
          />

          <img
            id="giannis"
            src="${gia}"
            draggable="true"
            class="playerDrag"
            title="Giannis Antetokounmpo"
          />

          <img
            id="kobe"
            src="${kobe}"
            draggable="true"
            class="playerDrag"
            title="Kobe Bryant"
          />

          <img
            id="wade"
            src="${wade}"
            draggable="true"
            class="playerDrag"
            title="Dwyane Wade"
          />

          <img
            id="tim"
            src="${tim}"
            draggable="true"
            class="playerDrag"
            title="Tim Duncan"
          />
        </div>
      </div>
    </div>
  `;
