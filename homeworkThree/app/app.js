import { changePage } from "../model/model.js";

function route () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let path = pageID.split("/");
    changePage(path);
}

function initSite() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initSite();
})