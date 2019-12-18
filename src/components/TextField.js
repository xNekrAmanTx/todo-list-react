import React from "react"
import PropTypes from "prop-types"

function TextField({onChange, inputText}){
    return (
        <input type='text' onChange={onChange} value={inputText} />
    )
}

TextField.propTypes = {
    onChange: PropTypes.func.isRequired,
    inputText: PropTypes.string.isRequired
}

export default TextField