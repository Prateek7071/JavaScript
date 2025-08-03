const form = document.querySelector('form')
//const weight = parseInt(document.querySelector('#weight').value)
//this usecase will give you empty value, as when the page loads and scripts runs the empty value gets stored in height and weight

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    //we want to take value when submit is clicked

    const result = document.querySelector('#result')
    

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML  = `${height} is not a valid input`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML  = `${weight} is not a valid input`
    }
    else{
        const bmi = (weight/((height*height)/(10000))).toFixed(2)
        result.innerHTML = `<span>BMI: ${bmi}</span>`
    }

})
