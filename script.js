var cards;
let index;
let past = -1, last, count = 0;
let start = true;
function reveal(id) {
    if(start){
        cards = ["Card1.png", "Card2.png", "Card3.png", "Card4.png", "Card5.png", "Card6.png", "Card7.png", "card.jpg","Card1.png", "Card2.png", "Card3.png", "Card4.png", "Card5.png", "Card6.png", "Card7.png", "card.jpg"];
        start = false;
    }
    if (!document.getElementById(id).children[0].style.backgroundImage) {
        index = parseInt(Math.random() * cards.length);
        document.getElementById(id).children[0].style.backgroundImage = "url("+cards[index]+")";
        document.getElementById(id).children[0].style.backgroundSize = "150px 210px";
        if (index !== -1) {
            cards.splice(index, 1);
        }
    }
    document.getElementsByTagName("td")[id - 1].classList.add("flip");
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
     if (document.getElementById(x).children[0].style.backgroundImage === document.getElementById(y).children[0].style.backgroundImage) {
        console.log(true);
        count++;
        console.log(cards);
        if (count === 8) {
            alert("WIN");
            start = true;
            for (var i = 1; i <= 16; i++) {
                document.getElementsByTagName("td")[i-1].classList.remove("flip");
                document.getElementById(i).children[0].style.backgroundImage = "";
            }
        }
    } else {
        setTimeout(document.getElementsByTagName("td")[past-1].classList.remove("flip"),1000);
        setTimeout(document.getElementsByTagName("td")[last-1].classList.remove("flip"),2000);
        console.log(false);
    }
}

