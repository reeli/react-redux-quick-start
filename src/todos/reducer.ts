import {handleActions, Action}  from 'redux-actions';
import {Todo, IState} from './model';
import {ADD_TODO} from './constants/ActionTypes';

const initialState: IState = [<Todo>{
    text: 'Use Redux with TypeScript',
    completed: false,
    id: 0,
}];

export default handleActions<IState>({
    [ADD_TODO]: (state: IState, action: Action<any>): IState => {
        return [{
            id: state.reduce((maxId, todo) => {
                console.log(state, 'state');
                return Math.max(todo.id, maxId);
            }, -1) + 1,
            completed: action.payload.completed,
            text: action.payload.text,
        }, ...state];
    },
}, initialState);
