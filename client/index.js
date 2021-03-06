const countries = {
  Andorra: { code: "AD", lat: "42.546245", long: "1.601554" },
  "United Arab Emirates": {
    code: "AE",
    lat: "23.424076",
    long: "53.847818",
  },
  Afghanistan: { code: "AF", lat: "33.93911", long: "67.709953" },
  "Antigua and Barbuda": {
    code: "AG",
    lat: "17.060816",
    long: "-61.796428",
  },
  Anguilla: { code: "AI", lat: "18.220554", long: "-63.068615" },
  Albania: { code: "AL", lat: "41.153332", long: "20.168331" },
  Armenia: { code: "AM", lat: "40.069099", long: "45.038189" },
  "Netherlands Antilles": {
    code: "AN",
    lat: "12.226079",
    long: "-69.060087",
  },
  Angola: { code: "AO", lat: "-11.202692", long: "17.873887" },
  Antarctica: { code: "AQ", lat: "-75.250973", long: "-0.071389" },
  Argentina: { code: "AR", lat: "-38.416097", long: "-63.616672" },
  "American Samoa": {
    code: "AS",
    lat: "-14.270972",
    long: "-170.132217",
  },
  Austria: { code: "AT", lat: "47.516231", long: "14.550072" },
  Australia: { code: "AU", lat: "-25.274398", long: "133.775136" },
  Aruba: { code: "AW", lat: "12.52111", long: "-69.968338" },
  Azerbaijan: { code: "AZ", lat: "40.143105", long: "47.576927" },
  "Bosnia and Herzegovina": {
    code: "BA",
    lat: "43.915886",
    long: "17.679076",
  },
  Barbados: { code: "BB", lat: "13.193887", long: "-59.543198" },
  Bangladesh: { code: "BD", lat: "23.684994", long: "90.356331" },
  Belgium: { code: "BE", lat: "50.503887", long: "4.469936" },
  "Burkina Faso": { code: "BF", lat: "12.238333", long: "-1.561593" },
  Bulgaria: { code: "BG", lat: "42.733883", long: "25.48583" },
  Bahrain: { code: "BH", lat: "25.930414", long: "50.637772" },
  Burundi: { code: "BI", lat: "-3.373056", long: "29.918886" },
  Benin: { code: "BJ", lat: "9.30769", long: "2.315834" },
  Bermuda: { code: "BM", lat: "32.321384", long: "-64.75737" },
  Brunei: { code: "BN", lat: "4.535277", long: "114.727669" },
  Bolivia: { code: "BO", lat: "-16.290154", long: "-63.588653" },
  Brazil: { code: "BR", lat: "-14.235004", long: "-51.92528" },
  Bahamas: { code: "BS", lat: "25.03428", long: "-77.39628" },
  Bhutan: { code: "BT", lat: "27.514162", long: "90.433601" },
  "Bouvet Island": { code: "BV", lat: "-54.423199", long: "3.413194" },
  Botswana: { code: "BW", lat: "-22.328474", long: "24.684866" },
  Belarus: { code: "BY", lat: "53.709807", long: "27.953389" },
  Belize: { code: "BZ", lat: "17.189877", long: "-88.49765" },
  Canada: { code: "CA", lat: "56.130366", long: "-106.346771" },
  "Cocos [Keeling] Islands": {
    code: "CC",
    lat: "-12.164165",
    long: "96.870956",
  },
  "Congo [DRC]": { code: "CD", lat: "-4.038333", long: "21.758664" },
  "Central African Republic": {
    code: "CF",
    lat: "6.611111",
    long: "20.939444",
  },
  "Congo [Republic]": { code: "CG", lat: "-0.228021", long: "15.827659" },
  Switzerland: { code: "CH", lat: "46.818188", long: "8.227512" },
  "Côte d'Ivoire": { code: "CI", lat: "7.539989", long: "-5.54708" },
  "Cook Islands": { code: "CK", lat: "-21.236736", long: "-159.777671" },
  Chile: { code: "CL", lat: "-35.675147", long: "-71.542969" },
  Cameroon: { code: "CM", lat: "7.369722", long: "12.354722" },
  China: { code: "CN", lat: "35.86166", long: "104.195397" },
  Colombia: { code: "CO", lat: "4.570868", long: "-74.297333" },
  "Costa Rica": { code: "CR", lat: "9.748917", long: "-83.753428" },
  Cuba: { code: "CU", lat: "21.521757", long: "-77.781167" },
  "Cape Verde": { code: "CV", lat: "16.002082", long: "-24.013197" },
  "Christmas Island": {
    code: "CX",
    lat: "-10.447525",
    long: "105.690449",
  },
  Cyprus: { code: "CY", lat: "35.126413", long: "33.429859" },
  "Czech Republic": { code: "CZ", lat: "49.817492", long: "15.472962" },
  Germany: { code: "DE", lat: "51.165691", long: "10.451526" },
  Djibouti: { code: "DJ", lat: "11.825138", long: "42.590275" },
  Denmark: { code: "DK", lat: "56.26392", long: "9.501785" },
  Dominica: { code: "DM", lat: "15.414999", long: "-61.370976" },
  "Dominican Republic": {
    code: "DO",
    lat: "18.735693",
    long: "-70.162651",
  },
  Algeria: { code: "DZ", lat: "28.033886", long: "1.659626" },
  Ecuador: { code: "EC", lat: "-1.831239", long: "-78.183406" },
  Estonia: { code: "EE", lat: "58.595272", long: "25.013607" },
  Egypt: { code: "EG", lat: "26.820553", long: "30.802498" },
  "Western Sahara": { code: "EH", lat: "24.215527", long: "-12.885834" },
  Eritrea: { code: "ER", lat: "15.179384", long: "39.782334" },
  Spain: { code: "ES", lat: "40.463667", long: "-3.74922" },
  Ethiopia: { code: "ET", lat: "9.145", long: "40.489673" },
  Finland: { code: "FI", lat: "61.92411", long: "25.748151" },
  Fiji: { code: "FJ", lat: "-16.578193", long: "179.414413" },
  "Falkland Islands [Islas Malvinas]": {
    code: "FK",
    lat: "-51.796253",
    long: "-59.523613",
  },
  Micronesia: { code: "FM", lat: "7.425554", long: "150.550812" },
  "Faroe Islands": { code: "FO", lat: "61.892635", long: "-6.911806" },
  France: { code: "FR", lat: "46.227638", long: "2.213749" },
  Gabon: { code: "GA", lat: "-0.803689", long: "11.609444" },
  "United Kingdom": { code: "GB", lat: "55.378051", long: "-3.435973" },
  Grenada: { code: "GD", lat: "12.262776", long: "-61.604171" },
  Georgia: { code: "GE", lat: "42.315407", long: "43.356892" },
  "French Guiana": { code: "GF", lat: "3.933889", long: "-53.125782" },
  Guernsey: { code: "GG", lat: "49.465691", long: "-2.585278" },
  Ghana: { code: "GH", lat: "7.946527", long: "-1.023194" },
  Gibraltar: { code: "GI", lat: "36.137741", long: "-5.345374" },
  Greenland: { code: "GL", lat: "71.706936", long: "-42.604303" },
  Gambia: { code: "GM", lat: "13.443182", long: "-15.310139" },
  Guinea: { code: "GN", lat: "9.945587", long: "-9.696645" },
  Guadeloupe: { code: "GP", lat: "16.995971", long: "-62.067641" },
  "Equatorial Guinea": { code: "GQ", lat: "1.650801", long: "10.267895" },
  Greece: { code: "GR", lat: "39.074208", long: "21.824312" },
  "South Georgia and the South Sandwich Islands": {
    code: "GS",
    lat: "-54.429579",
    long: "-36.587909",
  },
  Guatemala: { code: "GT", lat: "15.783471", long: "-90.230759" },
  Guam: { code: "GU", lat: "13.444304", long: "144.793731" },
  "Guinea-Bissau": { code: "GW", lat: "11.803749", long: "-15.180413" },
  Guyana: { code: "GY", lat: "4.860416", long: "-58.93018" },
  "Gaza Strip": { code: "GZ", lat: "31.354676", long: "34.308825" },
  "Hong Kong": { code: "HK", lat: "22.396428", long: "114.109497" },
  "Heard Island and McDonald Islands": {
    code: "HM",
    lat: "-53.08181",
    long: "73.504158",
  },
  Honduras: { code: "HN", lat: "15.199999", long: "-86.241905" },
  Croatia: { code: "HR", lat: "45.1", long: "15.2" },
  Haiti: { code: "HT", lat: "18.971187", long: "-72.285215" },
  Hungary: { code: "HU", lat: "47.162494", long: "19.503304" },
  Indonesia: { code: "ID", lat: "-0.789275", long: "113.921327" },
  Ireland: { code: "IE", lat: "53.41291", long: "-8.24389" },
  Israel: { code: "IL", lat: "31.046051", long: "34.851612" },
  "Isle of Man": { code: "IM", lat: "54.236107", long: "-4.548056" },
  India: { code: "IN", lat: "20.593684", long: "78.96288" },
  "British Indian Ocean Territory": {
    code: "IO",
    lat: "-6.343194",
    long: "71.876519",
  },
  Iraq: { code: "IQ", lat: "33.223191", long: "43.679291" },
  Iran: { code: "IR", lat: "32.427908", long: "53.688046" },
  Iceland: { code: "IS", lat: "64.963051", long: "-19.020835" },
  Italy: { code: "IT", lat: "41.87194", long: "12.56738" },
  Jersey: { code: "JE", lat: "49.214439", long: "-2.13125" },
  Jamaica: { code: "JM", lat: "18.109581", long: "-77.297508" },
  Jordan: { code: "JO", lat: "30.585164", long: "36.238414" },
  Japan: { code: "JP", lat: "36.204824", long: "138.252924" },
  Kenya: { code: "KE", lat: "-0.023559", long: "37.906193" },
  Kyrgyzstan: { code: "KG", lat: "41.20438", long: "74.766098" },
  Cambodia: { code: "KH", lat: "12.565679", long: "104.990963" },
  Kiribati: { code: "KI", lat: "-3.370417", long: "-168.734039" },
  Comoros: { code: "KM", lat: "-11.875001", long: "43.872219" },
  "Saint Kitts and Nevis": {
    code: "KN",
    lat: "17.357822",
    long: "-62.782998",
  },
  "North Korea": { code: "KP", lat: "40.339852", long: "127.510093" },
  "South Korea": { code: "KR", lat: "35.907757", long: "127.766922" },
  Kuwait: { code: "KW", lat: "29.31166", long: "47.481766" },
  "Cayman Islands": { code: "KY", lat: "19.513469", long: "-80.566956" },
  Kazakhstan: { code: "KZ", lat: "48.019573", long: "66.923684" },
  Laos: { code: "LA", lat: "19.85627", long: "102.495496" },
  Lebanon: { code: "LB", lat: "33.854721", long: "35.862285" },
  "Saint Lucia": { code: "LC", lat: "13.909444", long: "-60.978893" },
  Liechtenstein: { code: "LI", lat: "47.166", long: "9.555373" },
  "Sri Lanka": { code: "LK", lat: "7.873054", long: "80.771797" },
  Liberia: { code: "LR", lat: "6.428055", long: "-9.429499" },
  Lesotho: { code: "LS", lat: "-29.609988", long: "28.233608" },
  Lithuania: { code: "LT", lat: "55.169438", long: "23.881275" },
  Luxembourg: { code: "LU", lat: "49.815273", long: "6.129583" },
  Latvia: { code: "LV", lat: "56.879635", long: "24.603189" },
  Libya: { code: "LY", lat: "26.3351", long: "17.228331" },
  Morocco: { code: "MA", lat: "31.791702", long: "-7.09262" },
  Monaco: { code: "MC", lat: "43.750298", long: "7.412841" },
  Moldova: { code: "MD", lat: "47.411631", long: "28.369885" },
  Montenegro: { code: "ME", lat: "42.708678", long: "19.37439" },
  Madagascar: { code: "MG", lat: "-18.766947", long: "46.869107" },
  "Marshall Islands": { code: "MH", lat: "7.131474", long: "171.184478" },
  "Macedonia [FYROM]": {
    code: "MK",
    lat: "41.608635",
    long: "21.745275",
  },
  Mali: { code: "ML", lat: "17.570692", long: "-3.996166" },
  "Myanmar [Burma]": { code: "MM", lat: "21.913965", long: "95.956223" },
  Mongolia: { code: "MN", lat: "46.862496", long: "103.846656" },
  Macau: { code: "MO", lat: "22.198745", long: "113.543873" },
  "Northern Mariana Islands": {
    code: "MP",
    lat: "17.33083",
    long: "145.38469",
  },
  Martinique: { code: "MQ", lat: "14.641528", long: "-61.024174" },
  Mauritania: { code: "MR", lat: "21.00789", long: "-10.940835" },
  Montserrat: { code: "MS", lat: "16.742498", long: "-62.187366" },
  Malta: { code: "MT", lat: "35.937496", long: "14.375416" },
  Mauritius: { code: "MU", lat: "-20.348404", long: "57.552152" },
  Maldives: { code: "MV", lat: "3.202778", long: "73.22068" },
  Malawi: { code: "MW", lat: "-13.254308", long: "34.301525" },
  Mexico: { code: "MX", lat: "23.634501", long: "-102.552784" },
  Malaysia: { code: "MY", lat: "4.210484", long: "101.975766" },
  Mozambique: { code: "MZ", lat: "-18.665695", long: "35.529562" },
  Namibia: { code: "NA", lat: "-22.95764", long: "18.49041" },
  "New Caledonia": { code: "NC", lat: "-20.904305", long: "165.618042" },
  Niger: { code: "NE", lat: "17.607789", long: "8.081666" },
  "Norfolk Island": { code: "NF", lat: "-29.040835", long: "167.954712" },
  Nigeria: { code: "NG", lat: "9.081999", long: "8.675277" },
  Nicaragua: { code: "NI", lat: "12.865416", long: "-85.207229" },
  Netherlands: { code: "NL", lat: "52.132633", long: "5.291266" },
  Norway: { code: "NO", lat: "60.472024", long: "8.468946" },
  Nepal: { code: "NP", lat: "28.394857", long: "84.124008" },
  Nauru: { code: "NR", lat: "-0.522778", long: "166.931503" },
  Niue: { code: "NU", lat: "-19.054445", long: "-169.867233" },
  "New Zealand": { code: "NZ", lat: "-40.900557", long: "174.885971" },
  Oman: { code: "OM", lat: "21.512583", long: "55.923255" },
  Panama: { code: "PA", lat: "8.537981", long: "-80.782127" },
  Peru: { code: "PE", lat: "-9.189967", long: "-75.015152" },
  "French Polynesia": {
    code: "PF",
    lat: "-17.679742",
    long: "-149.406843",
  },
  "Papua New Guinea": { code: "PG", lat: "-6.314993", long: "143.95555" },
  Philippines: { code: "PH", lat: "12.879721", long: "121.774017" },
  Pakistan: { code: "PK", lat: "30.375321", long: "69.345116" },
  Poland: { code: "PL", lat: "51.919438", long: "19.145136" },
  "Saint Pierre and Miquelon": {
    code: "PM",
    lat: "46.941936",
    long: "-56.27111",
  },
  "Pitcairn Islands": {
    code: "PN",
    lat: "-24.703615",
    long: "-127.439308",
  },
  "Puerto Rico": { code: "PR", lat: "18.220833", long: "-66.590149" },
  "Palestinian Territories": {
    code: "PS",
    lat: "31.952162",
    long: "35.233154",
  },
  Portugal: { code: "PT", lat: "39.399872", long: "-8.224454" },
  Palau: { code: "PW", lat: "7.51498", long: "134.58252" },
  Paraguay: { code: "PY", lat: "-23.442503", long: "-58.443832" },
  Qatar: { code: "QA", lat: "25.354826", long: "51.183884" },
  Réunion: { code: "RE", lat: "-21.115141", long: "55.536384" },
  Romania: { code: "RO", lat: "45.943161", long: "24.96676" },
  Serbia: { code: "RS", lat: "44.016521", long: "21.005859" },
  Russia: { code: "RU", lat: "61.52401", long: "105.318756" },
  Rwanda: { code: "RW", lat: "-1.940278", long: "29.873888" },
  "Saudi Arabia": { code: "SA", lat: "23.885942", long: "45.079162" },
  "Solomon Islands": { code: "SB", lat: "-9.64571", long: "160.156194" },
  Seychelles: { code: "SC", lat: "-4.679574", long: "55.491977" },
  Sudan: { code: "SD", lat: "12.862807", long: "30.217636" },
  Sweden: { code: "SE", lat: "60.128161", long: "18.643501" },
  Singapore: { code: "SG", lat: "1.352083", long: "103.819836" },
  "Saint Helena": { code: "SH", lat: "-24.143474", long: "-10.030696" },
  Slovenia: { code: "SI", lat: "46.151241", long: "14.995463" },
  "Svalbard and Jan Mayen": {
    code: "SJ",
    lat: "77.553604",
    long: "23.670272",
  },
  Slovakia: { code: "SK", lat: "48.669026", long: "19.699024" },
  "Sierra Leone": { code: "SL", lat: "8.460555", long: "-11.779889" },
  "San Marino": { code: "SM", lat: "43.94236", long: "12.457777" },
  Senegal: { code: "SN", lat: "14.497401", long: "-14.452362" },
  Somalia: { code: "SO", lat: "5.152149", long: "46.199616" },
  Suriname: { code: "SR", lat: "3.919305", long: "-56.027783" },
  "São Tomé and Príncipe": {
    code: "ST",
    lat: "0.18636",
    long: "6.613081",
  },
  "El Salvador": { code: "SV", lat: "13.794185", long: "-88.89653" },
  Syria: { code: "SY", lat: "34.802075", long: "38.996815" },
  Swaziland: { code: "SZ", lat: "-26.522503", long: "31.465866" },
  "Turks and Caicos Islands": {
    code: "TC",
    lat: "21.694025",
    long: "-71.797928",
  },
  Chad: { code: "TD", lat: "15.454166", long: "18.732207" },
  "French Southern Territories": {
    code: "TF",
    lat: "-49.280366",
    long: "69.348557",
  },
  Togo: { code: "TG", lat: "8.619543", long: "0.824782" },
  Thailand: { code: "TH", lat: "15.870032", long: "100.992541" },
  Tajikistan: { code: "TJ", lat: "38.861034", long: "71.276093" },
  Tokelau: { code: "TK", lat: "-8.967363", long: "-171.855881" },
  "Timor-Leste": { code: "TL", lat: "-8.874217", long: "125.727539" },
  Turkmenistan: { code: "TM", lat: "38.969719", long: "59.556278" },
  Tunisia: { code: "TN", lat: "33.886917", long: "9.537499" },
  Tonga: { code: "TO", lat: "-21.178986", long: "-175.198242" },
  Turkey: { code: "TR", lat: "38.963745", long: "35.243322" },
  "Trinidad and Tobago": {
    code: "TT",
    lat: "10.691803",
    long: "-61.222503",
  },
  Tuvalu: { code: "TV", lat: "-7.109535", long: "177.64933" },
  Taiwan: { code: "TW", lat: "23.69781", long: "120.960515" },
  Tanzania: { code: "TZ", lat: "-6.369028", long: "34.888822" },
  Ukraine: { code: "UA", lat: "48.379433", long: "31.16558" },
  Uganda: { code: "UG", lat: "1.373333", long: "32.290275" },
  "U.S. Minor Outlying Islands": { code: "UM", lat: "", long: "" },
  "United States": { code: "US", lat: "37.09024", long: "-95.712891" },
  Uruguay: { code: "UY", lat: "-32.522779", long: "-55.765835" },
  Uzbekistan: { code: "UZ", lat: "41.377491", long: "64.585262" },
  "Vatican City": { code: "VA", lat: "41.902916", long: "12.453389" },
  "Saint Vincent and the Grenadines": {
    code: "VC",
    lat: "12.984305",
    long: "-61.287228",
  },
  Venezuela: { code: "VE", lat: "6.42375", long: "-66.58973" },
  "British Virgin Islands": {
    code: "VG",
    lat: "18.420695",
    long: "-64.639968",
  },
  "U.S. Virgin Islands": {
    code: "VI",
    lat: "18.335765",
    long: "-64.896335",
  },
  Vietnam: { code: "VN", lat: "14.058324", long: "108.277199" },
  Vanuatu: { code: "VU", lat: "-15.376706", long: "166.959158" },
  "Wallis and Futuna": {
    code: "WF",
    lat: "-13.768752",
    long: "-177.156097",
  },
  Samoa: { code: "WS", lat: "-13.759029", long: "-172.104629" },
  Kosovo: { code: "XK", lat: "42.602636", long: "20.902977" },
  Yemen: { code: "YE", lat: "15.552727", long: "48.516388" },
  Mayotte: { code: "YT", lat: "-12.8275", long: "45.166244" },
  "South Africa": { code: "ZA", lat: "-30.559482", long: "22.937506" },
  Zambia: { code: "ZM", lat: "-13.133897", long: "27.849332" },
  Zimbabwe: { code: "ZW", lat: "-19.015438", long: "29.154857" },
};

class Pointer{
  constructor(){
    this.type="drag"
  }
}

let ammo={
  nukes:5,
  moab:10
}

const url = "http://localhost:8080";
let chooseBaseButton = document.getElementById("chooseBaseButton");
let chooseBaseInput = document.getElementById("chooseBaseInput");
let nukeButton=document.getElementById("nukeButton")
let moab=document.getElementById("moab")
nukeButton.innerText+=` ${ammo.nukes}`
moab.innerText+=` ${ammo.moab}`

chooseBaseButton.addEventListener("click", () => {
  var script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=<APIKEY>&callback=initMap&libraries=geometry";
  
  script.defer = true;
  document.head.appendChild(script);
});

chooseBaseInput.addEventListener("keyup", ({ target }) => {
  let el = document.getElementById("autoComplete");
  el.innerHTML = "";
  if (target.value !== "") {
    let value = target.value[0].toUpperCase() + target.value.slice(1);
    let autoComplete = Object.keys(countries).filter(
      (country) => country.indexOf(value) === 0 && value != ""
    );
    autoComplete.forEach((res) => {
      let div = document.createElement("div");
      div.addEventListener("click", (e) => {
        target.value = e.target.innerText;
        el.innerHTML = "";
      });
      div.className = "autoCompleteResult";
      div.innerText = res;
      el.appendChild(div);
    });
  }
});



let massageBoard=document.getElementById("massageBoard")

let pointer=new Pointer()
let map;
function initMap() {
  let input =
    chooseBaseInput.value[0].toUpperCase() + chooseBaseInput.value.slice(1);
  console.log(countries[input]);
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: Number(countries[input].lat),
      lng: Number(countries[input].long),
    },
    mapTypeId: "satellite",
    zoom: 8,
  });
  const baseImage =
    "https://www.flaticon.com/svg/static/icons/svg/3190/3190926.svg";
  var marker = new google.maps.Marker({
    position: map.center,
    map,
    icon: { url: baseImage, scaledSize: new google.maps.Size(50, 50) },
  });
generateTarget()
// bomb({"lat":32,lng:32},250000)
map.addListener("click", e=>{
  console.log(pointer.type)
  if (pointer.type=="nuke"){
    bomb(e.latLng,750000)
    ammo.nukes--
    if (ammo.nukes===0) massageBoard.innerHTML+="<p>Out Of Nukes</p>";
    nukeButton.innerText="NUKE "+ammo.nukes
  } else if (pointer.type=="moab"){
    bomb(e.latLng,400000)
    ammo.moab--
    if (ammo.moab===0) massageBoard.innerHTML+="<p>Out Of MOABs</p>";
    moab.innerText="MOAB "+ammo.moab
  }
  if (ammo.nukes===0&&ammo.moab===0) massageBoard.innerHTML+="<p>Game Over</p>";
  pointer.type="drag"
})
}

nukeButton.addEventListener("click", ()=>{
  if (ammo.nukes!==0)
  pointer.type="nuke"
})
moab.addEventListener("click", ()=>{
  if (ammo.moab!==0)
  pointer.type="moab"
})

let targetBorders;
let targetName;

async function generateTarget() {
  await fetch(`${url}/targets`,{headers:{"Access-Control-Allow-Origin": "*"}})
    .then((res) => res.json())
    .then(
      ({ name, polygon }) => ([targetName, targetBorders] = [name, polygon])
    );
    const h2=document.createElement("h2")
    h2.innerText=targetName;
    document.getElementById("targetName").innerHTML=""
    document.getElementById("targetName").appendChild(h2)
}


let effected
function bomb(pos, radius){
  let targetCountry;
  targetCountry=new google.maps.Polygon({
    paths:targetBorders,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map:null
  })

  var explosion=new google.maps.Circle({
    strokeColor: "#FFFF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFFF00",
    fillOpacity: 0.35,
    map,
    center: pos,
    radius: 10000,
  })
  function expand(maxRadius){
    explosion.setRadius(explosion.radius+1000)
    if (targetCountry.getMap()==null){
      let path=targetCountry.getPath().i
      for (let i=0;i<path.length;i++){
        // console.log(path[i], explosion.getCenter(), explosion.getRadius())
        if ( arePointsNear(path[i], explosion.getCenter(), explosion.getRadius()/1000) ){
          targetCountry.setMap(map)
          hit()
        }
      }
    }
    
    if (explosion.radius<maxRadius) {
      requestAnimationFrame(()=>expand(maxRadius))
    } else {
      explosion.setMap(null)
      explosion=null
    }
  }
  expand(radius)
  console.log("finish")
}

function arePointsNear(checkPoint, centerPoint, km) { 
  var ky = 40000 / 360;
  var kx = Math.cos(Math.PI * centerPoint.lat() / 180.0) * ky;
  var dx = Math.abs(centerPoint.lng() - checkPoint.lng()) * kx;
  var dy = Math.abs(centerPoint.lat() - checkPoint.lat()) * ky;
  return Math.sqrt(dx * dx + dy * dy) <= km;
}

function hit(){
  generateTarget()
}

// function overlappingCirclePolygon(circle,polygon){
//   let circlePath=[]
//   for (let i = 0; i < 360; i++) {
//     circlePath.push(google.maps.geometry.spherical.computeOffset(circle.getCenter(), circle.getRadius(), i ));
//   }
//   let polyCircle=new google.maps.Polygon({
//     paths:circlePath
//   })
//   let angle=0
//   let solution=[]
//   while (angle<360){
//     let pt=polyCircle.getPath().i[angle]
//     // console.log(polyCircle.getPath().i)
//     if(google.maps.geometry.poly.containsLocation(pt,polygon)){
//       let [i,poly]=getContainedCircle(polygon,polyCircle,angle)
//       solution.push(poly)
//       angle=i
//     }
//     angle++
//   }
//   solution=solution.map(point=>typeof(point.lat)=="function"?{lat:point.lat(),lng:point.lng()}:point)
//   return solution
// }

// function getContainedCircle(polygon,circle,startAngle){
//   let solution=[]
//   let angle=startAngle
//   while (angle<360){
//     let pt=circle.getPath().i[angle]
//   if(google.maps.geometry.poly.containsLocation(pt,polygon)){
//     solution.push(pt)
//   } else {
//     let prevPt=circle.getPath().i[angle-1]
//     let [intersection,littleI,bigI]=linesIntersect(pt,prevPt, polygon)
//     solution.push(intersection)
//     let [polyStart, asc]=nextPolyPoint(polygon,circle,littleI,bigI)
//     let [containedPoly,intersectionAngle]= getContainedPolygon(polygon, polyStart, asc, circle)
//     solution.concat(containedPoly)
//     if (intersectionAngle<angle){
//       return [angle, solution]
//     }
//   }
//   angle++
//   }
// }

// function linesIntersect(a,b,polygon){
//   let path=polygon.getPath().i
//   let lineM=(a.lat()-b.lat())/(a.lng()-b.lng())
//   let lineN=a.lat()-lineM*a.lng()
//   let lineRangeX=[Math.min(a.lng(),b.lng()),Math.max(a.lng(),b.lng())]
  
//   for (let i=0;i<path.length;i++){
//     let c=path[i]
//     let d=path[(i+1)%path.length]
//     let polyM=(c.lat()-d.lat())/(c.lng()-d.lng())
//     let polyN=c.lat()-polyM*c.lng()
//     if (!(lineM-polyM==0&&polyN-lineN!==0)){

//       let possableIntersectionX=(polyN-lineN)/(lineM-polyM)
//       let polyRangeX=[Math.min(c.lng(),d.lng()),Math.max(c.lng(),d.lng())]
//       if (polyRangeX[0]<possableIntersectionX<polyRangeX[1]&&lineRangeX[0]<possableIntersectionX<lineRangeX[1]){
//         return [{lng:possableIntersectionX,lat:polyM*possableIntersectionX+polyN},i,(i+1)%path.length]
//       } 
//     }
//   }
  
// }

// function nextPolyPoint(polygon,circle,prev,next){
//   let path=polygon.getPath().i
//   if (google.maps.geometry.poly.containsLocation(path[prev],circle)){
//     return [prev, false]
//   }
//   else {
//     return [next, true]
//   }
// }

// function getContainedPolygon(polygon, polyStart, asc, circle){
//   let path=polygon.getPath().i
//   let solution=[path[polyStart]]
//   let i=asc?polyStart+1:polyStart-1
//   if (i==-1) i=polygon.getPath().i.length-1
//   if (i==polygon.getPath().i.length) i=0
//   while (i!==polyStart){
//     console.log(google.maps.geometry.poly.containsLocation(path[i],circle))
//     if (!google.maps.geometry.poly.containsLocation(path[i],circle)){
//       solution.push(path[i])
//     } else {
//       let prev=asc?path[i-1]:path[i+1]
//       let [intersection,littleI,bigI]=linesIntersect(prev,path[i],circle)
//       solution.push(intersection)
//       let [polyStart, p]=nextPolyPoint(circle,polygon,littleI,bigI)
//       return [solution, polyStart]
//     }
//     i++
//   }
// }

// function overlappingCirclePolygon(circle,polygon){
//   let solution=[]
//   let started=false
//   let i=-1
//   let circle=true
//   while (i<360){
//     i++
//     let pt=google.maps.geometry.spherical.computeOffset(circle.getCenter(), circle.getRadius(), i)
//     if(google.maps.geometry.poly.containsLocation(pt,polygon)){
//       return gatherPoints(i)
//     }
//   }
// }

// function gatherPoints(startAngle,polygon){
//   let solution=[]
//   let angle=startAngle
//   while (angle<360){
//     let pt=google.maps.geometry.spherical.computeOffset(circle.getCenter(), circle.getRadius(), angle)
//     if(google.maps.geometry.poly.containsLocation(pt,polygon)){
//       solution.push(pt)
//       angle++
//     } else {
//       let intersection=lineIntersection(pt,google.maps.geometry.spherical.computeOffset(circle.getCenter(), circle.getRadius(), angle-1))
//       solution.push(intersection)
//       let polyStartIndex=findNextPolyPoint(polygon, intersection)
//       solution.concat(gatherFromPoly(polygon,polyStartIndex))
//     }
//   }
// }

// function gatherFromPoly(polygon, startPointIndex, circle){
//   let solution=[]
//   let index=startPointIndex
//   let pt=polygon.getPath()[index]
//   if (distance(pt,circle.center)<circle.radius){
//     solution.push(pt)
//     index++
//   } else {
//     let intersection=lineIntersection(pt,polygon.getPath()[index-1])
//   }
// }

// function circlePolygonCrossPoints(circle,polygon){
//   let crossPoints=[]
//   let lines=[]
//   for (let i=0;i<polygon.length;i++){
//     let next=(i+1)%polygon.length
//     let m=(polygon[i].lat-polygon[next].lat)/(polygon[i].lng-polygon[next].lng)
//     let n=polygon[i].lat-m*(polygon[i].lng)
//     let s=polygon[i].lat
//     let e=polygon[next].lat
//     let line={m,n, s,e}
//     lines.push(line)
//   }
//   for (let i=0;i<lines.length;i++){
//     let intersections=findCircleLineIntersections(circle.radius,circle.center.lng(),circle.center.lat(),lines[i].m,lines[i].n,lines[i].s,lines[i].e)
//     if (intersections.length>0){
//       crossPoints.push(intersections)
//     }
//   }
//   console.log(crossPoints)
// }
// function findCircleLineIntersections(r, h, k, m, n,s,e) {
//   // circle: (x - h)^2 + (y - k)^2 = r^2
//   // line: y = m * x + n
//   // r: circle radius
//   // h: x value of circle centre
//   // k: y value of circle centre
//   // m: slope
//   // n: y-intercept

//   // get a, b, c values
//   var a = 1 + m^2;
//   var b = -h * 2 + (m * (n - k)) * 2;
//   var c = h^2 + (n - k)^2 - r^2;
//   // get discriminant
//   var d =b^2 - 4 * a * c;
  
//   var range=[Math.min(s,e),Math.max(s,e)]
  
//   if (d > 0) {
//     let ptA=(-b + Math.sqrt(b^2 - 4 * a * c)) / (2 * a)
//     let ptB= (-b - Math.sqrt(b^2 - 4 * a * c)) / (2 * a)
//       // insert into quadratic formula
//       var intersections = [];
//       console.log({range, ptA})
//       if (range[0]<ptA&&ptA<range[1]) intersections.push({lng:ptA,lat:m*ptA+n})
//       if (range[0]<ptB&&ptB<range[1]) intersections.push({lng:ptB,lat:m*ptB+n})
//       return intersections;
//   }
//   // no intersection
//   return [];
// }
