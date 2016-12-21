import * as React from 'react';
import TextInput from '../components/TextInput';

interface IHeaderProps {
    addTodo: (text: string) => void;
}

class Header extends React.Component<IHeaderProps, {}> {
    handleOnSave = (text: string) => {
        if (text.length > 0) {
            this.props.addTodo(text);
        }
    }

    render() {
        return (
            <header className='header'>
                <h1>todos</h1>
                <TextInput
                    placeholder='What needs to be done'
                    newTodo
                    onSave={this.handleOnSave}
                />
            </header>
        );
    }
}

export default Header;
