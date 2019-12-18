import React from "react"
import PropTypes from "prop-types"

function Button({ className, innerText, onClick}) {
    return (
        <button
            className = {className}
            onClick = {onClick}
        >
            {innerText}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    innerText: PropTypes.string
}

export default Button