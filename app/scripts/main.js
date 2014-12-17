'use strict';

/* jshint devel:true */

var map;
function initialize() {
  var myLatlng = new google.maps.LatLng( -36.7859,175.0089);

  var mapOptions = {
    center: myLatlng,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  $.getJSON('gps.json', setMarkers);
}
google.maps.event.addDomListener(window, 'load', initialize);


function setMarkers(markers) {
  for (var key in markers) {
    console.log(key);
    new google.maps.Marker({
      position: new google.maps.LatLng(markers[key].lat, markers[key].lng),
      map: map
    });
  }
}
