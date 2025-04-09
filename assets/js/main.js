//Task_1
const isDay = Boolean(prompt('Is it day? (true/false)'))
if (isDay === 'true') {
	console.log('Світла тема')
	document.body.style.backgroundColor = '#000'
	document.body.style.color = '#fff'
} else {
	console.log('Темна тема')
	document.body.style.backgroundColor = '#fff'
	document.body.style.scolor = '#000'
}

//Task_2
const isOnline = false
if (!isOnline) {
	console.warn(
		"Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
	)
}
//Task_3
const buyMoney = Number(
	prompt('Введіть суму грошей, яку ви готові витратити на покупки')
)
if (buyMoney > 500) {
	console.log('You buy all items: ', buyMoney - buyMoney * 0.3)
} else if (buyMoney > 800) {
	console.log('You buy all items: ', buyMoney - buyMoney * 0.5)
} else {
	console.log('You buy all items: ', buyMoney)
}
//Task_4
document.addEventListener('DOMContentLoaded', () => {
	const userMaleImg =
		'https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png'
	const userFemaleImg =
		'https://brandeps.com/icon-download/U/User-female-icon-02.png'
	const userSection = document.querySelector('.header-content__registration')
	const linkRegistration = document.querySelector(
		'.header-content__registration-list'
	)
	const linkLogin = document.querySelector(
		'.header-content__registration-list .login a'
	)

	linkLogin.addEventListener('click', (event) => {
		event.preventDefault()

		const userName = prompt('Enter your name')
		const isMale = prompt('Are you male? (true/false)').toLowerCase()

		if (isMale === 'true') {
			linkRegistration.classList.add('unactive')
			const userImg = document.createElement('img')
			userImg.src = userMaleImg
			userImg.style.border = '3px solid blue'
			userImg.style.borderRadius = '50%'
			userImg.style.width = '50px'
			userImg.style.height = '50px'

			const userNameElement = document.createElement('span')
			userNameElement.textContent = userName
			userNameElement.style.marginLeft = '10px'

			const userContainer = document.createElement('div')
			userContainer.style.display = 'flex'
			userContainer.style.alignItems = 'center'
			userContainer.appendChild(userImg)
			userContainer.appendChild(userNameElement)

			userSection.innerHTML = ''
			userSection.appendChild(userContainer)
		} else if (isMale === 'false') {
			linkRegistration.classList.add('unactive')
			const userImg = document.createElement('img')
			userImg.src = userFemaleImg
			userImg.style.border = '3px solid red'
			userImg.style.borderRadius = '50%'
			userImg.style.width = '50px'
			userImg.style.height = '50px'

			const userNameElement = document.createElement('span')
			userNameElement.textContent = userName
			userNameElement.style.marginLeft = '10px'

			const userContainer = document.createElement('div')
			userContainer.style.display = 'flex'
			userContainer.style.alignItems = 'center'
			userContainer.appendChild(userImg)
			userContainer.appendChild(userNameElement)

			userSection.innerHTML = ''
			userSection.appendChild(userContainer)
		}
	})
})

//Task_5
const dayWeek = Number(prompt('Write please the number of the day of the week'))
switch (dayWeek) {
	case 1:
		console.log('Monday')
		break
	case 2:
		console.log('Tuesday')
		break
	case 3:
		console.log('Wednesday')
		break
	case 4:
		console.log('Thursday')
		break
	case 5:
		console.log('Friday')
		break
	case 6:
		console.log('Saturday')
		break
	case 7:
		console.log('Sunday')
		break
	default:
		console.error('Invalid day of the week')
}
//Task_6
const day = 25
if (day >= 1 && day <= 10) {
	console.log('First decade')
} else if (day >= 11 && day <= 20) {
	console.log('Second decade')
} else if (day >= 21 && day <= 31) {
	console.log('Third decade')
} else {
	console.log('Invalid day number')
}
