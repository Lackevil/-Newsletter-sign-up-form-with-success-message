const newsletter = document.querySelector('.newsletter')
const newsletterForm = document.querySelector('.newsletter__form')
const emailInput = document.querySelector('.newsletter__input-email')
const success = document.querySelector('.success')

const dissmiss = document.querySelector('.success__dismiss')

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

newsletterForm.addEventListener('submit', checkUserEmail)
dissmiss.addEventListener('click', dissmissFunc)

function checkUserEmail(e) {
	e.preventDefault()

	const userEmail = emailInput.value
	const isValidEmail = regex.test(userEmail)

	if (userEmail === '') {
		emailInput.classList.remove('valid')
	} else {
		if (!isValidEmail) {
			emailInput.classList.add('valid')
		} else {
      newsletter.classList.add('hidden')
			emailInput.classList.remove('valid')
			success.classList.remove('hidden')
		}
	}
}

function dissmissFunc() {
  newsletter.classList.remove('hidden')
  success.classList.add('hidden')

  emailInput.value = ''
}