const submitBtn = document.getElementById('submitBtn');
const rating = document.getElementById('rating');
const rates = document.getElementById('rates');
const front = document.getElementById('front');
const thanks = document.getElementById('thanks');

submitBtn.addEventListener('click', submit);
rates.addEventListener('click', selectRate);

function selectRate(e) {
    for (const rate of rates.children)
        rate.firstChild.classList.remove('active');
    e.target.classList.add('active');
    rating.innerHTML = e.target.innerHTML;
}
function submit() {
    front.style.display = 'none';
    thanks.style.display = 'flex';
}