import {test} from 'ava';
import {addTodo} from '../actions';

test('action creator', (t) => {
    const result = addTodo('happy happy');
    t.deepEqual(result.type, 'ADD_TODO');
    t.deepEqual(result.payload, {
        text: 'happy happy',
        completed: false,
    });
});
