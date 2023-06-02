const alli = document.querySelectorAll('ul li')
const h1 = document.querySelector('h1')

h1.style.color = 'white'
h1.style.backgroundColor = 'black'
h1.textContent = "Some new title!"


for (const li of alli) {
    li.textContent = li.textContent + " (changed!)"
}