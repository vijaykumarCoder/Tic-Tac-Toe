const X_CLASS = "x";
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn

cellElements.forEach( cell => {
    cell.addEventListener('click',handleClick, {once : ture})
})
function handleClick(e){
    // console.log("clicked")
    document.getElementById("hi").innerHTML = "how"
}
console.log("how are ou")
// function handleClick(e) {
//     const cell = e.target
//     const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
//     //placeMark
//     placeMark(cell, currentClass)

// }
// function placeMark(cell, currentClass){
//     cell.classList.add(currentClass)
// }
