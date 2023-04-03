let burger = document.querySelector('.burger')
 let navitem = document.querySelector('.navitem')
 let body = document.querySelector('body')

 burger.addEventListener('click', () => {
     burger.classList.toggle('active')
     navitem.classList.toggle('active')
     body.classList.toggle('hidden')
 })
