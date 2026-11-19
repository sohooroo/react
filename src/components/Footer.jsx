import React from 'react'

const Footer = () => {
    const menus = [
        {id: 1, name: 'contact us'},
        {id: 2, name: 'affiliates'},
        {id: 3, name: 'help'},
        {id: 4, name: 'follow us'}
    ]

    return (
        <footer>
            <h3>footer section</h3>
            <ul>
                {menus.map((m)=>(
                    <li key={m.id}>
                        <a href="#">
                            {m.name}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer