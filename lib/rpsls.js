const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const win = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['sciessors', 'rock']
}
function rps() {
    return {"player": choices[Math.floor(Math.random() * 3)]};
}
function rps(shot) {
    if(!choices.includes(shot)) {
        throw new Error(`${shot} is out of range.`);
    }
    let sim = choices[Math.floor(Math.random() * 3)];
    let result = winner(shot, sim);
    return {"player": shot, "opponent": sim, "result": result};
}

function rpsls() {
    return {"player": choices[Math.floor(Math.random() * 5)]};
}
function rpsls(shot) {
    if(!choices.includes(shot)) {
        throw new Error(`${shot} is out of range.`);
    }
    let sim = choices[Math.floor(Math.random() * 5)];
    let result = winner(shot, sim);
    return {"player": shot, "opponent": sim, "result": result};

}

function winner(player, sim) {
    if(player === sim) {
        return 'draw';
    }
    if(win[player].includes(sim)) {
        return 'win';
    }
    return 'lose';
}

function rpsChoices() {
    return choices.slice(0, 2);
}

function rpslsChoices() {
    return choices;
}