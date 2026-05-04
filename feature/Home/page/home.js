const navbar = document.querySelectorAll('.item');

navbar.forEach(item => {
  item.addEventListener('click', ()=> {

    navbar.forEach(i => i.classList.remove('active'))

    item.classList.add('active')
  })
})


