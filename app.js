const defaultInput = document.querySelector('#defaultInput');
const fromSelect = document.querySelector('#fromSelect');
const btn = document.querySelector('#btn');
const total = document.querySelector('.total');

const rest = {
    USD: 0.000079,
    RUB: 0.0070,
    EUR: 0.000072
};

function convert(sum, currency){
    if(!rest[currency]){
        return null
    }
    return sum * rest[currency]
}
btn.addEventListener('click', function(e) {
    e.preventDefault()
    const sum = Number(defaultInput.value);
    const currency = fromSelect.value;
    const result = convert(sum, currency)

    total.innerText = result
})