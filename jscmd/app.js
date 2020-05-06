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

function myFunction() {
    confirm("assume by contradiction the sqrt2 is rational, then sqrt2 can be expressed as p:q where p,q are integers, q neq 0, and gcd(p,q)=1. Now with sqrt2=p:q, squaring both sides will give 2=(p:q)^(2), moving over the q gives 2q^(2)=p^(2). This implies p^(2) is even and thus p is even of the form p=2k, where k is an integer. By substitution then 2q^(2)=p^(2)=(2k)^(2) which gives q^(2)=2k^(2). This implies q^(2) is even and thus q is even. BUT, this contradicts the fact that gcd(p,q)=1, therefore sqrt2 is not rational. QED.*");
}

function mathQuiz(){
    var resp = prompt ('Would you like to try a math problem?')
    var ans;

    if (resp === 'yes' || resp === 'Yes' || resp === 'y' || resp === 'sure'){
        ans = 'Prove the irrationality of root 2. (See answer on page to verify)';
    } else {
        resp = 'The answer to the math problem is on the page if you were still curious';
    }

    return document.write('<h4>' + ans + '</h4>');
}