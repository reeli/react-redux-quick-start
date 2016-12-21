import * as React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../todos/actions';
import {Dispatch} from 'redux';

import {
    Header,
    MainSection,
} from '../todos';

import {Todo} from '../todos/model';

interface IAppProps {
    todos: Todo[];
    dispatch: Dispatch<any>;
}

const mapStateToProps = (state: any) => {
    return {
        todos: state.todos,
    };
};

class App extends React.Component<IAppProps, {}> {
    render() {
        return (
            <div>
                <Header addTodo={(text) => this.props.dispatch(addTodo(text))}/>
                <MainSection
                    todos={this.props.todos}
                    editTodo={(todo,text) => {console.log(todo,text)}}
                    deleteTodo={(todo) => {console.log(todo);}}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);



