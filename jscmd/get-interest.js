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

function assessMath() {
    var question = prompt('Quiz in which area: algebra, geometry, algebra 2?');
    var attemptsAllowed = 2;
    var attempted = 0;
    var pregunta;
    var respuesta;
    // current error, if i do a typo the first time and when I type it correctly it spits undefined
    if (question === 'algebra') {
        pregunta = prompt('Which is the slope in the equation 2x-2y=4?');
        while (pregunta != 1 && attempted !== attemptsAllowed) {
            pregunta = prompt('Try again. Which is the slope in the equation 2x-2y=4?');
            attempted++;
        }
        if (pregunta === '1') {
            respuesta = 'Correct!';
        } else if (attempted === attemptsAllowed) {
            respuesta = 'Sorry!';
        }
    } else if (question === 'geometry') {
        pregunta = prompt('What is the area of a 2ft by 18in window? Express in square ft?');
        while (pregunta != 3 && attempted !== attemptsAllowed) {
            pregunta = prompt('Try again. What is the area of a 2ft by 18in window? Express in square ft?');
            attempted++;
        }
        if (pregunta === '3') {
            respuesta = 'Correct!';
        } else if (attempted === attemptsAllowed) {
            respuesta = 'Sorry!';
        }
    } else if (question === 'algebra 2') {
        pregunta = prompt('What is ln (1) equal to?');
        while (pregunta != '0' && attempted !== attemptsAllowed) {
            pregunta = prompt('Try again. What is ln (1) equal to?');
            attempted++;
        }
        if (pregunta === '0') {
            respuesta = 'Correct!';
        } else if (attempted === attemptsAllowed) {
            respuesta = 'Sorry!';
        } 
    } else {
        while (question !== 'algebra' && question !== 'geometry' && question !== 'algebra 2' && attempted !== attemptsAllowed) {
            question = prompt('Be sure to spell the subject as shown in the text: algebra, geometry, algebra 2')
            attempted++;
        }
        // ASK HOW TO ALLOW CANCEL TO GET OUT OF LOOP AFTER BUTTON CLICK
        // while (i<3){ if (question !== 'algebra' && question !== 'geometry' && question !== 'algebra 2' c)
        respuesta = 'Sorry!';
    }
    return document.write('<p>' + respuesta + '</p>');
}