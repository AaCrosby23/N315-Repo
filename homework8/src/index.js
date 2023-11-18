// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { changeRoute, lastPageLoaded, loginNav, loginStatus } from "../dist/model/model.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyBYWWWY4yYgU1zwy9kwbcN8FR16B7Xp6Bo",
//   authDomain: "n315-aacrosby.firebaseapp.com",
//   projectId: "n315-aacrosby",
//   storageBucket: "n315-aacrosby.appspot.com",
//   messagingSenderId: "887192778573",
//   appId: "1:887192778573:web:9def8582c94c4442842904",
//   measurementId: "G-5X95E2LN8N"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// onAuthStateChanged(auth, (user) => {

//     if (user != null) {

//         console.log("logged in");

//     } else {

//         console.log("No user");

// }

// });

// // // App.js 
// // var mobileBtn = document.getElementById("hamburger");
// // console.log(mobileBtn);


// // function initListeners() {
// //     mobileBtn.addEventListener("click", () => {
// //         mobileBtn.classList.toggle("open");
// //     });

// //     window.addEventListener("hashchange", changeRoute);
// // }

// export function accountHandler(pageID) {
//     console.log(auth.currentUserser);
//     if (pageID === 'loginPage')
//     {
//         if (loginNav[0].innerHTML === 'Logout')
//         {
//             signOut(auth);
//             loginNav.forEach((element) => {
//                 element.innerHTML = 'Login';
//             })
//             return;
//         }
//         else
//         {
//             return;
//         }
//     }

//     let loginEmail = $("#emailLog").val();
//     let loginPassword = $("#lpw").val();

//     let firstName = $("#fNameC").val();
//     let lastName = $("#lNameC").val();
//     let emailAddress = $("#emailCreate").val();
//     let password = $("#cpw").val();

//     if (pageID === 'signUp')
//     {
//         createUserWithEmailAndPassword(auth, emailAddress, password)
//         .then((userCredential) => {
//         // Signed up 
//         const user = userCredential.user;
//         user.displayName = `${firstName}`;
//         console.log(user);

//         loginNav.forEach((element) => {
//             element.innerHTML = 'Logout';
//             console.log(element);
//         });
//         window.location.hash = `${lastPageLoaded}`;

//         // ...
//         })
//         .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//         // ..
//         });
//     }
//     else if (pageID === 'login')
//     {
//         signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);

//             loginNav.forEach((element) => {
//                 element.innerHTML = 'Logout';
//                 console.log(element);
//             });
//             window.location.hash = `${lastPageLoaded}`;
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);
//         });
//     }
// }

// $(document).ready(function () {
//     initListeners();
//     changeRoute();
// })

//Recipe Form Code

var initialIngreCount = 3; 
var initialInstrCount = 3; 
var recipes = [];

function initListeners() {
    
    $(".addIngreBtn").on("click", (e) => {
        initialIngreCount++;
        $(".formIngredients").append(`<input  type="text" placeholder="Ingredient #${initialIngreCount}" id="desc${initialIngreCount - 1}" />`)
        console.log(initialIngreCount);
    });

    // $(".removeDescBtn").on("click", (e) => {
    //     $(".formDesc").splice(`<input type="text" placeholder="Description ${initialDescCount}" id="desc${initialDescCount}" />`)
    //     console.log(initialDescCount);

    //     $(".formDesc").remove(`#desc${initialDescCount[length]}`)
    //     initialDescCount--;

    // });

    $(".addInstrBtn").on("click", (e) => {
        initialInstrCount++;
        $(".formInstr").append(`<input type="text" placeholder="Instruction #${initialInstrCount}" id="desc${initialInstrCount - 1}" />`)
    });

    $(".submit").on("click", (e) => {
        console.log("submit");
        let newItemObj = {};

        let imagePath = $("#imagePath").val();
        let itemName = $("#itemName").val();

        newItemObj.imagePath = imagePath;
        newItemObj.itemName = itemName;


        newItemObj.ingredients = [];

        console.log("newItemObj", newItemObj);
        
        $(".formIngredients input").each(function (index, data) {
            var value = $(this).val();
            if(value != ""){
                let keyName = "Ingredient" + "#" + index;
                let ingreObj = {};
                ingreObj[keyName] = value;

                newItemObj.ingredients.push(ingreObj);
                console.log("Ingredient ", newItemObj);
            }
        });

        newItemObj.instructions = [];

        $(".formInstr input").each(function (index, data) {
            var value = $(this).val();
            if(value != ""){
                let keyName = "instruction" + index;
                let instrObj = {};
                instrObj[keyName] = value;

                newItemObj.instructions.push(instrObj);
                console.log("Instr ", newItemObj);
            }
        });

        recipes.push(newItemObj);
    });
}

$(document).ready(function () {
    initListeners();
});