

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
  console.log(longLatAssault);
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


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

