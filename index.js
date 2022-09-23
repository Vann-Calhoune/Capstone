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

  const source = document.querySelector(".playerHeads");
  const target = document.querySelector(".placeHolder");

  source.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  target.addEventListener("dragover", e => {
    e.preventDefault();
  });

  target.addEventListener("drop", e => {
    e.preventDefault();
    const sourceID = e.dataTransfer.getData("text/plain");
    e.target.appendChild(document.getElementById(sourceID));
  });
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
