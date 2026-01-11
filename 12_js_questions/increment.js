function volume_sphere() {
    //Write your code here
	const radius = document.querySelector('#radius')
	const volume = document.querySelector('#volume')
	const submit = document.querySelector('#submit')
	let vol = 0
	submit.addEventListener('click',(e)=>{
		e.preventDefault()
		let Radius = parseInt(radius.value)
		if(Radius>=0){
			vol = (4*Math.PI*Radius*Radius*Radius/3).toFixed(4)
			volume.value = vol
			console.log(vol)
		}
		else{
			volume.value = `NaN`
		}
	})
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;