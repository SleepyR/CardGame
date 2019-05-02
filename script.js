var cards = ["1", "2", "3", "4", "5", "6", "7", "8","1", "2", "3", "4", "5", "6", "7", "8"];
let index;
let past = -1, last, count = 0;

function reveal(id) {
    if (!document.getElementById(id).children[0].innerText) {
        document.getElementById(id).children[0].innerHTML = (cards[parseInt(Math.random() * cards.length)]);
        index = cards.indexOf(document.getElementById(id).children[0].innerText);
        if (index !== -1) {
            cards.splice(index, 1);
        }
        document.getElementsByTagName("td")[id - 1].classList.add("flip");
    }
    if (past === -1) {
        last = id;
        past = last;
    } else {
        past = last;
        last = id;
        check(past, last);
        past = -1;
    }
}

function check(x, y) {
    console.log(document.getElementById(x).children[0].innerText, document.getElementById(y).children[0].innerText)
    if (document.getElementById(x).children[0].innerText === document.getElementById(y).children[0].innerText) {
        console.log(true);
        console.log(document.getElementById(x).children[0].innerText);
        count++;
        console.log(cards);
        if (count === 8) alert("WIN");
    } else {
        // document.getElementsByTagName("td")[past-1].classList.remove();
        console.log(false);
    }
}

