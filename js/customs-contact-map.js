
var map;
var var_location = new google.maps.LatLng(9.07989, 7.41498);
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var isDraggable = w > 480 ? true : false;

function map_init() {		 	
	
	var var_mapoptions = {
		center: var_location,
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		panControl:false,
		rotateControl:false,
		streetViewControl: false,
		scrollwheel: false,
		draggable: isDraggable,
	};
	
	map = new google.maps.Map(document.getElementById("contact-map"), var_mapoptions);
  
	var var_marker = new google.maps.Marker({
		position: var_location,
		map: map,
		icon: 'image/icon/map-location.png',
		maxWidth: 30,
		maxHeight: 30,
		clickable: false,
	});

}

google.maps.event.addDomListener(window, 'load', map_init);