import React, {Component} from 'react';
import Form from "./components/Form"
import ListItem from "./components/ListItem"
import './App.css';

export default class App extends Component {
    state = {
        id: 0,
        tasks: [],
        isValid: false,
    } 

    handleAddTask = input => {
        this.setState({
            id : this.state.id + 1,
            tasks: [...this.state.tasks, {name:input, id: this.state.id}]
        })
    }

    handleDeleteTask(id){
        this.setState({
            tasks: this.state.tasks.filter( elem => elem.id !== id)
        })
             
     }

    handleEditTask(id, e){
        const target = this.state.tasks.find(el => el.id === id) 
        const edited = prompt("Enter new task's name", target.name) // e.target.parentNode.firstChild.data
        this.setState({
            tasks: this.state.tasks.map(obj => obj.id === id ? {name:edited, id} : obj)
        })
    }

    render() {
        return (
            <>
                <Form  addTask = {this.handleAddTask}/>
                <ul>
                    {this.state.tasks.map(task =>
                        <ListItem
                            key={task.id}
                            deleteTask={() => this.handleDeleteTask(task.id)}
                            editTask={(e) => this.handleEditTask(task.id,)}
                        >
                            {task.name}
                        </ListItem>
                    )}
                </ul>
            </>
        )
    }
}




