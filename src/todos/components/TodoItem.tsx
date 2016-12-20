import * as React from 'react';
import TextInput from './TextInput';
import {Todo} from '../model';

interface TodoItemProps {
    todo: Todo,
    deleteTodo: (todo: Todo) => void,
    editTodo: (todo: Todo, text: string) => void,
}

interface TodoItemState {
    editing: boolean,
}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
    state = {
        editing: false,
    };

    handleDoubleClick = () => {
        this.setState({
            editing: true,
        });
    };

    handleOnSave(todo: Todo, text: string) {
        if (text.length === 0) {
            this.props.deleteTodo(todo);
        } else {
            this.props.editTodo(todo, text);
        }

        this.setState({
            editing: false,
        });
    }

    render() {
        const {editing} = this.state;
        const {todo} = this.props;
        let element;
        element = editing
            ? <TextInput
            text={todo.text}
            editing={editing}
            onSave={(text) => this.handleOnSave(todo,text)}
        />
            : (
            <div>
                <input
                    type='checkbox'
                />
                <label onDoubleClick={this.handleDoubleClick}>
                    {todo.text}
                </label>
            </div>
        );

        return (
            <li>
                {element}
            </li>
        )
    }
}

export default TodoItem;
