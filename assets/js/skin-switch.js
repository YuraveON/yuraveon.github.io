var firstLoad = true;
var toggleClicked = false;
var sessionLoaded = false;
var sessionSaved = false;
var notifDark = false;
var notifLight = false;
var i = 1;  


function checkTheme(){
    if (firstLoad) {
        firstLoad = false;
        loadSession();
        ipLookUp();  
    }
}

$(function () {
    $('#change-skin').on('click', function () {
        toggleClicked = true;
        $("body").toggleClass("page-dark-mode");
        BeautifulJekyllJS.initNavbar();
        saveSession();
        sessionSaved = true;
    });
});

function ipLookUp() {
    $(function () {
        if (sessionStorage.getItem('sunset') === null) {
            $.getJSON("https://api.ipdata.co/?api-key=65cb466db782b2034c83ae4f0952e96a855430b3da96ae2c3a1571ef")
                .then(
                    function success(response) {
                        lat = response.latitude;
                        lng = response.longitude;

                        let sunset = SunriseSunsetJS.getSunset(lat, lng);
                        let sunrise = SunriseSunsetJS.getSunrise(lat, lng);

                        //save to session storage
                        sessionStorage.setItem('sunset', sunset);
                        sessionStorage.setItem('sunrise', sunrise);

                        if (!sessionLoaded){
                            checkTime();
                            timer();
                        }
                    },

                    function fail(data, status) {
                        //set default jam sunset dan sunrise
                        let date = new Date();
                        let dateSunset = new Date(date.setHours(18, 0, 0));
                        let dateSunrise = new Date(date.setHours(06, 0, 0));
                        sessionStorage.setItem('sunset', dateSunset);
                        sessionStorage.setItem('sunrise', dateSunrise);
                        console.log('Request failed. Returned status of ', status);
                        console.log('Default time for sunset and sunrise applied.');
                        if (!sessionLoaded) {
                            checkTime();
                            timer();
                        }
                    }
                );
        } else {
            checkTime();
            timer();
        }
    });
}


function timer(){
    setTimeout(function(){
        if(!toggleClicked){
            checkTime();
            i++;
            if (i < (1 * 60)) {
                timer();
            }
        }
    },60000) 
}

function loadSession() {
    if (sessionStorage.getItem('mode') == 'light') {
        lightMode();
        sessionLoaded = true;
    } else if (sessionStorage.getItem('mode') == 'dark') {
        darkMode();
        sessionLoaded = true;
    }
}


function checkTime() {
    $(function () { 
        let sessionSunset = sessionStorage.getItem('sunset');
        let sessionSunrise = sessionStorage.getItem('sunrise');

        let dateSunset = new Date(sessionSunset).toLocaleTimeString('en-US', { hour12: false });
        let dateSunrise = new Date(sessionSunrise).toLocaleTimeString('en-US', { hour12: false });
        let date = new Date().toLocaleTimeString('en-US', { hour12: false });

        if (dateSunrise > date && date <= dateSunset) {
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
    const rgb = $('.navbar').css("background-color").replace(/[^\d,]/g, '').split(",");
    const brightness = Math.round(( // http://www.w3.org/TR/AERT#color-contrast
        parseInt(rgb[0]) * 299 +
        parseInt(rgb[1]) * 587 +
        parseInt(rgb[2]) * 114
    ) / 1000);
    return brightness;
}

function saveSession(){
    if (checkBrightness() > 125){
        sessionStorage.setItem('mode', 'light');
    } else {
        sessionStorage.setItem('mode', 'dark');
    }
}

function utterancesSetTheme(theme) {
    addEventListener('message', event => {
        if (event.origin !== 'https://utteranc.es') {
            return;
        }
        const message = {
            type: 'set-theme',
            theme: theme
        };
        const utterances = document.querySelector('iframe').contentWindow; // try event.source instead
        utterances.postMessage(message, 'https://utteranc.es');
    });
}

function darkMode() {;
    $("body").addClass("page-dark-mode");
    utterancesSetTheme('github-dark');
    BeautifulJekyllJS.initNavbar();
}

function lightMode() {
    $("body").removeClass("page-dark-mode");
    utterancesSetTheme('github-light');
    BeautifulJekyllJS.initNavbar(); 
}

checkTheme();
