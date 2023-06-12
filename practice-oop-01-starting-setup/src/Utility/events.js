// const btns=document.querySelectorAll('button')

// const fun=(event) =>{
//     console.log("fadsf")
//     event.target.disabled=true
// }

// const fun2=() =>{
//     console.log("This is the second function")
// }

// // btn.onclick=fun
// // btn.onclick=fun2
// // const fun3=fun.bind(this)
// // btn.addEventListener('click',fun)
// btns.forEach(btn => btn.addEventListener('click',fun))
// // window.addEventListener('scroll',(event) =>[
// //     console.log(event)
// // ])
// // setTimeout(() => {
// //     btn.removeEventListener('click',fun)
// // }, 2000);

// let curElementNumber = 0;

// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;
//     const height=document.documentElement.clientHeight
//     console.log(distanceToBottom,height)
//     // if (distanceToBottom < document.documentElement.clientHeight + 150) {
//     //     const newDataElement = document.createElement('div');
//     //     curElementNumber++;
//     //     newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//     //     document.body.append(newDataElement);
//     // }
// }
// window.addEventListener('scroll',scrollHandler)

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log('fadsf')
});
