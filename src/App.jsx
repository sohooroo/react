
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {

  const getGreeting=(name)=>`안녕 ${name}`
  return (
    <main>
      <Header/>
      <Main/>
      <Section/>
      <h1>Hello React!</h1>
      <p>{getGreeting('Alice')}</p>
      <Footer/>
    </main>
  )
}

export default App
