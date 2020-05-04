var response = prompt ('Are you a parent, student, or educator?');
var message;

if (response === 'parent') {
    message = 'Check out Normalize Mistakes';
} else if (response === 'student') {
    message = 'Be sure to read each section';
} else if (response === 'educator') {
    message = 'Any tips you would suggest?';
} else {
    message = 'Check out the page! :)';
}

document.write('<h3>'+ message + '</h3>'); 