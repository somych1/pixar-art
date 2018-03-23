const brushBox = function(){
	for(let i = 0; i < 3; i++){
		const div = $('<div class="recent-colors">')
		div.appendTo($('.controls'))
	}
}
brushBox()

const button = $('#set-color')

const colorField = $('#color-field')
console.log()

button.on('click', function(event){
	console.log(event)
	event.preventDefault()
	const color = colorField.val()
	$('.recent-colors').eq(2).css('background-color', $('.recent-colors').eq(1).css('background-color'));
	$('.recent-colors').eq(1).css('background-color', $('.recent-colors').eq(0).css('background-color'));
	$('.recent-colors').eq(0).css('background-color', $('.brush').css('background-color'));
	
	$('.brush').css('background-color', color)
	// console.log(e.target)
	// console.log(e.currentTarget)
	// const theButton = $(e.currentTarget)
})
const createDiv = function(){
	for(let i =0; i < 8000; i++){
		const div = $('<div class="square">')
		div.appendTo($('body'))


	}
}
createDiv()


$('.square').on('mouseover', function(event){
	console.log(event.currentTarget)
	const squareColor = $(event.currentTarget)
	console.log(squareColor)
	squareColor.css('background-color', $('.brush').css('background-color'))
	
})

// Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.