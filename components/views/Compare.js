import html from "html-literal";

export default state =>
  html`
    <div class="comparePlayers">
      <div class="playerOne">
        <form id="form1">
          <input type="text" id="search1" placeholder="Player 1" />
          <select id="yearSelection" class="selectYear">
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
