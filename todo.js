// const arrayOfTodos1 = [
//     {
//     "userId": 14,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//     },
//     {
//     "userId": 20,
//     "id": 2,
//     "title": "delectus aut autem",
//     "completed": false
//     }]

    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
    
    const fetchTodos = () => {
        fetch('https://reqres.in/api/users?page=2')
        .then((response) => response.json())
        .then((data) => populateTodos(data))
    }

    // const logTodos = () => {
    //     console.log(arrayOfTodos1)
    // }
    
    const populateTodos = (all_data) => {
        console.log(all_data)
        const todoList = document.getElementById('todo-list')

        for (let i = 0; i < all_data.data.length; i++) {
            const element = document.createElement('li')
            element.innerHTML = `<img src="${all_data.data[i].avatar}">`
            todoList.appendChild(element)
        }
    }