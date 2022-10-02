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
  // form submission
  const formEntry1 = document.querySelector("#form1");

  formEntry1.addEventListener("submit", event => {
    event.preventDefault();
    console.log("The form was submitted!");
    // saving user player search
    let userSearch1 = document.getElementById("search1").value;
    console.log(`new value ${userSearch1}`);
    // API call to get player ID using search value
    axios
      .get(`https://www.balldontlie.io/api/v1/players?search=${userSearch1}`)
      .then(response => {
        let newId = response.data.data[0].id;

        console.log(newId);
      })
      .catch(err => {
        console.log(err);
        document();
      });
    // API call to get player stats using newly created user ID
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${newId}`
      )
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
  });
}

// router.hooks({
//   before: (done, params) => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Home";

// if (view === "Compare") {
let nameVariable = store.Compare.nameVariable;

// }
//   }
// });

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
