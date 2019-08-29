import { connect } from 'react-redux';
import Home from '../components/Home';

//Actions ?
import { addTodoAction, fetchTodosAction, deleteItemAction, deleteItemSuccessAction, fetchFriendsAction} from '../actions';

const mapStateToProps = (state) => {   
    return {        
        todos: state.todoReducers.todos,
        loading: state.todoReducers.loading,
        friends: state.todoReducers.friends
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchTodos: () => {                        
            dispatch(fetchTodosAction());
        }, 
        //Not necessary !   
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 
        onAddTodo: (newTodo) => {                        
            dispatch(addTodoAction(newTodo));
        },
        //delete a todo
        onDeleteItemAction: (deletedTodoId) => {   
            dispatch(deleteItemAction(deletedTodoId));
        }
    };
}
const todoContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default todoContainer;