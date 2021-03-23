import React from 'react';

// delete useState. Should we care about when to have it in import r, ...

const Button = (props) => {
    return (
        <button type="button" class={`btn btn-${props.color}`}>
            {props.text}
        </button>
    )
}

export default Button;