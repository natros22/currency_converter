
let leftAmount = document.getElementById("amountLeft");
let rightAmount = document.getElementById("amountRight");
const ul_1 = document.getElementById("ul_1");
const ul_2 = document.getElementById("ul_2");
const rate_l = document.getElementById("rate_left");
const rate_r = document.getElementById("rate_right");
var btn_l
var btn_r
const menuList1 = document.querySelectorAll('#ul_1 > li');
const menuList2 = document.querySelectorAll('#ul_2 > li');

convert()

// buttons on the left side
ul_1.addEventListener('click', event => { 
    clicked = event.target.closest("li"); 
    btn_l = clicked.textContent;
    menuList1.forEach((li) => {
    li.classList.remove('selected')
    })
    clicked.classList = ('selected');
    convert()
    event.target.removeEventListener('click', convert)
})

// buttons on the right side
ul_2.addEventListener('click', event => { 
    clicked = event.target.closest("li"); 
    btn_r = clicked.textContent;
    menuList2.forEach((li) => {
    li.classList.remove('selected')
    })
    clicked.classList = ('selected');
    convert()
    event.target.removeEventListener('click', convert)

})

leftAmount.addEventListener('input', convert)
rightAmount.addEventListener('input', convert)

// convert currency

function convert(){
btn_r = (typeof btn_r === 'undefined') ? "RUB" : btn_r;
btn_l = (typeof btn_l === 'undefined') ? "USD" : btn_l;

fetch(`https://api.exchangerate.host/convert?from=${btn_l}&to=${btn_r}`)
    .then(responce => responce.json())
    .then((data) => {
    const rate = (data.result).toFixed(4)
    rate_l.innerText = `1 ${btn_l} = ${rate} ${btn_r}`
    result_1 = (1 / rate).toFixed(4)
    rate_r.innerText = `1 ${btn_r} = ${result_1} ${btn_l}`
    rightAmount.value = (rate * leftAmount.value).toFixed(2)
   
})
}

