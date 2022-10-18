import html from "html-literal";

export default state =>
  html`
    <div class="instructions">
      <h1>Numbers Don't Lie!</h1>
      <ul>
        <li>
          Enter the names of up to two current or former NBA players you would
          like to compare.
        </li>
        <li>Select the year of their stats you would like to see.</li>
        <li>Click Submit!</li>
        <li>Refresh the page to clear the stat boards.</li>
        <li>
          If stat board displays are empty, player did not play that year.
        </li>
      </ul>
    </div>
    <form id="compareForm">
      <div>
        <input
          type="text"
          class="playerSearchInput"
          id="player1"
          placeholder="Player 1"
        />
        <select id="playerOneYear" class="selectYear">
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
          <option>2008</option>
          <option>2007</option>
          <option>2006</option>
          <option>2005</option>
          <option>2004</option>
          <option>2003</option>
          <option>2002</option>
          <option>2001</option>
          <option>2000</option>
          <option>1999</option>
          <option>1998</option>
          <option>1997</option>
          <option>1996</option>
          <option>1995</option>
          <option>1994</option>
          <option>1993</option>
          <option>1992</option>
          <option>1991</option>
          <option>1990</option>
          <option>1989</option>
          <option>1988</option>
          <option>1987</option>
          <option>1986</option>
          <option>1985</option>
          <option>1984</option>
          <option>1983</option>
          <option>1982</option>
          <option>1981</option>
          <option>1980</option>
          <option>1979</option>
        </select>
      </div>
      <input id="submit1" type="submit" value="Submit" />
      <div>
        <input
          class="playerSearchInput"
          type="text"
          id="player2"
          placeholder="Player 2"
        />
        <select id="playerTwoYear" class="selectYear">
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
          <option>2008</option>
          <option>2007</option>
          <option>2006</option>
          <option>2005</option>
          <option>2004</option>
          <option>2003</option>
          <option>2002</option>
          <option>2001</option>
          <option>2000</option>
          <option>1999</option>
          <option>1998</option>
          <option>1997</option>
          <option>1996</option>
          <option>1995</option>
          <option>1994</option>
          <option>1993</option>
          <option>1992</option>
          <option>1991</option>
          <option>1990</option>
          <option>1989</option>
          <option>1988</option>
          <option>1987</option>
          <option>1986</option>
          <option>1985</option>
          <option>1984</option>
          <option>1983</option>
          <option>1982</option>
          <option>1981</option>
          <option>1980</option>
          <option>1979</option>
        </select>
      </div>
    </form>
    <br />

    <br />
    <div class="statTables">
      <table id="table1">
        <tr>
          <th id="leftPlayer" title="Player Name">Player</th>
          <td>${state.name}</td>
        </tr>
        <tr>
          <th title="Season">Season</th>
          <td>${state.season}</td>
        </tr>
        <tr>
          <th title="Games Played">GP</th>
          <td>${state.stats1.gp}</td>
        </tr>
        <tr>
          <th title="Minutes per game">MPG</th>
          <td>${state.stats1.min}</td>
        </tr>
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
        <tr>
          <th id="leftTo" title="Turnovers per game">TO</th>
          <td>${state.stats1.to}</td>
        </tr>
      </table>

      <table id="table2">
        <tr>
          <td>${state.name2}</td>
          <th id="rightPlayer" title="Player Name">Player</th>
        </tr>
        <tr>
          <td>${state.season2}</td>
          <th title="Season">Season</th>
        </tr>
        <tr>
          <td>${state.stats2.gp}</td>
          <th title="Games Played">GP</th>
        </tr>
        <tr>
          <td>${state.stats2.min}</td>
          <th title="Minutes per game">MPG</th>
        </tr>
        <tr></tr>
        <tr>
          <td>${state.stats2.pts}</td>
          <th title="Points per game">PPG</th>
        </tr>
        <tr>
          <td>${state.stats2.reb}</td>
          <th title="Rebounds per game">REB</th>
        </tr>
        <tr>
          <td>${state.stats2.ast}</td>
          <th title="Assists per game">AST</th>
        </tr>
        <tr>
          <td>${state.stats2.stl}</td>
          <th title="Steals per game">STL</th>
        </tr>
        <tr>
          <td>${state.stats2.blk}</td>
          <th title="Blocks per game">BLK</th>
        </tr>
        <tr>
          <td>${state.stats2.fg}</td>
          <th title="Field goal percentage">FG%</th>
        </tr>
        <tr>
          <td>${state.stats2.fg3}</td>
          <th title="3 point field goal percentage">3FG%</th>
        </tr>
        <tr>
          <td>${state.stats2.ft}</td>
          <th title="Free throw percentage">FT%</th>
        </tr>
        <tr>
          <td>${state.stats2.to}</td>
          <th id="rightTo" title="Turnovers per game">TO</th>
        </tr>
      </table>
    </div>
  `;
