const carousel = document.querySelector('.carousel')
firstImg = carousel.querySelectorAll('img')[0]
let arrowIcons = document.querySelectorAll('span')
let arrArrowIcons = Array.from(arrowIcons)

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = 250
console.log(firstImgWidth)
arrArrowIcons.forEach(icon=>{
    icon.addEventListener('click', ()=>{
        if(icon.id == 'left'){
            carousel.scrollLeft -= firstImgWidth
        }else{
            carousel.scrollLeft += firstImgWidth
        }
    })
})



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