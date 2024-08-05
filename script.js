const submitBtn = document.getElementById('submitBtn');
const rating = document.getElementById('rating');
const rate = document.getElementById('rate');

submitBtn.addEventListener('click', submit);
rate.addEventListener('click', selectRate);

function selectRate(e) {
    console.log(e.target);
}
function submit() { }