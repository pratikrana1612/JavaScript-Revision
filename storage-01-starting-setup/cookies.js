const storeBtn=document.getElementById('store-btn')
const retrieveBtn=document.getElementById('retrieve-btn')


storeBtn.addEventListener('click',() =>{
    const uId='u123'
    const obj={userId:123,name:"pratik"}
    document.cookie=`userId=${uId};max-age=2`
    document.cookie=`obj=${JSON.stringify(obj)}`

})
retrieveBtn.addEventListener('click',() =>{
    let cookies=document.cookie.split(';')
    cookies=cookies.map(c => c.trim())
    console.log(cookies[0].split('=')[1])
})