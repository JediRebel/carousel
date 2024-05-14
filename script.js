// Slider data
const sliderData = [
    { url: './images/back_1.png', title: 'In this hour, I do not believe that any darkness will endure.', color: 'rgb(100, 67, 68)' },
    { url: './images/back_2.png', title: 'Even the smallest person can change the course of the future.', color: 'rgb(43, 35, 26)' },
    { url: './images/back_3.png', title: 'I tried to save the Shire, and it has been saved.', color: 'rgb(36, 31, 33)' },
    { url: './images/back_4.png', title: "All's well that ends better.", color: 'rgb(139, 98, 66)' },
    { url: './images/back_5.png', title: 'Let him not vow to walk in the dark, who has not seen the nightfall.', color: 'rgb(67, 90, 92)' },
    { url: './images/back_6.png', title: 'Deeds will not be less valiant because they are unpraised.', color: 'rgb(166, 131, 143)' },
    { url: './images/back_7.png', title: 'Not all those who wander are lost.', color: 'rgb(53, 29, 25)' },
    { url: './images/back_9.png', title: 'May it be a light to you in dark places, when all other lights go out.', color: 'rgb(53, 29, 25)' },
    { url: './images/back_8.png', title: 'Despair is only for those who see the end beyond all doubt. We do not.', color: 'rgb(67, 90, 92)' },

]

// Selecting elements for the slider
const slider = document.querySelector('div.slider')
const next = document.querySelector('button.next')
const prev = document.querySelector('button.prev')
const img = document.querySelector('.slider-wrapper img')
const p = document.querySelector('.slider-footer p')
const footer = document.querySelector('.slider-footer')

// Initialize slider index
let i = 0

// Next button click event
next.addEventListener('click',function(){
    i++
    i = (i >= sliderData.length ? 0 : i) // Loop back to start if index exceeds data length
    clickRender()
})

prev.addEventListener('click',function(){
    i--
    i = i < 0 ? (sliderData.length - 1) : i  // 小于0 之后转回来。-1 对应的是最后一个对象的索引，也就是数组长度-1
    clickRender()
})

function clickRender(){
    img.src = sliderData[i].url
    p.innerHTML = sliderData[i].title
    footer.style.backgroundColor = sliderData[i].color
    // console.log(sliderData[i].color);

    document.querySelector('.slider-indicator .active').classList.remove('active')  // 移除现有的小圆点      
    document.querySelector(`.slider-indicator li:nth-child(${i+1})`).classList.add('active')  // 增加小圆点，注意i是从0开始的，所以加1才对
}

// 自动播放模块
let timerID = setInterval(function(){
    // 更好的方法如下，利用JS自动调用点击事件
    next.click()  // 调用函数
}, 1000)


// 鼠标移入移出事件，通常情况下，应该先关闭定时器，然后再开启。因为之前在开启状态。如果先开再关，可能导致错误。
slider.addEventListener('mouseenter', function(){
    clearInterval(timerID)    
})

slider.addEventListener('mouseleave', function(){
    timerID = setInterval(function(){        // timerID 要带过来，这样上面关闭的时候才能清除
    next.click()  // 
}, 1000)

})


