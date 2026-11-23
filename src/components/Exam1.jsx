import React from 'react'

const Exam1 = ({name,age}) => {
    return (
        <div>
            <h3>나는 
                <span className='name'>
                    {name}
                </span>이고, 내 나이는 {age}살이야</h3>
        </div>
    )
}

export default Exam1