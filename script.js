


var cards, index;
let past, last, count = 0;
let start = true;
let tID;
let current = [];

function reveal(id) {
    if (start) {
        cards = cards = [
            {
                id: "1",
                value: "cards/Card1.png"
            },
            {
                id: "2",
                value: "cards/Card2.png"
            },
            {
                id: "3",
                value: "cards/Card3.png"
            },
            {
                id: "4",
                value: "cards/Card4.png"
            },
            {
                id: "5",
                value: "cards/Card5.png"
            },
            {
                id: "6",
                value: "cards/Card6.png"
            },
            {
                id: "7",
                value: "cards/Card7.png"
            },
            {
                id: "8",
                value: "cards/card.jpg"
            },
            {
                id: "9",
                value: "cards/Card1.png"
            },
            {
                id: "10",
                value: "cards/Card2.png"
            },
            {
                id: "11",
                value: "cards/Card3.png"
            },
            {
                id: "12",
                value: "cards/Card4.png"
            },
            {
                id: "13",
                value: "cards/Card5.png"
            },            {
                id: "14,
                value: "cards/Card6.png"
            },
            {
                id: "15",
                value: "cards/Card7.png"
            },
            {
                id: "16",
                value: "cards/card.jpg"
            }];
        start = false;
        count = 0;
    }
    element = document.getElementById(id).children[0];
    if (!element.style.backgroundImage) {
        index = parseInt(Math.random() * cards.length);
        element.style.backgroundImage = "url(" + cards[index].value + ")";
        element.style.backgroundSize = "150px 210px";
        if (index !== -1) {
            cards.splice(index, 1);
        }
        current.push(cards[index]);
    }
    // if (cell.classList.contains("flipBack")) {
    //     cell.classList.remove("flipBack");
    //     void cell.offsetWidth;
    // }
    // if (!cell.classList.contains("flip")) {
    //     cell.classList.add('flip');
    //     current.push(id);
    // }
    if (current.length === 2) {
        if(!(current[0] === current[1])){
            check(current[0],current[1]);
            current = [];
        }
        else
            current = [];
    }

}

function check(x, y) {
    if (x.value === y.value) {
        count++;
        if (count === 8) {
            alert("WIN");
            for (var i = 1; i <= 16; i++) {
                document.getElementsByTagName("td")[i - 1].classList.add('flipBack');
                document.getElementById(i).children[0].style.backgroundImage = "";
            }
            start = true;
        }
    }
    else {
        document.getElementsByTagName("td")[y - 1].classList.replace("flip","flipBack");
        document.getElementsByTagName("td")[x - 1].classList.replace("flip","flipBack");
    }
}
