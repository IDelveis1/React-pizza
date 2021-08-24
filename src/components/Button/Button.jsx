import classNames from 'classnames';
import React from 'react';


const Button = ({ outline, className, children, onClick }) => {
    return(
        <button onClick={onClick} href="/cart.html" class={classNames('button', className, {
            'wo-nit': outline
        })}>
            {children}
            </button>
    )
}

export default Button;