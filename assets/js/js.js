$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyBbKN_TW5CuyC1tyDa_TZZpb_b6jDj5x8I",
        authDomain: "nightcrawlers-1543299103112.firebaseapp.com",
        databaseURL: "https://nightcrawlers-1543299103112.firebaseio.com",
        projectId: "nightcrawlers-1543299103112",
        storageBucket: "nightcrawlers-1543299103112.appspot.com",
        messagingSenderId: "122175939714"
    };

    firebase.initializeApp(config);
    var database = firebase.database();

    var name = "";
    var email = "";

    $("#logInBnt").on("click", function(event) {
        event.preventDefault();
        name = $("#inlineFormInput").val().trim();
        email = $("#inlineFormInputGroup").val().trim();

        database.ref().push({
            name: name,
            email: email
        });

        database.ref().on("child_added", function(snapshot) {
            console.log(snapshot.val().name);
            console.log(snapshot.val().email);
        });
    });
});