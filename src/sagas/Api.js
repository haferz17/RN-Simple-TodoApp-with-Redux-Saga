import data from '../components/TodosData';
// const urlGetTodos = 'https://jsonplaceholder.typicode.com/todos';

function* getTodosFromApi() {
    // const response = yield fetch(urlGetTodos, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: '',
    // });
    // const todos = yield response.status === 200 ? response.json(): []      
    // return todos;

    const todos = data;
    return todos;
}
export const Api = {
    getTodosFromApi
}; 