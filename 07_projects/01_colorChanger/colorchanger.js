const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(button => {
    button.addEventListener('click',e=>{
        if(e.target.id === 'GREY'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'BLUE'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'WHITE'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'RED'){
            body.style.background = e.target.id
        }
    })
});