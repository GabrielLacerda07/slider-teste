const carousel = document.querySelector('.carousel')
let isDragStart = false, prevPageX, prevScrollLeft;


carousel.addEventListener('mousedown', (e)=>{
    isDragStart = true
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
})
carousel.addEventListener('mousemove', (e)=>{
    if(!isDragStart) return
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff
})

carousel.addEventListener('mouseup', ()=>{
    isDragStart = false
})