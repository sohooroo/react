
import './App.css'
import Button from './components/Button'
import Main from './components/Main'
import Menubutton from './components/Menubutton'
import InputCard from './components/InputCard'
import PostItem from './components/PostItem'

function App() {
  const posts = [
    { id: 1, title: "React 시작하기", author: "홍길동" },
    { id: 2, title: "JS 문법 정리", author: "김철수" },
    { id: 3, title: "CSS 레이아웃", author: "이영희" },
  ];
  const inputInfo = {
    title: "검색",
    placeholder: "검색어를 입력하세요",
  };
  const menus = [
    { id: 1, label: "메일", color: "red" },
    { id: 2, label: "카페", color: "blue" },
    { id: 3, label: "블로그", color: "green" },
  ];
  const buttonProps = {
    text: "메일2",
    color: "green",
    a: 1,
    b: 2
  }
  const mainData = {
    content: "객체로 전달된 메인 콘텐츠",
    bgColor: "lightblue"
  }

  return (
    <>
    {/* {posts.map((post)=>(

      <PostItem kye={post.id} {...post}/>
    ))}

    <InputCard {...inputInfo}/>

    {menus.map((menu)=>(

      <Menubutton key={menu.id} {...menu}/>
    ))} */}


    {/* <Main {...mainData}/>
    <Main content={'메인 영역입니다'} bgColor={'skyblue'}/>
    <Main bgColor={'skyblue'}/>
      <h1>Hello React!</h1> */}
      <Button {...buttonProps}/>
      <Button text={'메일'} color={'red'}/>
      <Button text={'카페'} color={'blue'}>
        <strong>중요</strong>
      </Button>
      <Button text={'블로그'}/> 
    </>
  )
}

export default App
