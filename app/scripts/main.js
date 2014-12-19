'use strict';

/* jshint devel:true */
/*global google */
/*jslint node: true */

var map, infowindow;


function setMarkers(markers) {
  function setInfoWindow() {
    /*jshint validthis: true */
    // where I have added .html to the marker object.
    infowindow.setContent(this.html);
    infowindow.open(map, this );
  }

  for (var key in markers) {
    console.log(key);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(markers[key].lat, markers[key].lng),
      map: map,
      title: key
    });

    var contentString =
    //'<h3 id="firstHeading" class="firstHeading">' + key + '</h3>'+
    '<div id="bodyContent">'+
    '<img width="200px" src="' + markers[key].path + '"><br>' +
    '<caption>'+key +'</caption>' +
    '</div>';
    marker.html = contentString;

    google.maps.event.addListener(marker, 'click', setInfoWindow);
  }
}

function initialize() {
  var myLatlng = new google.maps.LatLng( -36.7859,175.0089);

  var mapOptions = {
    center: myLatlng,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  infowindow = new google.maps.InfoWindow({
    content: 'holding...'
  });

  $.getJSON('gps.json', setMarkers);
}
google.maps.event.addDomListener(window, 'load', initialize);
