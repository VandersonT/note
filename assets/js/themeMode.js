let activeThemeMode = document.querySelector('.activeThemeMode');
let themeMode = 'light';

activeThemeMode.addEventListener('click', function(){
    
    if(themeMode == 'light'){
        changeButtonToDark();
        changeThemeToDark();
        themeMode = 'dark';
    }else{
        changeButtonToLight();
        changeThemeToLight();
        themeMode = 'light';
    }
    localStorage.setItem('themeMode', themeMode);
});


/*Check for cookies*/
if(localStorage.getItem('themeMode')){
    if(localStorage.getItem('themeMode') == 'dark'){
        activeThemeMode.click();
    }
}


/*----------------------------------------Functions-----------------------------------------------------*/
function changeButtonToDark(){
    activeThemeMode.style.left = '60%';
    activeThemeMode.style.backgroundImage = "url('./assets/icons/darkMode.jpg')"
    document.querySelector('.barThemeMode').style.backgroundColor = '#0D2C51';
}

function changeButtonToLight(){
    activeThemeMode.style.left = '0';
    activeThemeMode.style.backgroundImage = "url('./assets/icons/lightMode.jpg')"
    document.querySelector('.barThemeMode').style.backgroundColor = '#A9A9A8';
}

function changeThemeToDark(){
    document.querySelector('header').style.backgroundColor = '#161a24';
    document.querySelector('header').style.borderBottom = '1px solid #0F121C';
    document.querySelector('html').style.backgroundColor = '#1B1F2B';
    document.querySelector('.newNote').style.color = '#161a24';
    document.querySelector('.menuNote').style.backgroundColor = '#161a24';
    document.querySelector('.menuNote').style.borderTop = '1px solid #0F121C';
}

function changeThemeToLight(){
    document.querySelector('header').style.backgroundColor = '#098FDA';
    document.querySelector('header').style.borderBottom = '0';
    document.querySelector('html').style.backgroundColor = '#F2F2F2';
    document.querySelector('.newNote').style.color = 'white';
    document.querySelector('.menuNote').style.backgroundColor = '#098FDA';
    document.querySelector('.menuNote').style.borderTop = '0';
}
/*------------------------------------------------------------------------------------------------------*/