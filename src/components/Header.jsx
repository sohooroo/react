import React from 'react'

const Header = ({logo}) => {
    const meuns =['소개', '메뉴', '오시는 길']

    return (
        <header>
            {/* 로고 나오게 하기 */}
            <h1>{logo}</h1>
            <ul className="nav">
                {meuns.map((menu)=>(
                    <li key={menu}>
                        <a href="#">{menu}</a>
                    </li>
                ))}
                
            </ul>
        </header>
    )
}

export default Header