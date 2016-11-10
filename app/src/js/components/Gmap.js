// import React, { Component } from 'react';
//
//
// var directionsService = new google.maps.DirectionsService();
//   var directionsDisplay = new google.maps.DirectionsRenderer();
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//    zoom:7,
//    mapTypeId: google.maps.MapTypeId.ROADMAP
//   });
//
//   directionsDisplay.setMap(map);
//   directionsDisplay.setPanel(document.getElementById('panel'));
//
//   var request = {
//    origin: 'Chicago',
//    destination: 'New York',
//    travelMode: google.maps.DirectionsTravelMode.DRIVING
//   };
//
//   directionsService.route(request, function(response, status) {
//    if (status == google.maps.DirectionsStatus.OK) {
//      directionsDisplay.setDirections(response);
//    }
//   });
//
// module.exports = Gmap;
