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


function assessMath(){
    var question = prompt('Quiz in which area: algebra, geometry, algebra 2?');
    var pregunta;
    var respuesta;

    if (question === 'algebra'){
        pregunta = prompt('Which is the slope in the equation 2x-2y=4?');
        while (pregunta != 1){
        pregunta = prompt('Try again. Which is the slope in the equation 2x-2y=4?');
        }
        respuesta = 'Correct!';
    } else if (question === 'geometry'){
        pregunta = prompt('What is the area of a 2ft by 18in window? Express in square ft?')
        while (pregunta != 3){
        pregunta = prompt ('Try again. What is the area of a 2ft by 18in window? Express in square ft?')
        }
        respuesta = 'Correct!';
    } else if (question === 'algebra 2'){
        pregunta = prompt('What is ln (1) equal to?')
        while (pregunta != 0){
            pregunta = prompt('Try again. What is ln (1) equal to?')
        }
        respuesta = 'Correct!';
    } else {
        while (question !== 'algebra' && question !== 'geometry' && question !== 'algebra 2' ){
            question = prompt('Be sure to spell the subject as shown in the text: algebra, geometry, algebra 2')
        }
        // ASK HOW TO ALLOW CANCEL TO GET OUT OF LOOP AFTER BUTTON CLICK
    }
    return document.write('<p>' + respuesta + '</p>'); 
}

function myFunction() {
    confirm("assume by contradiction the sqrt2 is rational, then sqrt2 can be expressed as p:q where p,q are integers, q neq 0, and gcd(p,q)=1. Now with sqrt2=p:q, squaring both sides will give 2=(p:q)^(2), moving over the q gives 2q^(2)=p^(2). This implies p^(2) is even and thus p is even of the form p=2k, where k is an integer. By substitution then 2q^(2)=p^(2)=(2k)^(2) which gives q^(2)=2k^(2). This implies q^(2) is even and thus q is even. BUT, this contradicts the fact that gcd(p,q)=1, therefore sqrt2 is not rational. QED.*");
}

function mathQuiz(){
    var resp = prompt ('Would you like to try a math problem?')
    var ans;

    if (resp === 'yes' || resp === 'Yes' || resp === 'y' || resp === 'sure'){
        ans = 'Prove the irrationality of the square root of 2. (See answer on page to verify)';
    } else {
        ans = 'The answer to the math problem is on the page if you were still curious';
    }

    return document.write('<h4>' + ans + '</h4>');
}