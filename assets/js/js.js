var dangerStat = [];

var longLatAssault = {
  x: [], 
  y: []
};

var longLatTheft = {
  x: [],
  y: []

};

var longLatBurglary = {
  x: [],
  y: []
};

var longLatRobbery = {
  x: [],
  y: []
};
 
var longLatVehicleTheft = {
  x: [],
  y: []
};


$.ajax({
  url: "https://data.sfgov.org/resource/cuks-n6tp.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : "Q6SHiWLggs1tj51Wp1Y9CagsX"
  }
}).done(function(data) {
  //alert("Retrieved " + data.length + " records from the dataset!");
  //console.log(data);
  dangerData(data);
  sortData(data);
  console.log(longLatBurglary);
});

function dangerData(data){
  for (var i = 0; i<5000; i++){
    if (data[i].category == "ASSAULT" || data[i].category == "LARCENY/THEFT" || data[i].category == "BURGLARY" || data[i].category == "ROBBERY" || data[i].category == "VEHICLE THEFT"){
      dangerStat[i] = data[i];
    }
  }
}

function sortData(dangerStat){
  var j = 0;
  for (var i = 0; i<5000; i++){
    
    if (dangerStat[i].category == "ASSAULT"){
      longLatAssault.x.push(dangerStat[i].x);
      longLatAssault.y.push(dangerStat[i].y);
     
    } else if(dangerStat[i].category == "LARCENY/THEFT"){
      longLatTheft.x.push(dangerStat[i].x);
      longLatTheft.y.push(dangerStat[i].y);
   
    } else if(dangerStat[i].category == "BURGLARY"){
      longLatBurglary.x.push(dangerStat[i].x);
      longLatBurglary.y.push(dangerStat[i].y);

    } else if(dangerStat[i].category == "ROBBERY"){
      longLatRobbery.x.push(dangerStat[i].x);
      longLatRobbery.y.push(dangerStat[i].y);
  
    }else if(dangerStat[i].category == "Vehicle Theft"){
      longLatVehicleTheft.x.push(dangerStat[i].x);
      longLatVehicleTheft.y.push(dangerStat[i].y);
    }
    
  }

}


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


var map = new google.maps.Map(document.getElementById('map-canvas'),{
    center:{
        lat:37.8720,
        lng:-122.2713
    },
    zoom: 10
});
var marker = new google.maps.Marker({
    position:{
        lat:37.8720,
        lng:-122.2713
    },
    map:map,
    draggable:true
});

var searchBox = new google.maps.places.SearchBox(document.getElementById('mapsearch'));

google.maps.event.addListener(searchBox,'places_changed',function () {

    var places = searchBox.getPlaces();
    var bounds = new google.maps.LatLngBounds();
    var i, place; 

    for(i=0; place=places[i]; i++ ){

bounds.extend(place.geometry.location);
marker.setPosition(place.geometry.location);
    }
map.fitBounds(bounds);
mpa.setZoom(10);
})

