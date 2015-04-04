(function() {
                    // Create an array of styles.
                var styles = [
                    {
                        stylers: [
                            { saturation: -100 }
                        ]
                    }
                ];

                var styledMap = new google.maps.StyledMapType(styles,
                {name: "Styled Map"});

                var mapFunctions = {
    portland: function() {
                var UXNWPortland = new google.maps.LatLng(45.530531,-122.689319);
                var UXNWPortlandCenter = new google.maps.LatLng(45.533104, -122.689238);


                // For Portland
                var mapOptionsPortland = {
                    zoom: 15,
                    center: UXNWPortlandCenter,
                    panControl: false,
                    zoomControl: true,
                    scaleControl: true, 
                    mapTypeControl: false,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                        }
                };

                var mapPortland = new google.maps.Map(document.getElementById('mapPortland'),
                mapOptionsPortland);

                var contentPortland = '<div class="mapinfowindow">'+
                '<div class="mapinfowindowstyle"><strong>Urban Waxx NW Portland</strong><br />'+
                '1036 NW 18th Ave.<br />' +
                'Portland, OR 97209<br />'+
                '<a href="mailto:northwest@urbanwaxx.com" class="maplink">Send email</a><br />'+
                '<a href="http://www.secure-booker.com/urbanwaxx18th/MakeAppointment/Search.aspx" class="maplink" target="_blank">Book appointment</a><br />'+
                '<a href="http://goo.gl/8E0Y7J" class="maplink" target="_blank">Directions</a></div></div>';


                var infowindowPortland = new google.maps.InfoWindow({
                  content: contentPortland,
                  maxWidth: 200
                });

                var markerPortland = new google.maps.Marker({
                      position: UXNWPortland,
                      map: mapPortland,
                      title: 'Urban Waxx NW Portland'
                });

                //infowindow closed on initial load (primary method)
                google.maps.event.addListener(markerPortland, 'click', function() {
                    infowindowPortland.open(mapPortland,markerPortland);
                });

                // infowindow auto open (alertnative method)
                infowindowPortland.open(mapPortland,markerPortland);


                mapPortland.mapTypes.set('map_style', styledMap);
                mapPortland.setMapTypeId('map_style');

    },
    division: function() {

        var UXDivision = new google.maps.LatLng(45.5048149,-122.6335395);
        var UXDivisionCenter = new google.maps.LatLng(45.507945, -122.633583);

        // For Division
        var mapOptionsDivision = {
            zoom: 15,
            center: UXDivisionCenter,
            panControl: false,
            zoomControl: true,
            scaleControl: true, 
            mapTypeControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
        };

        var mapDivision = new google.maps.Map(document.getElementById('mapDivision'),mapOptionsDivision);

        var contentDivision = '<div class="mapinfowindow">'+
        '<div class="mapinfowindowstyle"><strong>Urban Waxx Division</strong><br />'+
        '3103 SE Division St.<br />' +
        'Portland, OR 97202<br />'+
        '<a href="mailto:division@urbanwaxx.com" class="maplink">Send email</a><br />'+
        '<a href="http://www.secure-booker.com/urbanwaxxdivision/BookOnlineStart.aspx" class="maplink" target="_blank">Book appointment</a><br />'+
        '<a href="http://goo.gl/ClJYL3" class="maplink" target="_blank">Directions</a></div></div>';
    
        var infowindowDivision = new google.maps.InfoWindow({
          content: contentDivision,
          maxWidth: 200
        });

        var markerDivision = new google.maps.Marker({
              position: UXDivision,
              map: mapDivision,
              title: 'Urban Waxx Division'
        });

        //infowindow closed on initial load (primary method)
        google.maps.event.addListener(markerDivision, 'click', function() {
            infowindowDivision.open(mapDivision,markerDivision);
        });

        // infowindow auto open (alertnative method)
        infowindowDivision.open(mapDivision,markerDivision);

        mapDivision.mapTypes.set('map_style', styledMap);
        mapDivision.setMapTypeId('map_style');
    },
    timberland: function() {
        var UXTimberland = new google.maps.LatLng(45.520875, -122.798322);
        var UXTimberlandCenter = new google.maps.LatLng(45.523791, -122.798483);

        // For Timberland
        var mapOptionsTimberland = {
            zoom: 15,
            center: UXTimberlandCenter,
            panControl: false,
            zoomControl: true,
            scaleControl: true, 
            mapTypeControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
        };

        var mapTimberland = new google.maps.Map(document.getElementById('mapTimberland'),
        mapOptionsTimberland);

        var contentTimberland = '<div class="mapinfowindow">'+
        '<div class="mapinfowindowstyle"><strong>Urban Waxx Timberland</strong><br />'+
        '11085 NW Cedar Falls #109<br />' +
        'Portland, OR 97229<br />'+
        '<a href="mailto:timberland@urbanwaxx.com" class="maplink">Send email</a><br />'+
        '<a href="http://www.secure-booker.com/urbanwaxxcedarfalls/BookOnlineStart.aspx" class="maplink" target="_blank">Book appointment</a><br />'+
        '<a href="http://goo.gl/c95EBq" class="maplink" target="_blank">Directions</a></div></div>';

        var infowindowTimberland = new google.maps.InfoWindow({
          content: contentTimberland,
          maxWidth: 200
        });

        var markerTimberland = new google.maps.Marker({
              position: UXTimberland,
              map: mapTimberland,
              title: 'Urban Waxx Timberland'
        });

        //infowindow closed on initial load (primary method)
        google.maps.event.addListener(markerTimberland, 'click', function() {
            infowindowTimberland.open(mapTimberland,markerTimberland);
        });

        // infowindow auto open (alertnative method)
        infowindowTimberland.open(mapTimberland,markerTimberland);

        mapTimberland.mapTypes.set('map_style', styledMap);
        mapTimberland.setMapTypeId('map_style');

    },
    tanasborne: function() {
        var UXTanasbourne = new google.maps.LatLng(45.537684,-122.88359);
        var UXTanasbourneCenter = new google.maps.LatLng(45.5401584,-122.8839298);
        // For Tanasbourne
        var mapOptionsTanasbourne = {
            zoom: 15,
            center: UXTanasbourneCenter,
            panControl: false,
            zoomControl: true,
            scaleControl: true, 
            mapTypeControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
        };

        var mapTanasbourne = new google.maps.Map(document.getElementById('mapTanasbourne'),
        mapOptionsTanasbourne);

        var contentTanasbourne = '<div class="mapinfowindow">'+
        '<div class="mapinfowindowstyle"><strong>Urban Waxx Tanasbourne</strong><br />'+
        '2368 NW Amberbrook Dr.<br />' +
        'Beaverton, OR 97006<br />'+
        '<a href="mailto:tanasbourne@urbanwaxx.com" class="maplink">Send email</a><br />'+
        '<a href="http://www.secure-booker.com/urbanwaxxamber/MakeAppointment/Search.aspx" class="maplink" target="_blank">Book appointment</a><br />'+
        '<a href="http://goo.gl/UODzP9" class="maplink" target="_blank">Directions</a></div></div>';


        var infowindowTanasbourne = new google.maps.InfoWindow({
          content: contentTanasbourne,
          maxWidth: 200
        });

        var markerTanasbourne = new google.maps.Marker({
              position: UXTanasbourne,
              map: mapTanasbourne,
              title: 'Urban Waxx NW Tanasbourne'
        });

        //infowindow closed on initial load (primary method)
        google.maps.event.addListener(markerTanasbourne, 'click', function() {
            infowindowTanasbourne.open(mapTanasbourne,markerTanasbourne);
        });
        
        // infowindow auto open (alertnative method)
        infowindowTanasbourne.open(mapTanasbourne,markerTanasbourne);

        mapTanasbourne.mapTypes.set('map_style', styledMap);
        mapTanasbourne.setMapTypeId('map_style');
    },
    eugene: function() {

        var UXEugene = new google.maps.LatLng(44.049474,-123.092754);
        var UXEugeneCenter = new google.maps.LatLng(44.0523424, -123.092905);
         // For Eugene
        var mapOptionsEugene = {
            zoom: 15,
            center: UXEugeneCenter,
            panControl: false,
            zoomControl: true,
            scaleControl: true, 
            mapTypeControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
        };

        var mapEugene = new google.maps.Map(document.getElementById('mapEugene'),
        mapOptionsEugene);

        var contentEugene = '<div class="mapinfowindow">'+
        '<div class="mapinfowindowstyle"><strong>Urban Waxx Eugene</strong><br />'+
        '944 Willamette St.<br />' +
        'Eugene, OR 97401<br />'+
        '<a href="mailto:eugene@urbanwaxx.com" class="maplink">Send email</a><br />'+
        '<a href="http://www.secure-booker.com/urbanwaxxeugene/MakeAppointment/Search.aspx" class="maplink" target="_blank">Book appointment</a><br />'+
        '<a href="http://goo.gl/I66xms" class="maplink" target="_blank">Directions</a></div></div>';


        var infowindowEugene = new google.maps.InfoWindow({
          content: contentEugene,
          maxWidth: 400
        });

        var markerEugene = new google.maps.Marker({
              position: UXEugene,
              map: mapEugene,
              title: 'Urban Waxx NW Eugene'
        });

        //infowindow closed on initial load (primary method)
        google.maps.event.addListener(markerEugene, 'click', function() {
            infowindowEugene.open(mapEugene,markerEugene);
        });
        
        // infowindow auto open (alertnative method)
        infowindowEugene.open(mapEugene,markerEugene);

        mapEugene.mapTypes.set('map_style', styledMap);
        mapEugene.setMapTypeId('map_style');
    }
}

window.mapFunctions = mapFunctions;

}())
