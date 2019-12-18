import React, { Component } from "react"
import TextField from "./TextField"
import Button from "./Button"

class Form extends Component {
    state = {
        inputText: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.inputText.trim()) {

            this.props.addTask(this.state.inputText)
            this.setState({
                inputText: ""
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField onChange={this.handleChange} inputText={this.state.inputText} />
                <Button className="btn-add" innerText="Add task" />
            </form>
        )
    }

}

export default Form 