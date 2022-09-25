import html from "html-literal";

export default state =>
  html`
    <h1>Scrubs</h1>
    <div class="comparePlayers">
      <div class="playerOne">
        <input type="text" id="search1" placeholder="Player 1" />
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
      <div class="playerTwo">
        <input type="text" id="search2" placeholder="Player 2" />
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
