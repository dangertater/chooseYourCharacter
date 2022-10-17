let buttonUp = document.getElementById("buttonUp")
let buttonDown = document.getElementById("buttonDown")
let buttonLeft = document.getElementById("buttonLeft")
let buttonRight = document.getElementById("buttonRight")
let buttonGo = document.getElementById("buttonGo")
let buttonRandom = document.getElementById("buttonRandom")
let characterImg = document.getElementById("characterImg")
let style = getComputedStyle(characterImg)
let rowHeight = 51
let columnWidth = 48
let cycleBackUpDown = () => {
	let topNoPx = style.top.replace("px", "")
	if (topNoPx > 0) {
		characterImg.style.top = "-153px"
	} else if (topNoPx < -153) {
		characterImg.style.top = "0px"
	}
	console.log(style.top)
}
let cycleBackLeftRight = () => {
	let leftNoPx = style.left.replace("px", "")
	if (leftNoPx > 442) {
		characterImg.style.left = "201.188px"
	} else if (leftNoPx < 200) {
		characterImg.style.left = "441.188px"
	}
}

buttonUp.addEventListener("click", (e) => {
	let removePx = style.top.replace("px", "")
	let top = Number(removePx)
	characterImg.style.top = `${top + rowHeight}px`
	cycleBackUpDown()
})

buttonDown.addEventListener("click", (e) => {
	let removePx = style.top.replace("px", "")
	let top = Number(removePx)
	characterImg.style.top = `${top - rowHeight}px`
	cycleBackUpDown()
})

buttonLeft.addEventListener("click", (e) => {
	let removePx = style.left.replace("px", "")
	let left = Number(removePx)
	characterImg.style.left = `${left + columnWidth}px`
	cycleBackLeftRight()
})

buttonRight.addEventListener("click", (e) => {
	let removePx = style.left.replace("px", "")
	let left = Number(removePx)
	characterImg.style.left = `${left - columnWidth}px`
	cycleBackLeftRight()
})

buttonGo.addEventListener("click", (e) => {
	console.log(style.top)
})
