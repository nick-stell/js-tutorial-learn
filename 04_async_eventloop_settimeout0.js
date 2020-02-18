console.log('Start');
console.log('Start2');

function timeoutTwoSeconds() {
    console.log('timeout 2 seconds');
}

window.setTimeout(function() {
    console.log('Inside timeout after 5 seconds');
}, 5000);

setTimeout(timeoutTwoSeconds, 2000);

console.log('End');
 
// ==============

console.log('Start');

window.setTimeout(function() {
    console.log('Inside timeout after 0 seconds');
}, 0);

console.log('End');
console.log('End2');
console.log('End3');

