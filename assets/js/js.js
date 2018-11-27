

var dangerStat = [];


$.ajax({
  url: "https://data.sfgov.org/resource/cuks-n6tp.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : "Q6SHiWLggs1tj51Wp1Y9CagsX"
  }
}).done(function(data) {
  //alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
  dangerData(data);
  
});


function dangerData(data){
  for (var i = 0; i<5000; i++){
    if (data[i].category == "ASSAULT" || data[i].category == "LARCENY/THEFT" || data[i].category == "BURGLARY" || data[i].category == "ROBBERY" || data[i].category == "VEHICLE THEFT"){
      dangerStat[i] = data[i];
    }
  }
  console.log(dangerStat);
}


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

