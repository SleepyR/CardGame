var cards, index;
let past, last, count = 0;
let start = true;
let tID;
let current = [];

function reveal(id) {
    if (start) {
        cards = ["cards/Card1.png", "cards/Card2.png", "cards/Card3.png", "cards/Card4.png", "cards/Card5.png", "cards/Card6.png", "cards/Card7.png", "cards/card.jpg", "cards/Card1.png", "cards/Card2.png", "cards/Card3.png", "cards/Card4.png", "cards/Card5.png", "cards/Card6.png", "cards/Card7.png", "cards/card.jpg"];
        start = false;
        count = 0;
    }
    element = document.getElementById(id).children[0].style;
    if (!element.backgroundImage) {
        index = parseInt(Math.random() * cards.length);
        element.backgroundImage = "url(" + cards[index] + ")";
        element.backgroundSize = "150px 210px";
        if (index !== -1) {
            cards.splice(index, 1);
        }
    }
    cell = document.getElementsByTagName("td")[id - 1];
    if (cell.classList.contains("flipBack")) {
        cell.classList.remove("flipBack");
        void cell.offsetWidth;
    }
    if (!cell.classList.contains("flip")) {
        cell.classList.add('flip');
        current.push(id);
    }
    if (current.length === 2) {
        console.log(current[0],current[1]);
        if(!(current[0] === current[1])){
            check(current[0],current[1]);
            current = [];
        }
        else 
            current = [];
    }
    
}

function check(x, y) {
    if (document.getElementById(x).children[0].style.backgroundImage === document.getElementById(y).children[0].style.backgroundImage) {
        count++;
        if (count === 8) {
            setTimeout(function(){
                alert("WIN");
                for (var i = 1; i <= 16; i++) {
                    document.getElementsByTagName("td")[i - 1].classList.add('flipBack');
                    document.getElementById(i).children[0].style.backgroundImage = "";
                }
            }, 1000);
            start = true;
        }
    }
     else {
        document.getElementsByTagName("td")[y - 1].classList.replace("flip","flipBack");
        document.getElementsByTagName("td")[x - 1].classList.replace("flip","flipBack");
    }
}

