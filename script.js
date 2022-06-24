document.addEventListener('DOMContentLoaded', () => {
    const cardArr = [
        //fazer os objs serem obj sendo chave o nome e o vamor a imagem
        {
            name: 'ganhou',
            img: 'img/ganhou.png'
        },
        {
            name: 'ganhou',
            img: 'img/ganhou.png'
        },
        {
            name: 'direita',
            img: 'img/direita.png'
        },
        {
            name: 'direita',
            img: 'img/direita.png'
        }, {
            name: 'tras',
            img: 'img/tras.png'
        },
        {
            name: 'tras',
            img: 'img/tras.png'
        }, {
            name: 'correndo',
            img: 'img/correndo.png'
        },
        {
            name: 'correndo',
            img: 'img/correndo.png'
        }, {
            name: 'pulo',
            img: 'img/pulo.png'
        },
        {
            name: 'pulo',
            img: 'img/pulo.png'
        }, {
            name: 'esquerda',
            img: 'img/esquerda.png'
        },
        {
            name: 'esquerda',
            img: 'img/esquerda.png'
        }
    ]
    cardArr.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    //adicionar #result ali embaixo
    const resultDisplay = document.querySelector('#result');

    let cardsChosen = [];
    let cardsChonenId = [];
    let match = [];

    function createBoard() {
        for (let i = 0; i < cardArr.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'img/card.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    //check for match
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChonenId[0];
        const optionTwoId = cardsChonenId[1];
        if (optionOneId === optionTwoId) {
            //tirar o alerta
            cards[optionOneId].setAttribute('src', 'img/card.png');
            cards[optionTwoId].setAttribute('src', 'img/card.png');
            alert('CLICOU NA MESMA IMAGEM')
        }
        // fazendo pares
        else if (cardsChosen[1] === cardsChosen[0]) {
            alert('ACHOU UM PAR');
            cards[optionOneId].setAttribute('src', 'img/white.png');
            cards[optionTwoId].setAttribute('src', 'img/white.png');

            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);

            match.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/card.png');
            cards[optionTwoId].setAttribute('src', 'img/card.png');
            alert('Ops... jogue novamente :)');
        }
        cardsChosen = [];
        cardsChonenId = [];
        resultDisplay.textContent = match.length;
        if (match.length == cardArr.length / 2) {
            resultDisplay.textContent = 'Parabens, voce ganhou!';
        }


    }

    //virando cards

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArr[cardId].name);
        cardsChonenId.push(cardId);
        this.setAttribute('src', cardArr[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500)

        }
    }

    //botao para jogar de novo
    const playAgain = document.querySelector('#btn');
    playAgain.addEventListener('click', event => {
        location.reload();
    })

    //jogar de novo

    createBoard();

})