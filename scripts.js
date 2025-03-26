let prevbutton = document.getElementById('prev')
let nextbutton = document.getElementById('next')
let container = document.querySelector('.container')
let item = container.querySelectorAll('.list .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstposition = 0
let lastposition = item.length -1

function setSlider(){

    let itemold = container.querySelector('.list .item.active')
    itemold.classList.remove('active')


    let dotsold = indicadores.querySelector('ul li.active')
     dotsold.classList.remove('active')
     dots[active].classList.add('active')

 indicadores.querySelector('.numeros').innerHTML = '0' + (active + 1)
}

nextbutton.onclick = () =>{
    list.style.setProperty('--caculation', 1)
    active = active + 1 > lastposition ? 0 : active + 1
    setSlider()
    item[active]. classList.add('active')
}
prevbutton.onclick = () =>{ 
    list.style.setProperty('--caculation', -1)
    active = active - 1 < firstposition  ? lastposition : active - 1
    setSlider()
    item[active]. classList.add('active')
}
