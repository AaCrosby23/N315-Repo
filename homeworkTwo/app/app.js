import * as Model from "../model/model.js"

// function initListeners(){

//     $("nav a").on("click", function(e){
//         btnID = e.currentTarget.id;
//         pageContentID = btnID + "Content";
//         console.log(eval(pageContentID));

//         changePageContent(pageContentID);
//     })

// }

// function changePageContent(pageContentVarName){
//     $("#app").html(eval(pageContentVarName));

// }

function initURLListener(){
  $(window).on("hashchange", Model.changeRoute);
  Model.changeRoute();
}

$(document).ready(function() {

    // changePageContent("homeContent");

    initURLListener();
})