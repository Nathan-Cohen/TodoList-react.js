import React, { Component } from 'react';


class TodoList extends Component {
    constructor (){
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    renderTodos(){
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" id={item} key={item}>
                    {item} | <button className="btn btn-danger" onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.parentNode.id);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    render(){
        return(
            <div>
                <h1 align="center">Ma Todo List</h1>
                <form className="form-row align-items-center">
                    <input 
                        value={this.state.userInput}
                        type="text" 
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />
                    <button 
                        onClick={this.addTodo.bind(this)}
                        className="btn btn-primary"
                    >
                        Ajouter
                    </button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;