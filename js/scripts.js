

// a = 5
// b = 6

var a = 5
var b = 6
var value = (a*a) + (2 * a * b) - (b*b)

document.write(value)

if (value > 0) {
		console.log('wynik dodatni');
}   else if (value < 0) {
		console.log('wynik ujemny');
}	else {
		console.log('wynik 0');
}