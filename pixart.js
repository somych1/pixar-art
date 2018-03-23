const button = $('#set-color')

const colorField = $('#color-field')
console.log()

button.on('click', function(event){
	console.log(event)
	event.preventDefault()
	const color = colorField.val()
	$('.brush').css('background-color', color)
	// console.log(e.target)
	// console.log(e.currentTarget)
	// const theButton = $(e.currentTarget)
})


// $('#color-field').on("input", function(event){
// 	console.log('it work')
// });