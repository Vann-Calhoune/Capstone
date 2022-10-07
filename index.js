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

  // Drag and Drop

  //save ID
  function handleDragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
    console.log("Storing ID");
  }

  function handleOverDrop(e) {
    e.preventDefault();
    //function exits if no "drop"
    if (e.type != "drop") {
      return;
    }

    //Stores dragged elements ID and then the reference to dragged element
    let draggedId = e.dataTransfer.getData("text");

    let refEl = document.getElementById(draggedId);

    //if "drop" occurs in different div detach element from current div, append to new div, remove style.
    refEl.parentNode.removeChild(refEl);
    e.target.appendChild(refEl);
  }

  let draggable = document.querySelectorAll(".playerDrag");
  let targets = document.querySelectorAll(".dropTarget");

  //Event listeners added to all playerDrag items
  draggable.forEach(player => {
    player.addEventListener("dragstart", handleDragStart);
  });

  //Add event listeners to drop zones
  targets.forEach(space => {
    space.addEventListener("dragover", handleOverDrop);
    space.addEventListener("drop", handleOverDrop);
  });

  // Compare player search

  // variables for input bar and player images
  let searchBox = document.querySelector("#rankSearch");
  let images = document.querySelectorAll("img");

  searchBox.oninput = () => {
    //hide all players when you begin typing
    images.forEach(hide => (hide.style.display = "none"));
    let value = searchBox.value;
    //if user input value = player id, show player
    images.forEach(filter => {
      let playerName = filter.getAttribute("id");
      if (value == playerName) {
        filter.style.display = "block";
      }
      //If you delete search block all players display
      if (searchBox.value == "") {
        filter.style.display = "block";
      }
    });
  };

  // form submission
  const formEntry1 = document.querySelector("#form1");

  formEntry1.addEventListener("submit", event => {
    event.preventDefault();
    console.log("The form was submitted!");
    // saving user player search
    store.Compare.name = document.getElementById("search1").value;
    console.log(`new value ${store.Compare.name}`);
    store.Compare.season = document.getElementById("yearSelection").value;
  });
}

// API call to get player ID using search value
axios
  .get(`https://www.balldontlie.io/api/v1/players?search=${store.Compare.name}`)
  .then(response => {
    store.Compare.id = response.data.data[0].id;

    console.log(store.Compare.id);
    done();
  })
  .catch(err => {
    console.log(err);
    done();
  });

// API call to get player stats using newly created user ID
axios
  .get(
    `https://www.balldontlie.io/api/v1/season_averages?season=${store.Compare.season}player_ids[]=${store.Compare.id}`
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
    done();
  })
  .catch(err => {
    console.log(err);
    done();
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
