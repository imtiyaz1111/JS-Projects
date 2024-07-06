const button = document.querySelector('.open-btn')
const closeIcon = document.querySelector('.close-icon')
const popup = document.querySelector('.popup')
const overlay = document.querySelector('.overlay')

button.addEventListener('click', () => {
  
    popup.classList.add('popup1-open')
   
})

closeIcon.addEventListener('click', () => {
    popup.classList.remove('popup1-open')
    // popup.classList.add('popup2-close')
})