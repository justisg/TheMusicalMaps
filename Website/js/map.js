// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 2;

let data = [
    //Classical
    {
        "name": "Classical",
        "data2019": "data/classical2019.csv",
        "data2020": "data/classical2020.csv",
    },
    //Country
    {
        "name": "Country",
        "data2019": "data/country2019.csv",
        "data2020": "data/country2020.csv",
    },
    //Electronic
    {
        "name": "Electronic",
        "data2019": "data/electronic2019.csv",
        "data2020": "data/electronic2020.csv",
    },
    //Indie
	{
        "name": "Indie",
        "data2019": "data/indie2019.csv",
        "data2020": "data/indie2020.csv",
    },
    //Pop
	{
        "name": "Pop",
        "data2019": "data/pop2019.csv",
        "data2020": "data/pop2020.csv",
    },
    //Rap
    {
        "name": "Rap",
        "data2019": "data/rap2019.csv",
        "data2020": "data/rap2020.csv",
    },
    //Rock
    {
        "name": "Rock",
        "data2019": "data/rock2019.csv",
        "data2020": "data/rock2020.csv",
    },
]

// global variables
let markers = [];
let showing = []; 
for (var i = 0; i < data.length; i++) {
    markers.push(null);
    showing.push(false);
}
var legend = L.control({position: 'bottomleft'});


// initialize
$( document ).ready(function() {
	sideBarItems(data);
	createMap(lat,lon,zl);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

function sideBarItems(data) {
    data.forEach(function(item, index) {
        $(".sidebar").append(`<div class="${showing[index] ? "sidebar-item-active" : "sidebar-item"}" id="${item.name}" onclick="loadAndMapData(${index});toggleSidebarItem(${index});">${item.name}</div>`);
    });
    $(".sidebar").append(`<div class="sidebar-title">Artists</div>`);
}

function toggleSidebarItem(index) {
    var sidebarItem = document.getElementById(data[index].name);
    sidebarItem.classList.toggle("sidebar-item-active");
}

function loadAndMapData(index) {
    if(!markers[index]) {
        markers[index] = L.featureGroup();
        color1 = getRandomColor();
        color2 = getRandomColor();
        data[index].color2020 = color1;
        data[index].color2019 = color2;
        if(!data[index].skid) {
            Papa.parse(data[index].data2020, {
                header: true,
                download: true,
                complete: function(res) {
                    res.data.forEach(function(artist) {
                        songKick(index, `https://api.songkick.com/api/3.0/artists/${artist.skid}/gigography.json?apikey=Z2JWQTvgk4tsCdDn&min_date=2020-01-01&max_date=2020-12-31`, artist, color1);
                    });
                }
            });
            Papa.parse(data[index].data2019, {
                header: true,
                download: true,
                complete: function(res) {
                    res.data.forEach(function(artist) {
                        songKick(index, `https://api.songkick.com/api/3.0/artists/${artist.skid}/gigography.json?apikey=Z2JWQTvgk4tsCdDn&min_date=2019-01-01&max_date=2019-12-31`, artist, color2);
                    });
                }
            });
        }
        else {
            songKick(index, `https://api.songkick.com/api/3.0/artists/${data[index].skid}/gigography.json?apikey=Z2JWQTvgk4tsCdDn&min_date=2020-01-01&max_date=2020-12-31`, data[index], color1);
            songKick(index, `https://api.songkick.com/api/3.0/artists/${data[index].skid}/gigography.json?apikey=Z2JWQTvgk4tsCdDn&min_date=2019-01-01&max_date=2019-12-31`, data[index], color2);
        }
        markers[index].addTo(map);
        showing[index] = true;
        renderLegend();
        return;
    }
    if(showing[index]) {
        map.removeLayer(markers[index]);
        showing[index] = false;
    }
    else {
        markers[index].addTo(map);
        showing[index] = true;
    }
    renderLegend();
}

function renderLegend() {
    map.removeLayer(legend);
    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        labels = ['<strong style="font-family:Montserrat">Legend</strong>']
        for (var i = 0; i < data.length; i++) {
            if(showing[i]) {
                div.innerHTML += 
                labels.push(
                    '<i class="circle" style="background:' + data[i].color2019 + '"></i> ' +
                    '<span style="font-family:Montserrat">' + data[i].name + " 2019</span>");
                div.innerHTML += 
                labels.push(
                    '<i class="circle" style="background:' + data[i].color2020 + '"></i> ' +
                    '<span style="font-family:Montserrat">' + data[i].name + " 2020</span>");
            }
        }
        div.innerHTML = labels.join('<br>');
        return div;
    };
    legend.addTo(map);
}

document.getElementById('searchbox').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        this.blur();
        searchArtist();
        return false;
    }
}

function searchArtist(){
	const textBox = document.getElementById('searchbox');
	let query = textBox.value;
    //Check if null or whitespace or empty search query
    if(!query || query.length === 0 || /^\s*$/.test(query)) {
        textBox.value = "";
        return;
    }
	songKickArtistSearch(query);
}

function songKickArtistSearch(artist) {
    fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=Z2JWQTvgk4tsCdDn&query=${artist}`)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        let resultsPage = myJson.resultsPage;

        if(!resultsPage.totalEntries) {
            alert("No Artist Found!");
        }
        else {
            artistName = myJson.resultsPage.results.artist[0].displayName;
            artistId = myJson.resultsPage.results.artist[0].id;
            markers.push(null);
            showing.push(false);
            var details = {
                "grant_type": "client_credentials",
            };
            var formBody = [];
            for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch(`https://accounts.spotify.com/api/token`, {
                method: 'post',
                headers: {
                    "Authorization": "Basic YmQ0YjY3YzhlZDY5NGIzMmI2MzMwYjU2NGUzMTk2YmE6MzU1MzA2YzI0ZDVkNDgxNjhiMDYxODBiMTRkM2Q3N2Q",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
                body: formBody,
            })
            .then((response) => {
                return response.json();
            })
            .then((authResponse) => {
                console.log(authResponse);
                fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`, {
                    headers: {
                        "Authorization": `Bearer ${authResponse.access_token}`,
                    },
                })
                .then((response) => {
                    return response.json();
                })
                .then((spotifyJson) => {
                    if(!spotifyJson.artists || !spotifyJson.artists.total) {
                        data.push({
                            "name": artistName,
                            "skid": artistId,
                        });
                        $(".sidebar").append(`<div class="${showing[data.length-1] ? "sidebar-item-active" : "sidebar-item"}" id="${artistName}" onclick="loadAndMapData(${data.length-1});toggleSidebarItem(${data.length-1});">${artistName}</div>`);
                        return;
                    }
                    data.push({
                        "name": artistName,
                        "skid": artistId,
                        "spid": spotifyJson.artists.items[0].id,
                    });
                    $(".sidebar").append(`<div class="${showing[data.length-1] ? "sidebar-item-active" : "sidebar-item"}" id="${artistName}" onclick="loadAndMapData(${data.length-1});toggleSidebarItem(${data.length-1});">${artistName}</div>`);
                });
            });
        }
    });
}

function songKick(index, url, artist, color) {
	fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((myJson) => {
		var count = 0;
		let resultsPage = myJson.resultsPage;
		if(resultsPage.totalEntries) {
			myJson.resultsPage.results.event.forEach(function(event) {
				let markerOptions = {
					radius: event.popularity * 25,
					weight: 1,
					color: 'white',
					fillColor: color,
					fillOpacity: .75
				}
				if(event.location != null && event.location.lat != null) {
					let marker = L.circleMarker([event.location.lat, event.location.lng], markerOptions).on('mouseover',function()
					{
						this.bindPopup(`
                        <span class="circle" style="background:${color}"></span><span class="popup-title">   ${event.displayName}</span><br>
                        <span>Artist: ${artist.spid ? `<a href="https://open.spotify.com/artist/${artist.spid}" target="_blank">${artist.name}</a>` : artist.name}</span><br>
                        <span>${event.start.time ? `Date & Time: ${event.start.date} at ${event.start.time}` : `Date: ${event.start.date}`}</span><br>
                        <span>Venue: ${event.venue.displayName}, ${event.location.city}</span><br>
                        <div>Popularity:</div>
                        <div class="progress-bar">
                            <div class="progress-bar-container" style="width:${(200-57)*event.popularity}px;background-color:${color}"></div>
                        </div>`, {minWidth: 300}).openPopup();
					});
					markers[index].addLayer(marker);
				}
				count += 1;
			});
			if((myJson.resultsPage.page-1) * 50 + count < myJson.resultsPage.totalEntries) {
				songKick(index, url+`&page=${myJson.resultsPage.page + 1}`, artist, color);
			}
		}
	});
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }