import React, { Component } from "react"
import Button from "./Button"
import PropTypes from "prop-types"

class ListItem extends Component {

    render() {
        return (
            <li>
                {this.props.children}
                <Button 
                    className = 'btn-del'
                    innerText = 'remove'
                    onClick = {this.props.deleteTask}
                />
                <Button 
                    className = 'btn-edit'
                    innerText = 'edit'
                    onClick = {this.props.editTask}
                />
            </li>
        )
    }
}

export default ListItem