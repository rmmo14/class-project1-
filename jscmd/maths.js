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

document.write('<h3>' + rep + '</h3>');