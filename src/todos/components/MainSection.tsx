import * as React from 'react';
import TodoItem from './TodoItem';
import * as _  from 'lodash';
import {Todo} from '../model';

interface IMainSectionProps {
    todos: Todo[];
    editTodo: (todo: Todo, text: string) => void;
    deleteTodo: (todo: Todo) => void;
}

class MainSection extends React.Component<IMainSectionProps, {}> {
    render() {
        const {deleteTodo, editTodo, todos} = this.props;
        return (
            <div>
                {
                    _.map(todos, (todo: any, idx: number) => {
                        return <TodoItem
                            key={idx}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />;
                    })
                }
            </div>
        );
    }
}

export default MainSection;
