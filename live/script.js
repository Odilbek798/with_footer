
const ProductsData =[
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card2.png',
        title: 'The mystery of the black square',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card3.png',
        title: 'Pink Cloud 🌥',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card4.png',
        title: '3D Ethereum',
        user:'😁  Esther Howard',
        price:'0.85',
    },
]

const ProductsData2=[
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    }, {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
    {
        img:src='./img/card1.png',
        title: '3d Sof Card',
        user:'😁  Esther Howard',
        price:'0.85',
    },
]

const wrapper = document.querySelector('.live__wrapper1')
const cards = ProductsData.map(card => {
    return `
    <div class="live__card">
    <img  class="live__card-img" src=${card.img} alt="">

    <div class="live__card-box">
        <h3>${card.title}</h3>

        <div>
                <p>${card.user}</p>
                <p>Current Bid <br>
                <b>${card.price}</b>   
                </p>
            </div>
        </div>
    </div>
    `
}).join('')
wrapper.innerHTML = cards


const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
    <div class="live__card">
    <img  class="live__card-img" src=${card.img} alt="">

    <div class="live__card-box">
        <h3>${card.title}</h3>

        <div>
                <p>${card.user}</p>
                <p>Current Bid <br>
                <b>${card.price}</b>   
                </p>
            </div>
        </div>
    </div>
    `
}).join('')
wrapper.innerHTML = cards2
