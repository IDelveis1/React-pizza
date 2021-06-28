import classNames from 'classnames';
import React from 'react';


const Button = ({ outline, className, children }) => {
    return(
        <button href="/cart.html" class={classNames('button', className, {
            'wo-nit': outline
        })}>
            {children}
            </button>
    )
}

export default Button;