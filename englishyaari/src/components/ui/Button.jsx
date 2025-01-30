import React from 'react';

export function Button({ children, className = '', ...props }) {
    return (
        <button
            className={`py-2 rounded-lg font-medium ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
