const hamburger = document.querySelector('.hamburger-menu')
console.log(hamburger)

hamburger.addEventListener('click', function(event) {
    document.body.classList.add('sidebar-open')

})

const overlay = document.querySelector('.overlay')
console.log(overlay)


overlay.addEventListener('click', function(event) {
    document.body.classList.remove('sidebar-open')
})