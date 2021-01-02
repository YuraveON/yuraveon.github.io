var firstLoad = true;
var toggleClicked = false;
var sessionLoaded = false;
var sessionSaved = false;
var notifDark = false;
var notifLight = false;
var i = 1;  


function checkTheme(){
    console.log("checkTheme");
    if (firstLoad) {
        firstLoad = false;
        loadSession();
        ipLookUp();  
    }
}

$(function () {
    $('#change-skin').on('click', function () {
        console.log("toggle di klik");
        toggleClicked = true;
        $("body").toggleClass("page-dark-mode");
        BeautifulJekyllJS.initNavbar();
        saveSession();
        sessionSaved = true;
    });
});

function ipLookUp() {
    console.log("ipLookUp");
    $(function () {
        console.log("ipLookUp - cek apakah ada session sunset");
        if (sessionStorage.getItem('sunset') === null) {
            console.log("ipLookUp - tidak ada session sunset");
            $.getJSON("https://api.ipdata.co/?api-key=65cb466db782b2034c83ae4f0952e96a855430b3da96ae2c3a1571ef")
                .then(
                    function success(response) {
                        console.log("iplookup success");

                        lat = response.latitude;
                        lng = response.longitude;

                        let sunset = SunriseSunsetJS.getSunset(lat, lng);
                        let sunrise = SunriseSunsetJS.getSunrise(lat, lng);

                        //save to session storage
                        sessionStorage.setItem('sunset', Date.parse(sunset));
                        sessionStorage.setItem('sunrise', Date.parse(sunrise));

                        if (!sessionLoaded){
                            console.log("ipLookUp sucess session loaded = false");
                            checkTime();
                            timer();
                        }
                    },

                    function fail(data, status) {
                        console.log("iplookup failed");
                        //set default jam sunset dan sunrise
                        let date = new Date();
                        sessionStorage.setItem('sunset', date.setHours(18, 0, 0));
                        sessionStorage.setItem('sunrise', date.setHours(06, 0, 0));
                        console.log('Request failed. Returned status of ', status);
                        console.log('Default time for sunset and sunrise applied.');
                        if (!sessionLoaded) {
                            console.log("ipLookUp failed session loaded = false");
                            checkTime();
                            timer();
                        }
                    }
                );
        } else {
            console.log("ipLookUp - tidak ada session sunset");
            checkTime();
            timer();
        }
    });
}


function timer(){
    console.log("timer");
    setTimeout(function(){
        console.log("timer - cek apakah toggle klik = false");
        if(!toggleClicked){
            console.log("timer - toggle klik = false");
            checkTime();
            i++;
            if (i < (1 * 60)) {
                timer();
            }
        }
    },60000) 
}

function loadSession() {
    console.log("load session");
    toggleClicked = true;
    if (sessionStorage.getItem('mode') == 'light') {
        lightMode();
        sessionLoaded = true;
    } else if (sessionStorage.getItem('mode') == 'dark') {
        darkMode();
        sessionLoaded = true;
    }
}


function checkTime() {
    console.log("check time");
    $(function () { 
        let sessionSunset = parseInt(sessionStorage.getItem('sunset'));
        let sessionSunrise = parseInt(sessionStorage.getItem('sunrise'));

        let dateSunset = moment(sessionSunset).format('HH:mm');
        let dateSunrise = moment(sessionSunrise).format('HH:mm');
        let date = moment().format('HH:mm');

        if (date < dateSunrise || date >= dateSunset) {
            if (checkBrightness() > 125) { //check if in dark mode?
                darkMode();
                if (!(sessionStorage.getItem('notification') == 'dark')){
                    if (!notifDark) { 
                        $(".dark-mode").notify("🌙 Good night!", { 
                            style: 'theme', 
                            className: 'dark', 
                            elementPosition: "bottom right", 
                            autoHideDelay: 3000 
                        }); 
                            notifDark = true; 
                    }
                    sessionStorage.setItem('notification', 'dark');
                }        
            }
        } else {
            if (checkBrightness() <= 125) { //check if in light mode?
                lightMode();
                if (!(sessionStorage.getItem('notification') == 'base')){
                    if (!notifLight) { 
                        $(".light-mode").notify("☀️ Good day!", { 
                            style: 'theme', 
                            className: 'light', 
                            elementPosition: "bottom right", 
                            autoHideDelay: 3000 
                        }); 
                        notifLight = true; 
                    }     
                    sessionStorage.setItem('notification', 'base');
                }
                          
            }
        }
    });
}

function checkBrightness() {
    console.log("check brightness");
    const rgb = $('.navbar').css("background-color").replace(/[^\d,]/g, '').split(",");
    const brightness = Math.round(( // http://www.w3.org/TR/AERT#color-contrast
        parseInt(rgb[0]) * 299 +
        parseInt(rgb[1]) * 587 +
        parseInt(rgb[2]) * 114
    ) / 1000);
    return brightness;
}

function saveSession(){
    console.log("save session");
    if (checkBrightness() > 125){
        sessionStorage.setItem('mode', 'light');
    } else {
        sessionStorage.setItem('mode', 'dark');
    }
}

function utterancesSetTheme(theme) {
    console.log("utterancesSetTheme");
    addEventListener('message', event => {
        if (event.origin !== 'https://utteranc.es') {
            return;
        }
        const message = {
            type: 'set-theme',
            theme: theme
        };
        const utterances = document.querySelector('iframe').contentWindow; // try event.source instead
        console.log("post message ke utterances");
        utterances.postMessage(message, 'https://utteranc.es');
    });
}

function darkMode() {
    console.log("dark mode");
    $("body").addClass("page-dark-mode");
    utterancesSetTheme('github-dark');
    BeautifulJekyllJS.initNavbar();
}

function lightMode() {
    console.log("light mode");
    $("body").removeClass("page-dark-mode");
    utterancesSetTheme('github-light');
    BeautifulJekyllJS.initNavbar(); 
}

checkTheme();
