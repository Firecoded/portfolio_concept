$(document).ready(init);

let currentPosition = 'home';

function init(){
    applyClickHandlers();
    $('.name').css('color', '#5CC8FF');
}

function applyClickHandlers(){  
    $('.name').click(goHome);
    $('.about').click(showAbout);
    $('.skills').click(showSkills);
    $('.projects').click(showProjects);
    $('.contact').click(showContact);
}
function goHome(){
    switch(currentPosition){
        case 'skills':
            changeNavColorAndCurPosition('skills', 'home');
            $('.about-text-cover').css('width', '');
            $('.skills-cont1, .skills-cont2').css('height', '');
            $('.hello').css('width', '');
            $('.img-cover').css('height', '');
            break;
        case 'about':
            changeNavColorAndCurPosition('about', 'home');
            $('.box1').css('width', '');
            $('.box2').css('width', '');
            $('.hello').css('width', '');
            $('.img-cover').css('height', '');
            $('.about-text-cover').css('width', '');
            break;
        case 'projects':
            changeNavColorAndCurPosition('projects', 'home');
            break;
        case 'contact':
            changeNavColorAndCurPosition('contact', 'home');
            break;
    }
}
function showAbout(){
    switch(currentPosition){
        case 'home':
            changeNavColorAndCurPosition('home', 'about');
            $('.box1').css('width', '30%');
            $('.box2').css('width', '70%');
            $('.hello').css('width', '0px');
            $('.img-cover').css('height', '0%');
            $('.about-text-cover').css('width', '0px');
            break;
        case 'skills':
            changeNavColorAndCurPosition('skills', 'about');
            $('.skills-cont1, .skills-cont2').css('height', '');
            $('.hello').css('width', '0px');
            $('.img-cover').css('height', '0%');
            $('.box1').css('width', '30%');
            $('.box2').css('width', '70%');
            $('.about-text-cover').css('width', '0px');
            break;
        case 'projects':
            changeNavColorAndCurPosition('projects', 'about');
            break;
        case 'contact':
            changeNavColorAndCurPosition('contact', 'about');
            break;
    }
}

function showSkills(){
    switch(currentPosition){
        case 'home':
            changeNavColorAndCurPosition('home', 'skills');
            $('.skills-cont1, .skills-cont2').css('height', '50%');
            break;
        case 'about':
            changeNavColorAndCurPosition('about', 'skills');
            $('.box1').css('width', '');
            $('.box2').css('width', '');
            $('.skills-cont1, .skills-cont2').css('height', '50%');
            break;
        case 'contact':
            changeNavColorAndCurPosition('contact', 'skills');
            break;
        case 'projects':
            changeNavColorAndCurPosition('projects', 'skills');
            break;
    }  
}
function showProjects(){
    switch(currentPosition){
        case 'home':
            changeNavColorAndCurPosition('home', 'projects');
            $('.skills-cont1, .skills-cont2').css('height', '50%');
            break;
        case 'about':
            changeNavColorAndCurPosition('about', 'projects');
            $('.box1').css('width', '');
            $('.box2').css('width', '');
            $('.skills-cont1, .skills-cont2').css('height', '50%');
            break;
        case 'skills':
            changeNavColorAndCurPosition('skills', 'projects');
            break;    
        case 'contact':
            changeNavColorAndCurPosition('contact', 'projects');    
            break;
    } 
}

function showContact(){
    switch(currentPosition){
        case 'home':
            changeNavColorAndCurPosition('home', 'contact');
            $('.skills-cont1, .skills-cont2').css('height', '50%');
            $('.skills').css('color', '#5CC8FF');            
            break;
        case 'about':
            changeNavColorAndCurPosition('about', 'contact');
            $('.box1').css('width', '');
            $('.box2').css('width', '');
            $('.skills-cont1, .skills-cont2').css('height', '50%');
            break;
        case 'skills':
            changeNavColorAndCurPosition('skills', 'contact');
            break;
        case 'projects':
            changeNavColorAndCurPosition('projects', 'contact');
            break;
    } 
}

function changeNavColorAndCurPosition(textToUnhighlight, textToHighlight){
    const positionRef = {
        home: '.name',
        about: '.about',
        skills: '.skills',
        projects: '.projects',
        contact: '.contact'
    }
    $(positionRef[textToUnhighlight]).css('color', '');
    $(positionRef[textToHighlight]).css('color', '#5CC8FF');
    currentPosition = textToHighlight;
}