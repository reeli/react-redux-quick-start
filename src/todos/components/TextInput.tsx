import * as React from 'react';
import * as classNames from 'classnames';

interface TextInputProps {
    placeholder?: string,
    text?: string,
    newTodo?: boolean,
    onSave: (text: string) => void,
    editing?: boolean,
}

interface TextInputState {
    text: string,
}

class TextInput extends React.Component<TextInputProps, TextInputState> {
    state = {
        text: this.props.text || '',
    };

    handleBlur = (e: any) => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    };

    handleChange = (e: any) => {
        this.setState({
            text: e.target.value,
        })
    };

    handleSubmit = (e: any) => {
        const text = e.target.value.trim();
        if (e.which === 13) {
            this.props.onSave(text);
            if (this.props.newTodo) {
                this.setState({
                    text: '',
                });
            }
        }
    };

    render() {
        const {placeholder, editing} = this.props;
        const {text} = this.state;

        return (
            <input
                className={classNames({
                edit: editing
                })}
                type='text'
                placeholder={placeholder}
                autoFocus={true}
                value={text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        )
    }
}

export default TextInput;
