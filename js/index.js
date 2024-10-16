document.querySelector('.nav').addEventListener('click', () => {
    $('.nav').animate({ margin: '0 0 0 250px' }, 500);
    $('.content').animate({ margin: '0 0 0 250px' }, 500);
    $('.navbarr').animate({ width: '250px' }, 500);
    $('.links').fadeIn(500);
});
document.querySelector('.closeBtn').addEventListener('click', () => {
    $('.nav').animate({ margin: '0 0 0 0' }, 500);
    $('.content').animate({ margin: '0 0 0 0px' }, 500);
    $('.navbarr').animate({ width: '0px' }, 500);
    $('.links').fadeOut(500);
});
$(`.contant-sing2`).slideUp(0);
$(`.contant-sing3`).slideUp(0);
$(`.contant-sing4`).slideUp(0);
let btn = document.querySelectorAll('button');
let contant = document.querySelectorAll('.contant-sing');
let temp = 1;
for (let i = 0; i < btn.length; ++i) {
    btn[i].addEventListener('click', () => {
        $(`.contant-sing${i}`).slideToggle(500);
        if (temp != i) $(`.contant-sing${temp}`).slideUp(500);
        temp = i;
    });
}

$(() => {
    counter("15 october 2024 7:35:00");
})

function counter(time) {
    let date = new Date(time);
    date = date.getTime() / 1000;
    let dateNow = new Date();
    dateNow = dateNow.getTime() / 1000;
    let timeDifference = (date - dateNow);
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)));

    $('.D').html(`${days} D`);
    $('.H').html(`${hours} h`);
    $('.M').html(`${mins} m`);
    $('.S').html(`${secs} s`);
    setInterval(() => {
        counter(time);
    }, 1000);
}
let count = 100; 
document.querySelector('textarea').addEventListener('keyup' , ()=>{
    let len = document.querySelector('textarea').value.length;
    if((count - len) <= 0){
        
        $('.countCh').html(`your available character finished`);

    }else
    $('.countCh').html(`${(count - len)}`);

})