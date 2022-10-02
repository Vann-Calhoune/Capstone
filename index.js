import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

// Makes site appear, determining which pages have access to state.
function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  //Toggle Icons
  document.querySelector(".fa-basketball").addEventListener("click", () => {
    document.querySelector("#navigation").classList.toggle("hidden--mobile");
  });
}

let playerId = axios
  .get("https://www.balldontlie.io/api/v1/players/")
  .then(response => {
    let playerList = response.data.data;
    console.log(playerList);
  })
  .catch(err => {
    console.log(err);
    document();
  });

let playerStats = axios
  .get("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237")
  .then(response => {
    store.Compare.stats1 = {};
    store.Compare.stats1.pts = [response.data.data[0].pts];
    store.Compare.stats1.ast = [response.data.data[0].ast];
    store.Compare.stats1.reb = [response.data.data[0].reb];
    store.Compare.stats1.stl = [response.data.data[0].stl];
    store.Compare.stats1.blk = [response.data.data[0].blk];
    store.Compare.stats1.fg = [response.data.data[0].fg_pct];
    store.Compare.stats1.fg3 = [response.data.data[0].fg3_pct];
    store.Compare.stats1.ft = [response.data.data[0].ft_pct];
  })
  .catch(err => {
    console.log(err);
    document();
  });

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
