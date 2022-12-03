let ul = document.querySelector('.navbar__hero');
let button = document.querySelector('.line');
let about = document.querySelector('.about');
let hero545454 = document.querySelector('.video__hero545454');
let dude = document.querySelector('.dude');
let account = document.querySelector('.account');
let item234324 = document.querySelector('.about__dollieitem13676');
let item8888 = document.querySelector('.about__recommend--item8888');
let item145346465 = document.querySelector('.about__food--item145346465');
let cliked = false;

button.addEventListener('click', () => {
    if(!cliked){
        cliked = true;
        ul.style.display = 'none';
        about.style.display = 'block';
        about.style.margin = '0';
        item234324.style.display = 'block';
        item8888.style.display = 'block';
        item145346465.style.display = 'block';
        hero545454.style.display = 'block';
        dude.style.display = 'none';

    }else{
        cliked = false;
        ul.style.display = 'block';
        about.style.margin = '';
        item234324.style.display = 'none';
        item8888.style.display = 'none';
        item145346465.style.display = 'none';
        dude.style.display = 'block';
    }
})