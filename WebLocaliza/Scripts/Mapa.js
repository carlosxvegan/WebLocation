
    var map;
    var infowindow;


function init()
        {

            var lat = document.getElementById('latitude').value.replace(',', '.');
            var long = document.getElementById('longitude').value.replace(',', '.');
            var titulo = document.getElementById('titulo').value;

            var pyrmont = new google.maps.LatLng(lat, long);
            
            //var pyrmont = new google.maps.LatLng(0,10000);

            map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: pyrmont,
                zoom: 15
            });

            var ponto = new google.maps.LatLng(lat, long);
            
            var marker = new google.maps.Marker({
                position: ponto,//seta posição 
                map: map,//Objeto mapa 
                title:titulo//string que será exibida quando passar o mouse no marker 
            });

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: pointArray
            });
            
         }
    function Pesquisa()
        {
             var lat = document.getElementById('latitude').value.replace(',', '.');
             var long = document.getElementsById('longitude').value.replace(',', '.');
             var titulo = document.getElementById('titulo');

             var pyrmont = new google.maps.LatLng(lat, long);

             //var pyrmont = new google.maps.LatLng(0,10000);

             map = new google.maps.Map(document.getElementById('map-canvas'), {
                 center: pyrmont,
                 zoom: 15
             });

             var ponto = new google.maps.LatLng(lat, long);

             var marker = new google.maps.Marker({
                 position: ponto,//seta posição 
                 map: map,//Objeto mapa 
                 title: titulo//string que será exibida quando passar o mouse no marker 
             });
        }

 function pesquisar() {
     document.getElementById('teste').innerHTML = '';
     init();
 }

 function callback(results, status) {
     if (status == google.maps.places.PlacesServiceStatus.OK) {
         for (var i = 0; i < results.length; i++) {
             createMarker(results[i]);
         }
     }
 }

 function createMarker(place) {
     console.log(place.id + ' - ' + place.name);

     var html = '<tr>' +
     '<td>' + place.id + '</td>' +
     '<td>' + place.name + '</td>' +
     '<td>' + place.geometry.location.A + '</td>' +
     '<td>' + place.geometry.location.F + '</td>' +
     '<td>' + place.vicinity + '</td></tr>';

     document.getElementById('teste').innerHTML += html + '<br>';

     if (place.id == 'f59fb92587224597f8f445e5bc765d9ef6be8752') {
         console.log('pare');
     }

     var placeLoc = place.geometry.location;
     var marker = new google.maps.Marker({
         map: map,
         position: place.geometry.location
     });

     google.maps.event.addListener(marker, 'click', function () {
         infowindow.setContent(place.name);
         infowindow.open(map, this);
     });
 }