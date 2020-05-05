function getInterest() {
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

    return document.write('<h3>'+ message + '</h3>'); 
}

function mathInterest(){
    var answer = prompt ('Which of these was your favorite: algebra, geometry, algebra 2?');
    var rep;

    if (answer === 'algebra'){
        rep = 'Mine too!';
    } else if (answer === 'geometry'){
        rep = 'Gee I\'m A Tree';
    } else if (answer === 'algebra 2'){
        rep = 'Oof that one was craaaazy fun!';
    } else {
        rep = 'Math is Fun!!!';
    }

    return document.write('<h3>' + rep + '</h3>');
}