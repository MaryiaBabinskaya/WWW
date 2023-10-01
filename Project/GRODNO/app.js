gsap.registerPlugin(ScrollTrigger, ScrollSmoother) /*register plaginy*/
if (ScrollTrigger.isTouch !== 1) { //jesli my nie na touch, on delajet plawno 
	ScrollSmoother.create({
		wrapper: '.wrapper', /*oboloczka*/
		content: '.content', /*chto plawajet*/
		smooth: 1.5, /*speed*/
		effects: true /*kazdomu bloku swoja speed*/
	})
	gsap.fromTo('.Grodno-section', { opacity: 1 }, { //bylo 1 potom 0, to jest propadet
		opacity: 0,
		scrollTrigger: { 
			trigger: '.Grodno-section', //element triggera
			start: 'center',
			end: '820',
			scrub: true
		}
	})
	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item') //peremennaja dla lewa
	itemsL.forEach(item => { //dla kazdego item
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item, //odin za odin pojawlajetsa
				start: '-850',
				end: '-100',
				scrub: true //pridet i ujdet
			}
		})
	})
	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item') //peremiennaja dla prawa
	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})
}