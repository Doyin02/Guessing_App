var input = document.querySelector('#input')
var btn = document.querySelector('#btn')
var guess = document.querySelector('#guess')


btn.addEventListener('click', function(){
    var random = Math.floor(Math.random()*10);

    if(input.value < random){
        guess.innerHTML = 'your guess is too low'
    }else if(input.value > random){
        guess.innerHTML = 'your guess is too high'
    }
    else{
        guess.innerHTML = 'you are correct'
    }
    console.log(random)

})