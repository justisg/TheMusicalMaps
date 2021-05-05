// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 2;

let data = [
    //Classical
    {
        "name": "Classical",
        "artists2020": [
            {
                "name": "The Piano Guys",
                "skskid": 5872269,
                "spid": "0jW6R8CVyVohuUJVcuweDI",
            },
            {
                "name": "Lindsey Stirling",
                "skskid": 5429218,
                "spid": "378dH6EszOLFShpRzAQkVM",
            },
            {
                "name": "Yo-Yo Ma",
                "skskid": 147314,
                "spid": "5Dl3HXZjG6ZOWT5cV375lk",
            },
            {
                "name": "Max Richter",
                "skskid": 196980,
                "spid": "2VZNmg4vCnew4Pavo8zDdW",
            },
            {
                "name": "Yiruma",
                "skid": 299146,
                "spid": "0fauHpmSHwodVYIjTqOGHz",
            },
            {
                "name": "Andrea Bocelli",
                "skid": 475292,
                "spid": "3EA9hVIzKfFiQI0Kikz2wo",
            },
            {
                "name": "San Francisco Symphony",
                "skid": 408764,
                "spid": "1qHStDLIc8uV7hvTG6FGRJ",
            },
            {
                "name": "Lang Lang",
                "skid": 188643,
                "spid": "1YZhNFBxkEB5UKTgMDvot4",
            },
            {
                "name": "London Philharmonic Orchestra",
                "skid": 242113,
                "spid": "3PfJE6ebCbCHeuqO4BfNeA",
            },
        ],
        "artists2019": [
            {
                "name": "Andrea Bocelli",
                "skid": 475292,
                "spid": "3EA9hVIzKfFiQI0Kikz2wo",
            },
            {
                "name": "The Piano Guys",
                "skid": 5872269,
                "spid": "0jW6R8CVyVohuUJVcuweDI",
            },
            {
                "name": "Sarah Brightman",
                "skid": 399529,
                "spid": "7Ead768rc4ShGxnqtqccU5",
            },
            {
                "name": "Lindsey Stirling",
                "skid": 5429218,
                "spid": "378dH6EszOLFShpRzAQkVM",
            },
            {
                "name": "Carpenters",
                "skid": 86170,
                "spid": "1eEfMU2AhEo7XnKgL7c304",
            },
            {
                "name": "Michael Bolton",
                "skid": 182931,
                "spid": "0jW6R8CVyVohuUJVcuweDI",
            },
            {
                "name": "Yo-Yo Ma",
                "skid": 147314,
                "spid": "5Dl3HXZjG6ZOWT5cV375lk",
            },
            {
                "name": "Royal Philharmonic Orchestra",
                "skid": 170809,
                "spid": "0jW6R8CVyVohuUJVcuweDI",
            },
            {
                "name": "2Cellos",
                "skid": 4392693,
                "spid": "0jW6R8CVyVohuUJVcuweDI",
            },
            {
                "name": "The Texas Tenors",
                "skid": 529822,
                "spid": "0jW6R8CVyVohuUJVcuweDI",
            },
        ],
    },
    //Country
    {
        "name": "Country",
        "artists2020": [
            {
                "name": "Luke Combs",
                "skid": 8782319,
            },
            {
                "name": "Morgan Wallen",
                "skid": 8964794,
            },
            {
                "name": "Kane Brown",
                "skid": 3587911,
            },
            {
                "name": "Maren Morris",
                "skskid": 2055882,
            },
            {
                "name": "Jason Aldean",
                "skid": 486575,
            },
            {
                "name": "Sam Hunt",
                "skid": 4150076,
            },
            {
                "name": "Gabby Barrett",
                "skid": 7377954,
            },
            {
                "name": "Blake Shelton",
                "skid": 565207,
            },
            {
                "name": "Thomas Rhett",
                "skid": 4254071,
            },
            {
                "name": "Dan + Shay",
                "skid": 7775839,
            },
        ],
        "artists2019": [
            {
                "name": "Luke Combs",
                "skid": 8782319,
            },
            {
                "name": "Dan + Shay",
                "skid": 7775839,
            },
            {
                "name": "Kane Brown",
                "skid": 3587911,
            },
            {
                "name": "Thomas Rhett",
                "skid": 4254071,
            },
            {
                "name": "Florida Georgia Line",
                "skid": 4160206,
            },
            {
                "name": "Chris Stapleton",
                "skid": 793839,
            },
            {
                "name": "Morgan Wallen",
                "skid": 8964794,
            },
            {
                "name": "Maren Morris",
                "skid": 2055882,
            },
            {
                "name": "Jason Aldean",
                "skid": 486575,
            },
            {
                "name": "Blake Shelton",
                "skid": 565207,
            },
        ],
    },
    //Electronic
    {
        "name": "Electronic",
        "artists2020": [
            {
                "name": "Lady Gaga",
                "skid": 974908,
            },
            {
                "name": "The Chainsmokers",
                "skid": 2867816,
            },
            {
                "name": "Kygo",
                "skskid": 7738429,
            },
            {
                "name": "Marshmello",
                "skid": 8613384,
            },
            {
                "name": "Illenium",
                "skid": 7668859,
            },
            {
                "name": "Calvin Harris",
                "skid": 82547,
            },
            {
                "name": "Regard",
                "skid": 353321,
            },
            {
                "name": "Surf Mesa",
                "skid": 10150988,
            },
            {
                "name": "Gryffin",
                "skid": 8501183,
            },
            {
                "name": "ODESZA",
                "skid": 6018139,
            },
        ],
        "artists2019": [
            {
                "name": "The Chainsmokers",
                "skid": 2867816,
            },
            {
                "name": "Marshmello",
                "skid": 8613384,
            },
            {
                "name": "DJ Snake",
                "skid": 297319,
            },
            {
                "name": "Lady Gaga",
                "skid": 974908,
            },
            {
                "name": "Avicii",
                "skid": 3117626,
            },
            {
                "name": "ODESZA",
                "skid": 6018139,
            },
            {
                "name": "Illenium",
                "skid": 7668859,
            },
            {
                "name": "Calvin Harris",
                "skid": 82547,
            },
            {
                "name": "Alan Walker",
                "skid": 8754489,
            },
            {
                "name": "Clean Bandit",
                "skid": 3376301,
            },
        ],
    },
    //Indie
	{
        "name": "Indie",
        "artists2020": [
            {
                "name": "Bad Bunny",
                "skskid": 9059639,
            },
            {
                "name": "BTS",
                "skskid": 135912,
            },
            {
                "name": "Trippie Redd",
                "skskid": 9212594,
            },
            {
                "name": "XXXTENTACION",
                "skskid": 8997064,
            },
            {
                "name": "Morgan Wallen",
                "skid": 8964794,
            },
            {
                "name": "Jason Aldean",
                "skid": 486575,
            },
            {
                "name": "NF",
                "skid": 249773,
            },
            {
                "name": "Five Finger Death Punch",
                "skid": 577269,
            },
            {
                "name": "Joji",
                "skid": 9214309,
            },
            {
                "name": "Lauren Daigle",
                "skid": 7949878,
            },
        ],
        "artists2019": [
            {
                "name": "BTS",
                "skid": 135912,
            },
            {
                "name": "Lauren Daigle",
                "skid": 7949878,
            },
            {
                "name": "XXXTENTACION",
                "skid": 8997064,
            },
            {
                "name": "NF",
                "skid": 249773,
            },
            {
                "name": "Zac Brown Band",
                "skid": 514278,
            },
            {
                "name": "The Lumineers",
                "skid": 2827981,
            },
            {
                "name": "Anderson .Paak",
                "skid": 7286084,
            },
            {
                "name": "Five Finger Death Punch",
                "skid": 577269,
            },
            {
                "name": "Eric Clapton",
                "skid": 387667,
            },
            {
                "name": "Sammy Hagar",
                "skid": 186864,
            },
        ],
    },
    //Pop
	{
        "name": "Pop",
        "artists2020": [
            {
                "name": "The Weeknd",
                "skskid": 4363463,
            },
            {
                "name": "Dua Lipa",
                "skskid": 8310783,
            },
            {
                "name": "Harry Styles",
                "skskid": 5820634,
            },
            {
                "name": "Lewis Capaldi",
                "skskid": 7156949,
            },
            {
                "name": "Post Malone",
                "skid": 8508053,
            },
            {
                "name": "Doja Cat",
                "skid": 8030683,
            },
            {
                "name": "Justin Bieber",
                "skid": 2596951,
            },
            {
                "name": "Lizzy",
                "skid": 531361,
            },
            {
                "name": "Maroon 5",
                "skid": 181875,
            },
            {
                "name": "Selena Gomez",
                "skid": 1059348,
            },
        ],
        "artists2019": [
            {
                "name": "Ariana Grande",
                "skid": 4971683,
            },
            {
                "name": "Post Malone",
                "skid": 8508053,
            },
            {
                "name": "Khalid",
                "skid": 894756,
            },
            {
                "name": "Jonas Brothers",
                "skid": 110449,
            },
            {
                "name": "Halsey",
                "skid": 8067338,
            },
            {
                "name": "Panic! At The Disco",
                "skid": 139037,
            },
            {
                "name": "Shawn Mendes",
                "skid": 38125949,
            },
            {
                "name": "Billie Eilish",
                "skid": 8913479,
            },
            {
                "name": "Lizzo",
                "skid": 5031783,
            },
            {
                "name": "Ed Sheeran",
                "skid": 2083334,
            },
        ],
    },
    //Rap
    {
        "name": "Rap",
        "artists2020": [
            {
                "name": "Roddy Ricch",
                "skskid": 9728669,
            },
            {
                "name": "DaBaby",
                "skskid": 9883244,
            },
            {
                "name": "Lil Baby",
                "skskid": 9438699,
            },
            {
                "name": "Drake",
                "skskid": 556955,
            },
            {
                "name": "Megan Thee Stallion",
                "skid": 9701784,
            },
            {
                "name": "Juice WRLD",
                "skid": 9550809,
            },
            {
                "name": "Pop Smoke",
                "skid": 10071322,
            },
            {
                "name": "Arizona Zervas",
                "skid": 8896099,
            },
            {
                "name": "Lil Uzi Vert",
                "skid": 8081893,
            },
            {
                "name": "Travis Scott",
                "skid": 6008144,
            },
        ],
        "artists2019": [
            {
                "name": "Post Malone",
                "skid": 8508053,
            },
            {
                "name": "Lil Nas X",
                "skid": 10001194,
            },
            {
                "name": "Cardi B",
                "skid": 8962314,
            },
            {
                "name": "Travis Scott",
                "skid": 6008144,
            },
            {
                "name": "DaBaby",
                "skid": 9883244,
            },
            {
                "name": "Lizzo",
                "skid": 5031783,
            },
            {
                "name": "Swae Lee",
                "skid": 9811034,
            },
            {
                "name": "J. Cole",
                "skid": 832745,
            },
            {
                "name": "Lil Baby",
                "skid": 9438699,
            },
            {
                "name": "Drake",
                "skid": 556955,
            },
        ],
    },
    //Rock
    {
        "name": "Rock",
        "artists2020": [
            {
                "name": "Panic! At The Disco",
                "skskid": 139037,
            },
            {
                "name": "Machine Gun Kelly",
                "skskid": 6630384,
            },
            {
                "name": "Fleetwood Mac",
                "skskid": 323006,
            },
            {
                "name": "The Beatles",
                "skskid": 417271,
            },
            {
                "name": "twenty one pilots",
                "skid": 3123851,
            },
            {
                "name": "Queen",
                "skid": 469904,
            },
            {
                "name": "AJR",
                "skid": 1880688,
            },
            {
                "name": "Tame Impala",
                "skid": 927852,
            },
            {
                "name": "Elton John",
                "skid": 371163,
            },
            {
                "name": "Imagine Dragons",
                "skid": 2506696,
            },
        ],
        "artists2019": [
            {
                "name": "Panic! At The Disco",
                "skid": 139037,
            },
            {
                "name": "Queen",
                "skid": 469904,
            },
            {
                "name": "Imagine Dragons",
                "skid": 2506696,
            },
            {
                "name": "twenty one pilots",
                "skid": 3123851,
            },
            {
                "name": "The Beatles",
                "skid": 417271,
            },
            {
                "name": "Tool",
                "skid": 521019,
            },
            {
                "name": "Elton John",
                "skid": 371163,
            },
            {
                "name": "lovelytheband",
                "skid": 9280609,
            },
            {
                "name": "Mumford & Sons",
                "skid": 2202327,
            },
            {
                "name": "Hozier",
                "skid": 7104269,
            },
        ],
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
        data[index].artists2020.forEach(function(artist) {
            console.log(artist)
            songKick(index, `https://api.songkick.com/api/3.0/artists/${artist.skid}/gigography.json?apikey=Z2JWQTvgk4tsCdDn&min_date=2020-01-01&max_date=2020-12-31`, artist, color1);
        });
        data[index].artists2019.forEach(function(artist) {
            songKick(index, `https://api.songkick.com/api/3.0/artists/${artist.skid}/gigography.json?apikey=Z2JWQTvgk4tsCdDn&min_date=2019-01-01&max_date=2019-12-31`, artist, color2);
        });
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
        if(resultsPage.totalEntries) {
            artistName = myJson.resultsPage.results.artist[0].displayName;
            artistId = myJson.resultsPage.results.artist[0].id;
            markers.push(null);
            showing.push(false);
            data.push({
                "name": artistName,
                "color2019": null,
                "color2020": null,
                "artists2019": [
                    {
                        "name": artistName,
                        "skid": artistId,
                    }
                ],
                "artists2020": [
                    {
                        "name": artistName,
                        "skid": artistId,
                    }
                ],
            });
            $(".sidebar").append(`<div class="${showing[data.length-1] ? "sidebar-item-active" : "sidebar-item"}" id="${artistName}" onclick="loadAndMapData(${data.length-1});toggleSidebarItem(${data.length-1});">${artistName}</div>`);
        }
        else {
            alert("No Artist Found!");
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
                        <div class="popup-title">${event.displayName}</div><br>
                        <div>Artist: <a href="https://open.spotify.com/artist/${artist.spid}" target="_blank">${artist.name}</a></div><br>
                        <div>${event.start.time ? `Date & Time: ${event.start.date} at ${event.start.time}` : `Date: ${event.start.date}`}</div><br>
                        <div>Venue: ${event.venue.displayName}</div><br>
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