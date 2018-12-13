$(document).ready(init);

let currentPosition = 'home';
let canIClick = true;

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
    if(!canIClick){
        return;
    }
    switch(currentPosition){
        case 'skills':
            changeNavColorAndCurPosition('skills', 'home');
            collapseSkills();
            $('.box1, .box2').css('width', '');
            $('.about-text-cover').css('width', '');
            $('.hello').css('width', '');
            $('.img-cover').css('height', '');
            break;
        case 'about':
            changeNavColorAndCurPosition('about', 'home');
            collapseAbout();
            $('.hello').css('width', '');
            break;
        case 'projects':
            changeNavColorAndCurPosition('projects', 'home');
            $('.box1, .box2').css('width', '');
            $('.hello').css('width', '');
            collapseProjects();
            break;
        case 'contact':
            changeNavColorAndCurPosition('contact', 'home');
            break;
    }
}
function showAbout(){
    if(!canIClick){
        return;
    }
    switch(currentPosition){
        case 'home':
            changeNavColorAndCurPosition('home', 'about');
            expandAbout();
            $('.hello').css('width', '0px');
            break;
        case 'skills':
            changeNavColorAndCurPosition('skills', 'about');
            collapseSkills();
            $('.hello').css('width', '0px');
            expandAbout();
            break;
        case 'projects':
            changeNavColorAndCurPosition('projects', 'about');
            expandAbout();
            collapseProjects();
            break;
        case 'contact':
            changeNavColorAndCurPosition('contact', 'about');
            expandAbout();
            break;
    }
}

function showSkills(){
    if(!canIClick){
        return;
    }
    switch(currentPosition){
        case 'home':
            changeNavColorAndCurPosition('home', 'skills');
            expandSkills();  //needs copying all around
            break;
        case 'about':
            changeNavColorAndCurPosition('about', 'skills');
            $('.box1, .box2').css('width', '');
            expandSkills();
            break;
        case 'contact':
            changeNavColorAndCurPosition('contact', 'skills');
            break;
        case 'projects':
            changeNavColorAndCurPosition('projects', 'skills');
            collapseProjects();
            expandSkills();
            break;
    }  
}
function showProjects(){
    if(!canIClick){
        return;
    }
    switch(currentPosition){
        case 'home': 
            changeNavColorAndCurPosition('home', 'projects');
            $('.hello').css('width', '0px');
            expandProjects();
            break;
        case 'about':
            changeNavColorAndCurPosition('about', 'projects');
            expandProjects();
            $('.hello').css('width', '0px');
            $('.img-cover').css('height', '');
            $('.about-text-cover').css('width', '');
            break;
        case 'skills':
            changeNavColorAndCurPosition('skills', 'projects');
            $('.hello').css('width', '0px');
            collapseSkills();
            collapseAbout();
            expandProjects();
            break;    
        case 'contact':
            changeNavColorAndCurPosition('contact', 'projects');    
            break;
    } 
}

function showContact(){
    if(!canIClick){
        return;
    }
    switch(currentPosition){
        case 'home':
            changeNavColorAndCurPosition('home', 'contact');         
            break;
        case 'about':
            changeNavColorAndCurPosition('about', 'contact');
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
function expandAbout(){
    $('.box1').css('width', '30%');
    $('.box2').css('width', '70%');
    $('.img-cover').css('height', '0%');
    $('.about-text-cover').css('width', '0px');
}
function collapseAbout(){
    $('.box1, .box2').css('width', '');
    $('.img-cover').css('height', '');
    $('.about-text-cover').css('width', '');
}

function expandProjects(){
    $('.box1').css('width', '0%');
    $('.box2').css('width', '100%');
    $('.project-cont').css('z-index', '5');
    $('.project1, .project2, .project3').css('width', '30%');
    
}
function collapseProjects(){
    canIClick = false;
    setTimeout(()=>{
        $('.project-cont').css('z-index', '');
        canIClick = true;
    }, 800);
    $('.project1, .project2, .project3').css('width', '');
}
function expandSkills(){
    $('.skills-cont1, .skills-cont2').css('height', '50%');
    $('.icon-cover1, .icon-cover2').css('height', '0%'); 
}

function collapseSkills(){
    $('.skills-cont1, .skills-cont2').css('height', '');
    $('.icon-cover1, .icon-cover2').css('height', '');
}