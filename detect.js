 function isFacebookApp() {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    } 
    if(isFacebookApp()){
         // your action here if user using Facebook in-app browser
        alert('Are you using Facebook Browser? To get better experience, try press [...] and Open the blog in Chrome or Safari. Thank you!');
    }