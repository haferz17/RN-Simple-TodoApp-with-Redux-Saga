import data from '../components/TodosData';
const urlGetFriends = 'https://jsonplaceholder.typicode.com/users';

function* getTodosFromApi() {
    const response = yield fetch(urlGetFriends, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const friends = yield response.status === 200 ? response.json(): []      
    return {friends,data};
}
//send POST request to add new Todo
function* insertNewTodoFromApi(newTodo) {
    // const response = yield fetch(urlPostTodos, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         id: newTodo.id,
    //         todo: newTodo.todo,
    //         category: newTodo.category,
    //         finish: newTodo.finish
    //     }),
    // });
    // yield console.log(`response = ${JSON.stringify(response)}`); 
    // return yield (response.status === 201);//true or false

    return newTodo
}

//send DELETE request to update existing Todo
function* deleteTodoFromApi(deletedTodoId) {     
    // const urlLink = `${urlDeleteTodo}/${deletedTodoId}`;    
    // const response = yield fetch(urlLink, {
    //     method: 'DELETE',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
            
    //     }),
    // });
    // return yield (response.status === 200);//true or false

    return deletedTodoId
}

export const Api = {
    getTodosFromApi,
    insertNewTodoFromApi,
    deleteTodoFromApi
}; 
