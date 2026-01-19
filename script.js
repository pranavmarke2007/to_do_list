let username = document.querySelector("#username")
let button = document.querySelector(".button")
let items = document.querySelector("#items")

let tasks = []

for (let i = 0; i < localStorage.length; i++) {
    tasks.push(localStorage.getItem(`val${i}`))
}

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i]) {
        let li = document.createElement("li")
        li.innerHTML = tasks[i]
        items.appendChild(li)
        let dbutton = document.createElement("button")
        dbutton.innerHTML = "delete"
        dbutton.addEventListener("click", () => {
            localStorage.removeItem(`val${i}`)
        })
        li.appendChild(dbutton)
    }
}

button.addEventListener("click", () => {
    const value = username.value
    let index = localStorage.length
    localStorage.setItem(`val${index}`, value)
    let li = document.createElement("li")
    li.innerHTML = value
    items.appendChild(li)
    tasks.push(value)

    let dbutton = document.createElement("button")
    dbutton.innerHTML = "❌"
    dbutton.addEventListener("click", () => {
        localStorage.removeItem(`val${index}`)
        li.remove()
    })
    li.appendChild(dbutton)


})

