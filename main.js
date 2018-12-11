$(document).ready(init);

let currentPosition = 'home';

function init(){
    applyClickHandlers();
}

function applyClickHandlers(){
    $('.name').click(goHome);
    $('.about').click(showAbout);
    $('.skills').click(showSkills);
}
function goHome(){
    switch(currentPosition){
        case 'skills':
            $('.skills-cont1, .skills-cont2').css('height', '');
            $('.hello').css('width', '');
            $('.img-cover').css('height', '');
            currentPosition = 'home';
            break;
        case 'about':
            $('.box1').css('width', '');
            $('.box2').css('width', '');
            $('.hello').css('width', '');
            $('.img-cover').css('height', '');
            $('.about-text-cover').css('width', '');
            currentPosition = 'home';
            break;

    }
}
function showAbout(){
    switch(currentPosition){
        case 'home':
            $('.box1').css('width', '30%');
            $('.box2').css('width', '70%');
            $('.hello').css('width', '0px');
            $('.img-cover').css('height', '0%');
            $('.about-text-cover').css('width', '0px');
            currentPosition = 'about';
            break;
        case 'skills':
            $('.skills-cont1, .skills-cont2').css('height', '');
            $('.hello').css('width', '0px');
            $('.img-cover').css('height', '0%');
            currentPosition = 'home';
            showAbout();
            break;
    }
}

function showSkills(){
    switch(currentPosition){
        case 'home':
            $('.skills-cont1, .skills-cont2').css('height', '50%');
            currentPosition = 'skills';
            break;
        case 'about':
            $('.box1').css('width', '');
            $('.box2').css('width', '');
            $('.about-text-cover').css('width', '');
            $('.img-cover').css('height', '');
            currentPosition = 'home';
            showSkills();
            break;

    }
    
}