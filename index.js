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

function handleDragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function handleOverDrop(e) {
  e.preventDefault();
  //Stores dragged elements ID and then the reference to dragged element
  let draggedId = e.dataTransfer.getData("text");
  let refEl = document.getElementById(draggedId);
  //if "drop" occurs in different div detach element from current div, append to new div
  if (e.target.id === "rankSpace" || e.target.id === "playerSpace") {
    refEl.parentNode.removeChild(refEl);
    e.target.appendChild(refEl);
  }
}

function afterRender(state) {
  //Toggle Icons
  document.querySelector(".fa-basketball").addEventListener("click", () => {
    document.querySelector("#navigation").classList.toggle("hidden--mobile");
  });

  if (state.view === "Post1") {
    axios
      .get(`${process.env.COMMENT_URL}`)
      .then(response => {
        store.Post1.comments = response.data;
      })
      .catch(error => {
        console.log("It puked", error);
      });

    document.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();

      const newComment = e.target.elements;

      const requestData = {
        name: newComment.name.value,
        comment: newComment.comment.value
      };

      axios
        .post(`${process.env.COMMENT_URL}`, requestData)
        .then(response => {
          store.Post1.comments.push(response.data);
          // router.navigate("/Post1");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  if (state.view === "Rank") {
    // };
    // Drag and Drop
    //save ID

    // variables for players and drop
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

    // player search

    // variables for input bar and player images
    let searchBox = document.querySelector("#rankSearch");

    //hide all players when you begin typing
    searchBox.oninput = () => {
      let images = document.querySelectorAll("#playerSpace img");
      images.forEach(hide => (hide.style.display = "none"));
      let value = searchBox.value;
      //if user input value = player id, show player
      images.forEach(filter => {
        let playerName = filter.getAttribute("id");
        if (playerName.startsWith(value)) {
          filter.style.display = "block";
        }

        //If you delete search block all players display
        if (searchBox.value == "") {
          filter.style.display = "block";
        }
      });
    };
  }
  if (state.view === "Compare") {
    // form submission
    const formEntry = document.querySelector("#compareForm");

    formEntry.addEventListener("submit", async event => {
      event.preventDefault();
      console.log("The form was submitted!");
      // saving user player search
      store.Compare.name = document.getElementById("player1").value;
      store.Compare.name2 = document.getElementById("player2").value;
      console.log(`new value ${store.Compare.name}`);
      console.log(`new value ${store.Compare.name2}`);
      store.Compare.season = document.getElementById("playerOneYear").value;
      store.Compare.season2 = document.getElementById("playerTwoYear").value;

      // API call to get player ID using search value
      await axios
        .get(
          `https://www.balldontlie.io/api/v1/players?search=${store.Compare.name}`
        )
        .then(response => {
          // if (response.data.data[0] === undefined) {
          //   alert("Player 1 did not play this year");
          // }
          if (response.data.data.length > 1) {
            alert("Specify Player 1's name");
          } else {
            store.Compare.id = response.data.data[0].id;
          }
          console.log(store.Compare.id);
        })
        .catch(err => {
          console.log(err);
        });

      await axios
        .get(
          `https://www.balldontlie.io/api/v1/players?search=${store.Compare.name2}`
        )
        .then(response => {
          // if (response.data.data[0] === undefined) {
          //   alert("Player 2 did not play this year");
          // }
          if (response.data.data.length > 1) {
            alert("Specify Player 2's name");
          } else {
            store.Compare.id2 = response.data.data[0].id;
          }
          console.log(store.Compare.id);
        })
        .catch(err => {
          console.log(err);
        });

      // API call to get player stats using newly created user ID
      await axios
        .get(
          `https://www.balldontlie.io/api/v1/season_averages?season=${store.Compare.season}&player_ids[]=${store.Compare.id}`
        )
        .then(response => {
          store.Compare.stats1 = {};
          console.log(response.data.data);
          store.Compare.stats1.gp = response.data.data[0].games_played;
          store.Compare.stats1.min = response.data.data[0].min;
          store.Compare.stats1.pts = response.data.data[0].pts;
          store.Compare.stats1.ast = response.data.data[0].ast;
          store.Compare.stats1.reb = response.data.data[0].reb;
          store.Compare.stats1.stl = response.data.data[0].stl;
          store.Compare.stats1.blk = response.data.data[0].blk;
          store.Compare.stats1.fg = (
            response.data.data[0].fg_pct * 100
          ).toFixed(1);
          store.Compare.stats1.fg3 = (
            response.data.data[0].fg3_pct * 100
          ).toFixed(1);
          store.Compare.stats1.ft = (
            response.data.data[0].ft_pct * 100
          ).toFixed(1);
          store.Compare.stats1.to = response.data.data[0].turnover;
          console.log(store.Compare);
        })
        .catch(err => {
          console.log(err);
        });

      await axios
        .get(
          `https://www.balldontlie.io/api/v1/season_averages?season=${store.Compare.season2}&player_ids[]=${store.Compare.id2}`
        )
        .then(response => {
          store.Compare.stats2 = {};
          console.log(response.data.data);
          store.Compare.stats2.gp = response.data.data[0].games_played;
          store.Compare.stats2.min = response.data.data[0].min;
          store.Compare.stats2.pts = [response.data.data[0].pts];
          store.Compare.stats2.ast = [response.data.data[0].ast];
          store.Compare.stats2.reb = [response.data.data[0].reb];
          store.Compare.stats2.stl = [response.data.data[0].stl];
          store.Compare.stats2.blk = [response.data.data[0].blk];
          store.Compare.stats2.fg = (
            response.data.data[0].fg_pct * 100
          ).toFixed(1);
          store.Compare.stats2.fg3 = (
            response.data.data[0].fg3_pct * 100
          ).toFixed(1);
          store.Compare.stats2.ft = (
            response.data.data[0].ft_pct * 100
          ).toFixed(1);
          store.Compare.stats2.to = response.data.data[0].turnover;
          console.log(store.Compare);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          render(store[state.view]);
        });
    });
  }
}

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
