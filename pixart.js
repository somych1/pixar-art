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
const createDiv = function(){
	for(let i =0; i < 20; i++){
		const div = $('<div class="square">')
		div.appendTo($('body'))


	}
}
createDiv()


$('.square').on('click', function(event){
	console.log(event.currentTarget)
	const squareColor = $(event.currentTarget)
	console.log(squareColor)
	squareColor.css('background-color', $('.brush').css('background-color'))
	// const theh2 = $(event.currentTarget)
	// if(theh2.css('background-color') === 'rgb(255, 0, 0)'){
	// 	theh2.css('background', 'none')
	// } else {
	// 	theh2.css('background-color', 'rgb(255, 0, 0')
	// }
})

// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen for events on the body element
// $('#color-field').on("input", function(event){
// 	console.log('it work')
// });