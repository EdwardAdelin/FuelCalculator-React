function calculateDistance() {
    var city1 = document.getElementById('city1').value;
    var city2 = document.getElementById('city2').value;
    
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [city1],
        destinations: [city2],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function(response, status) {
        if (status == 'OK') {
            var distance = response.rows[0].elements[0].distance.text;
            document.getElementById('result').innerHTML = 'Distance between ' + city1 + ' and ' + city2 + ': ' + distance;
        } else {
            alert('Error: ' + status);
        }
    });
}