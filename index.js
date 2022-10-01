import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

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

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237"
};

axios
  .request(options)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.error(error);
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
