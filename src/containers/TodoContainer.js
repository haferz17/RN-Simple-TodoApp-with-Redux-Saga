import { connect } from 'react-redux';
import Home from '../components/Home';

//Actions ?
import { addTodoAction, fetchTodosAction, fetchSuccessAction, fetchFailedAction } from '../actions';

const mapStateToProps = (state) => {   
    return {        
        todos: state.todoReducers.todos,
        loading: state.todoReducers.loading,
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
        }
    };
}
const todoContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default todoContainer;