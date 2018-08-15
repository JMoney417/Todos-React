import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      editTodo: this.props.todo
    }
  }

  updateState = () => this.setState({ editing: !this.state.editing, editTodo: this.props.todo })


  handleUpdate = (event) => {
    let temp = event.target.value
    this.setState({ editTodo: temp })
  }

  render() {
    return (
      <li>
        <button 
                onClick={this.props.deleteTodo}>Delete</button>
        <button onClick={() => this.updateState()} hidden={this.state.editing}>Update</button>
        <button onClick={() => {
          this.props.saveTodo(this.state.editTodo, this.props.index)
          if(this.state.editTodo){
            this.updateState()
          }
        }} hidden={!this.state.editing}>Save</button>

        {
          this.state.editing
            ?
            <input type="text" onChange={this.handleUpdate} value={this.state.editTodo} />
            :
            <span>{' ' + this.props.todo}</span>
        }
      </li>
    )
  }

}

export default Todo;
