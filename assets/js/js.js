$(document).ready(function () {

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
    var phone = "";

    $("#logInBnt").on("click", function (event) {
        event.preventDefault();
        name = $("#inlineFormInput").val().trim();
        phone = $("#inlineFormInputGroup").val().trim();

        database.ref().set({
            name: name,
            phone: phone
        });
    });

    database.ref().on("value", function (snapshot) {
        $("#emergency-link").text(snapshot.val().name).attr("href", "tel:" + snapshot.val().phone)
    });

    $("#run-search").on("click", function (event) {
        $(".popup-bg").show();
        $(".popup-buttons").show();
        $(".popup-bg").on("click", function (event) {
            $(".popup-bg").hide();
            $(".popup-buttons").hide();
        });
    });
});

