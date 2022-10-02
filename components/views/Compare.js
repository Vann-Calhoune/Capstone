import html from "html-literal";

export default state =>
  html`
    <div class="comparePlayers">
      <div class="playerOne">
        <form id="form1">
          <input type="text" id="search1" placeholder="Player 1" />
          <input id="submit1" type="submit" value="Submit" />
        </form>
        <br />
        <table>
          <tr>
            <th title="Points per game">PPG</th>
            <td>${state.stats1.pts}</td>
          </tr>
          <tr>
            <th title="Rebounds per game">REB</th>
            <td>${state.stats1.reb}</td>
          </tr>
          <tr>
            <th title="Assists per game">AST</th>
            <td>${state.stats1.ast}</td>
          </tr>
          <tr>
            <th title="Steals per game">STL</th>
            <td>${state.stats1.stl}</td>
          </tr>
          <tr>
            <th title="Blocks per game">BLK</th>
            <td>${state.stats1.blk}</td>
          </tr>
          <tr>
            <th title="Field goal percentage">FG%</th>
            <td>${state.stats1.fg}</td>
          </tr>
          <tr>
            <th title="3 point field goal percentage">3FG%</th>
            <td>${state.stats1.fg3}</td>
          </tr>
          <tr>
            <th title="Free throw percentage">FT%</th>
            <td>${state.stats1.ft}</td>
          </tr>
        </table>
      </div>
      <div class="playerTwo">
        <form id="form2">
          <input type="text" id="search2" placeholder="Player 2" />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <table>
          <tr>
            <th title="Points per game">PPG</th>
            <td></td>
          </tr>
          <tr>
            <th title="Rebounds per game">REB</th>
            <td></td>
          </tr>
          <tr>
            <th title="Assists per game">AST</th>
            <td></td>
          </tr>
          <tr>
            <th title="Steals per game">STL</th>
            <td></td>
          </tr>
          <tr>
            <th title="Blocks per game">BLK</th>
            <td></td>
          </tr>
          <tr>
            <th title="Field goal percentage">FG%</th>
            <td></td>
          </tr>
          <tr>
            <th title="3 point field goal percentage">3FG%</th>
            <td></td>
          </tr>
          <tr>
            <th title="Free throw percentage">FT%</th>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  `;
