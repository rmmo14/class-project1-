var response = prompt ('Are you a parent, student, or educator?');
var message;

if (message === 'parent') {
    message = 'Check out Normalize Mistakes';
} else if (message === 'student') {
    message = 'Be sure to read each section';
} else if (message === 'educator') {
    message = 'Any tips you would suggest?';
} else {
    message = 'Check out the page! :)';
}

document.write('<h2>'+ message + '</h2>'); 