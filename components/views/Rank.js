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
        <ul>
          <li>
            <img
              id="lebron"
              src="${lebron}"
              draggable="true"
              class="playerDrag"
              title="Lebron James"
            />
          </li>
          <li>
            <img
              id="kevin"
              src="${kevin}"
              draggable="true"
              class="playerDrag"
              title="Kevin Durant"
            />
          </li>
          <li>
            <img
              id="stephen"
              src="${steph}"
              draggable="true"
              class="playerDrag"
              title="Stephen Curry"
            />
          </li>
          <li>
            <img
              id="michael"
              src="${michael}"
              draggable="true"
              class="playerDrag"
              title="Michael Jordan"
            />
          </li>
          <li>
            <img
              id="larry"
              src="${larry}"
              draggable="true"
              class="playerDrag"
              title="Larry Bird"
            />
          </li>
          <li>
            <img
              id="kareem"
              src="${kareem}"
              draggable="true"
              class="playerDrag"
              title="Kareem Abdul-Jabbar"
            />
          </li>
          <li>
            <img
              id="wilt"
              src="${wilt}"
              draggable="true"
              class="playerDrag"
              title="Wilt Chamberlain"
            />
          </li>
          <li>
            <img
              id="magic"
              src="${magic}"
              draggable="true"
              class="playerDrag"
              title="Magic Johnson"
            />
          </li>
          <li>
            <img
              id="giannis"
              src="${gia}"
              draggable="true"
              class="playerDrag"
              title="Giannis Antetokounmpo"
            />
          </li>
          <li>
            <img
              id="kobe"
              src="${kobe}"
              draggable="true"
              class="playerDrag"
              title="Kobe Bryant"
            />
          </li>
          <li>
            <img
              id="wade"
              src="${wade}"
              draggable="true"
              class="playerDrag"
              title="Dwyane Wade"
            />
          </li>
          <li>
            <img
              id="tim"
              src="${tim}"
              draggable="true"
              class="playerDrag"
              title="Tim Duncan"
            />
          </li>
        </ul>
      </div>
    </div>
  `;
