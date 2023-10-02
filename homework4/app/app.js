import {openModal, nextModal} from "../model/model.js";

function initializeListeners() {
  $(".login").on("click", openModal);

  $("#submit").on("click", nextModal)
}


$(document).ready(function () {
  initializeListeners();
});