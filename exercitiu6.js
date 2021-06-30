// the exercise is meant to show the correct assignment of variables, the use of conditional statements and some string methods


function addData () {
    const userData = prompt ('Please enter a name, a number or text \'true\' or \'false\'.');
    let n = parseInt(userData);

    let reply = '';

    if (userData === '') {
        reply = ('Your text is empty, please try again!');
    } else if (isNaN(n)) {
        if (userData === 'true' || userData === 'false') {
            reply = ('You\'re right, it can be true or false!');
        } else {
            let initial = userData.slice(0,1);
            let restOfTheName = userData.slice(1, userData.length);
            let capitalInitial = initial.toUpperCase();
            let lowerRestOfTheName = restOfTheName.toLowerCase();
            let correctName = capitalInitial + lowerRestOfTheName;
            reply = ('Hello ' + correctName + ', nice to meet you!')
        }
    } else {
        switch(true) {
            case (n >= 5 && n <= 10):
                const a = 3;
                let result1 = n * a;
                reply = (n + ' * ' + a + ' = ' + result1);
                break;
            case (n > 10):
                const b = 10;
                let result2 =  n + b;
                reply = (n + ' + ' + b + ' = ' + result2);
                break;
            default:
                reply = ('You entered a number lower than 5');
                break;  
        }
    }
    
    let element = document.getElementById('shownText');
    element.innerText = reply;
    console.log(typeof n);
}