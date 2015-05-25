 function initialize()
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
     initialize();
 }

 function toggleHeatmap() {
     heatmap.setMap(heatmap.getMap() ? null : map);
 }

 function changeGradient() {
     var gradient = [
       'rgba(0, 255, 255, 0)',
       'rgba(0, 255, 255, 1)',
       'rgba(0, 191, 255, 1)',
       'rgba(0, 127, 255, 1)',
       'rgba(0, 63, 255, 1)',
       'rgba(0, 0, 255, 1)',
       'rgba(0, 0, 223, 1)',
       'rgba(0, 0, 191, 1)',
       'rgba(0, 0, 159, 1)',
       'rgba(0, 0, 127, 1)',
       'rgba(63, 0, 91, 1)',
       'rgba(127, 0, 63, 1)',
       'rgba(191, 0, 31, 1)',
       'rgba(255, 0, 0, 1)'
     ]
     heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
 }