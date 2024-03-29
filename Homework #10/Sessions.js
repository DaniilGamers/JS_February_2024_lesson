function readSessions(){
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let sessionsArray = JSON.parse(localStorage.getItem('sessions'));
    for (const session of sessionsArray){
        let li = document.createElement('li');
        li.innerText = session.day + ' d - ' + session.hour + ' h - ' + session.minutes + ' m - ' + session.seconds + ' s '

        ul.appendChild(li);
    }
}

readSessions();