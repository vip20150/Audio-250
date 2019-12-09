const quantity = document.querySelector(".quantity");
const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener('click', changeQuant);
function changeQuant(evt) {
const cangeValue = evt.target.dataset.value;
	const num = +quantity.value + +cangeValue;
!isNaN(num) && num > 0 ? quantity.value = num : quantity.value = 0;
}
