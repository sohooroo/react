import React from 'react'

const Aside = () => {
    const links = [1, 2, 3, 4, 5, 6]

    return (
        <aside>
            <h2>Aside section</h2>
            <ul>
                {links.map((link)=>(
                    <li key={link}>
                        <a href="#">
                            link-{link}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Aside