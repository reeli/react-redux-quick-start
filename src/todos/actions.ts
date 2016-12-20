import {createAction} from 'redux-actions';

import {
    ADD_TODO
} from './constants/ActionTypes';


const addTodo = createAction(
    ADD_TODO,
    (text) => {
        return {
            text,
            completed: false,
        }
    }
);

export {
    addTodo,
}