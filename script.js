let button = document.querySelectorAll('.button');
let body = document.querySelector('body');

button.forEach(element => {
    element.addEventListener('click', function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "black"
            body.style.fontFamily = "monospace"
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "salmon"
            body.style.fontFamily = "fantasy"
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "red"
            body.style.fontFamily = "sans-serif"
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white"
            body.style.fontFamily = "cursive"
        }
    })
});