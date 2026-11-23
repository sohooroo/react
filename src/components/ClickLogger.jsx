import React ,{useState,useRef} from 'react'

const ClickLogger = () => {
    const clickCount=useRef(0)

    const[text, setText]=useState('')

    const handLeClich =()=>{
        clickCount.current+=1

        setText(`버튼이 $(clickCount.current)번 클릭됨`)
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={handLeClich}>클릭</button>
        </div>
    )
}

export default ClickLogger