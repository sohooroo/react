import React from 'react'

const Header = () => {
    const menus =[
        {id:1, name:'page1'},
        {id:2, name:'page2'},
        {id:3, name:'page3'},
        {id:4, name:'page4'},
        {id:5, name:'page5'},
        {id:6, name:'page6'}
    ]

    return (
        <header>
            <h1>header section</h1>
            <nav>
                <p>navigation links</p>
                <ul>
                    {menus.map((menus,i)=>(
                        <li key={menus.id}>
                            <a href="#">
                                {menus.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header