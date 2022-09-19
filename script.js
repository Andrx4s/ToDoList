const text_input = document.querySelector('.textarea')
const date_input = document.querySelector('.textarea_date')
const in_process_add = document.querySelector('.block_process')
const ready_add = document.querySelector('.block_ready')

let todoList = []


if (localStorage.length != 0) {
    for (x = 1; x <= localStorage.length; x++) {
        in_process_add.innerHTML += `
            <div class="block">
                <h3 class="text_process">${localStorage.key(x - 1)}</h3>
                <p class="date_process">${localStorage.getItem(`${localStorage.key(x - 1)}`)}</p>
                <div class="btn-group">
                    <button class="btn btn-outline-danger delete">Удалить</button>
                    <button  class="btn btn-outline-success success" onclick="ready_buttonClick()">Готово</button>
                </div>
            </div>
        `
    }
}

 const onClick = () => {
    let todoItem = {
        text: `${text_input.value}`,
        date: `${date_input.value}`
    }
     localStorage.setItem(`${todoList.length + 1}`, todoItem)

     in_process_add.innerHTML += `
        <div class="block">
            <h3 class="text_process">${localStorage.getItem("1")}</h3>
            <p class="date_process">${localStorage.getItem("1")}</p>
            <div class="btn-group">
                <button class="btn btn-outline-danger delete">Удалить</button>
                <button  class="btn btn-outline-success success" onclick="ready_buttonClick(id)">Готово</button>
            </div>
        </div>
     `

 }

 const ready_buttonClick = (id) => {
     const text = text_input.value
     const date = date_input.value

    ready_add.innerHTML += `
        <div class="block">
            <h3 class="text_process">${localStorage.key(id)}</h3>
            <p class="date_process">${localStorage.getItem(`${localStorage.key(id)}`)}</p>
            <div class="btn-group">
                <button class="btn btn-outline-danger delete">Удалить</button>
            </div>
        </div>
    `
 }

console.log(localStorage)
