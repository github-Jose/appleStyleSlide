let li = Array.prototype.slice.call( document.querySelectorAll('li'))

var n = 0
var timer = setInterval(() => {
  li[n % li.length].click()
  n++
}, 3000)

for (let i = 0; i < li.length; i++) {
  li[i].onclick = function () {
    images.style.transform = `translateX(-${920 * i}px)`
    li.forEach(value => {
      value.classList.remove('act')
    })
    li[i].classList.add('act')
    n = i
  }
}

images.onmouseenter = function () {
  window.clearInterval(timer)
}
images.onmouseleave = function () {
  timer = setInterval(() => {
    li[n % li.length].click()
    n++
  }, 3000)
}

// 当用户没有浏览当前页面时，浏览器的setInterval会出错，为了减小页面占用内存或cpu
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    window.clearInterval(timer)
  } else {
    timer = setInterval(() => {
      li[n % li.length].click()
      n++
    }, 3000)
  }
})