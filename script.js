let username = document.querySelector("#username")
let value1 = document.querySelector(".value1")
let value2 = document.querySelector(".value2")
let value3 = document.querySelector(".value3")
let button = document.querySelector(".button1")
let delete1=document.querySelector(".delete1")
let delete2=document.querySelector(".delete2")
let delete3=document.querySelector(".delete3")
let val1 = localStorage.getItem("val1")
let val2 = localStorage.getItem("val2")



value1.innerHTML = localStorage.getItem("val1")
value2.innerHTML = localStorage.getItem("val2")
value3.innerHTML = localStorage.getItem("val3")

if (val1 === null) {
    button.addEventListener("click", () => {
        let name = username.value
        localStorage.setItem("val1", name)
        
    })
}
else if (val1 !== null && val2 === null) {
    button.addEventListener("click", () => {
        let name = username.value
        localStorage.setItem("val2", name)
    })

}
else {
    button.addEventListener("click", () => {
        let name = username.value
        localStorage.setItem("val3", name)
    })
}

delete1.addEventListener("click",()=>{
    localStorage.removeItem('val1')
})
delete2.addEventListener("click",()=>{
    localStorage.removeItem('val2')
})
delete3.addEventListener("click",()=>{
    localStorage.removeItem('val3')
})




