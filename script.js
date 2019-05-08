var cards, index;
let past, last, count = 0;
let start = true;
let tID;
let myarr = [];
let element, cell;

function reveal(id) {
    if (start) {
        cards = [
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
            }, {
                id: "14",
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
    element = document.getElementById(id);
    if (!element.dataset.number) {
        index = parseInt(Math.random() * cards.length);
        element.setAttribute("data-number", cards[index].id);
        element.children[0].style.backgroundImage = 'url(' + cards[index].value + ')';
        element.children[0].style.backgroundSize = "150px 210px ";
        myarr.push(cards[index].id);
        if (index !== -1) {
            cards.splice(index, 1);
        }
        console.log(myarr, cards);
    }

    cell = document.getElementsByTagName("td")[id - 1];
    if (cell.classList.contains("flipBack")) {
        cell.classList.remove("flipBack");
        void cell.offsetWidth;
    }
    if (!cell.classList.contains("flip")) {
        cell.classList.add('flip');
    }
    if (myarr.length === 2) {
        check(myarr[0], myarr[1]);
        myarr = [];
    }


    function check(x, y) {
        if (!(Math.abs(x - y) === 8)) {
            count++;
            if (count === 8) {
                alert("WIN");
                for (var i = 1; i <= 16; i++) {
                    document.getElementsByTagName("td")[i - 1].classList.add('flipBack');
                    document.getElementById(i).children[0].style.backgroundImage = "";
                }
                start = true;
            } else {
                document.getElementsByTagName("div")[y - 1].classList.replace("flip", "flipBack");
                document.getElementsByTagName("div")[x - 1].classList.replace("flip", "flipBack");
            }
        }
    }
}