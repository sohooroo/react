import React from 'react'

const Footer = ({address, hours}) => {
    return (
        <footer>
            <p>{address}</p>
            <p>{hours}</p>
        </footer>
    )
}

export default Footer